import { call, put, select, takeEvery } from "redux-saga/effects";
import { toast } from "react-toastify";
import TaskService from '../../services/task.service';
import { getReducerError, showErrorToast } from "../../utils/redux";
import {
    dataStart,
    dataSuccess,
    dataError,
} from "../reducers/task.reducer";
import { cloneDeep, startCase } from "lodash";

function* dataWorker(action) {
    try {
        switch (action.payload.requestType) {
            case 'getAllTasks': {
                //backend api call via service
                const { data } = yield call(TaskService.getAllTasks)

                // cloumns is extracted from the state in the redux store via select method and 
                //clonedeep is used make deep copy colums as this variable will refers to data in
                // store which is not editable
                const { columns } = cloneDeep(yield select((state) => state.data));
                columns.forEach((col) => {
                    col.tasks = data.data.filter((task) => task.status === col.name)
                })

                // redux store update call this will allow changes to reflect on ui
                yield put(
                    dataSuccess({
                        columns: columns,
                    })
                );
                break;
            }

            case "addTask": {
                const { title, status, description, subtasks, newColIndex } =
                    action.payload;
                const task = { title, description, subtasks, status };

                // in all other saga tasks api is called in final but here
                // it is call firstly so we get task id from backend 
                // which can be later used while updating task in backend
                //backend api call via service
                const { data: apiData } = yield call(TaskService.addTask, task)
                const { columns } = cloneDeep(yield select((state) => state.data));
                columns.forEach((column, index) => {
                    if (index === newColIndex) {
                        column.tasks = [...column.tasks, apiData.data];
                    }
                });

                // redux store update call this will allow changes to reflect on ui
                yield put(
                    dataSuccess({
                        columns: columns,
                    })
                );
                toast.success(`Successfully created new task - ${task.title}`)
                break;
            }
            case "editTask": {
                const {
                    title,
                    status,
                    description,
                    subtasks,
                    prevColIndex,
                    taskIndex,
                } = action.payload;
                const { columns } = cloneDeep(yield select((state) => state.data));
                // this variable is use to collect task which needs to updated in backend
                let taskToUpdate;
                columns.forEach((column, index) => {
                    if (index === prevColIndex) {
                        column.tasks.forEach((task, index) => {
                            if (index === taskIndex) {
                                task.title = title;
                                task.status = status;
                                task.description = description;
                                task.subtasks = subtasks;
                                taskToUpdate = task;
                            }
                        });
                    }
                });

                //backend api call via service
                yield call(TaskService.editTask, taskToUpdate)

                // redux store update call this will allow changes to reflect on ui
                yield put(
                    dataSuccess({
                        columns: columns,
                    })
                );
                toast.success(`${taskToUpdate.title} has been edited successfully`)
                break;
            }

            case "dragTask": {
                const { colIndex, prevColIndex, taskIndex } = action.payload;
                const { columns } = cloneDeep(yield select((state) => state.data));
                const prevCol = columns.find((col, i) => i === prevColIndex);
                const task = prevCol.tasks.splice(taskIndex, 1)[0];
                let taskToUpdate
                columns.find((col, i) => {
                    if (i === colIndex) {
                        task.status = col.name;
                        taskToUpdate = task;
                        return col
                    }
                }).tasks.push(task);

                //backend api call via service
                yield call(TaskService.editTask, taskToUpdate)

                // redux store update call this will allow changes to reflect on ui
                yield put(
                    dataSuccess({
                        columns: columns,
                    })
                );
                toast.success(`${taskToUpdate.title} status has been changed to ${startCase(task.status)}`)
                break;
            }

            case "setSubtaskCompleted": {
                const payload = action.payload;
                const { columns } = cloneDeep(yield select((state) => state.data));
                const col = columns.find((col, i) => i === payload.colIndex);
                const task = col.tasks.find((task, i) => i === payload.taskIndex);
                const subtask = task.subtasks.find((subtask, i) => i === payload.index);
                subtask.isCompleted = !subtask.isCompleted;

                //backend api call via service
                yield call(TaskService.editTask, task)

                // redux store update call this will allow changes to reflect on ui
                yield put(
                    dataSuccess({
                        columns: columns,
                    })
                );
                toast.success(`Sub task "${subtask.title}" status is marked ${subtask.isCompleted ? "completed" : "in completed"}`)
                break;
            }

            case "setTaskStatus": {

                // this method is called only on edit popup close as we need change column for this and user changes task multiple time calling again and again wont be helpful
                const payload = action.payload;
                const { columns } = cloneDeep(yield select((state) => state.data));
                const col = columns.find((col, i) => i === payload.colIndex);
                if (payload.colIndex === payload.newColIndex) return;

                const task = col.tasks.find((task, i) => i === payload.taskIndex);
                task.status = payload.status;
                col.tasks = col.tasks.filter((task, i) => i !== payload.taskIndex);
                const newCol = columns.find((col, i) => i === payload.newColIndex);
                newCol.tasks.push(task);

                //backend api call via service
                yield call(TaskService.editTask, task)

                // redux store update call this will allow changes to reflect on ui
                yield put(
                    dataSuccess({
                        columns: columns,
                    })
                );
                toast.success(`${task.title} status has been changed to ${startCase(task.status)}`)
                break;
            }

            case "deleteTask": {
                const payload = action.payload;
                const { columns } = cloneDeep(yield select((state) => state.data));
                const col = columns.find((col, i) => i === payload.colIndex);
                let taskToDelete;
                col.tasks = col.tasks.filter((task, i) => {
                    if (i !== payload.taskIndex) {
                        return task
                    } else {
                        taskToDelete = task
                    }
                });

                //backend api call via service
                yield call(TaskService.deleteTask, taskToDelete.id);

                // redux store update call this will allow changes to reflect on ui
                yield put(
                    dataSuccess({
                        columns: columns,
                    })
                );
                toast.success(`${taskToDelete.title} has has been deleted successfully`)
                break;
            }

            default:
        }
    } catch (error) {
        const formattedError = getReducerError(error);
        yield put(dataError(formattedError));
        showErrorToast(formattedError);
    }
}

export default function* dataWatcher() {
    yield takeEvery(dataStart.type, dataWorker);
}


//get tasks remove name
