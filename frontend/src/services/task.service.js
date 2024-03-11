import axios from "axios";


const TaskService = {
    getAllTasks:  () =>  axios.get(`http://localhost:3001/task/all`),
    addTask: (task) =>  axios.post(`http://localhost:3001/task/`, task),
    editTask:  (task) =>  axios.put(`http://localhost:3001/task/${task.id}`, task),
    deleteTask:  (taskId) =>  axios.delete(`http://localhost:3001/task/${taskId}`),
};
export default TaskService;
