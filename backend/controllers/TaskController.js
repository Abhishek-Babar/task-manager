import taskList from "../model/tasks.js";
import Responder from "../utils/response.utils.js";
import { v4 as uuidv4 } from 'uuid';

const getAll = (req, res) => {
  try {
    //entire tasklist is returned just like get all query
    return Responder.successs(res, taskList);
  } catch (error) {
    return Responder.error(res, error);
  }
};

const getById = (req, res) => {
  try {
    const { id } = req.params;

    //task is find with unique task id
    const task = taskList.find((task) => task.id === id);

    // if task is not found error is handled
    if (task) {
      return Responder.successs(res, task);
    } else {
      console.log("Task not found");
      return Responder.successs(res, { message: "Task Not Found" });
    }
  } catch (error) {
    return Responder.error(res, error);
  }
};

const createTask = (req, res) => {
  try {
    const body = req.body;

    // uuid generator is used to generate unique task id
    const task = { ...body, id: uuidv4() }
    taskList.push(task);
    return Responder.successs(res, task);
  } catch (error) {
    return Responder.error(res, error);
  }
};

const updateTask = (req, res) => {
  try {
    const { id } = req.params;

    // with help of unique id position of task is found in tasklist
    const index = taskList.findIndex((task) => task.id == id);

    // if task is not found error is handled
    if (index !== -1) {
      // spreading current task first later enables to update even single field
      taskList[index] = { ...taskList[index], ...req.body};
      return Responder.successs(res, taskList[index]);
    } else {
      console.log("Task not found");
      return Responder.successs(res, { message: "Task Not Found" });
    }
  } catch (error) {
    return Responder.error(res, error);
  }
};

const deleteTask = (req, res) => {
  try {
    const { id } = req.params;

    // with help of unique id position of task is found in tasklist
    const index = taskList.findIndex((task) => task.id == id);

    // if task is not found error is handled
    if (index !== -1) {
      taskList.splice(index, 1);
      return Responder.successs(res, taskList, "Task Deleted Successfully");
    } else {
      console.log("Task not found");
      return Responder.successs(res, { message: "Task Not Found" });
    }
  } catch (error) {
    return Responder.error(res, error);
  }
};

export default {
  getAll,
  getById,
  createTask,
  updateTask,
  deleteTask,
};
