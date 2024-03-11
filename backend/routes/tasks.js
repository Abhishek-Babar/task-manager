import express from "express";
import TaskController from "../controllers/TaskController.js";

// express router is created
const router = express.Router();

/* GET Entire task list method: get url:  http://localhost:3000/task/all */
router.get("/all", TaskController.getAll);

/* GET a single task method: get url: get http://localhost:3000/task/:id */
router.get("/:id", TaskController.getById);

/* Create task method: post url:  http://localhost:3000/task/ */
router.post("/", TaskController.createTask);

/* Update task method: put url: http://localhost:3000/task/:id */
router.put("/:id", TaskController.updateTask);

/* Delete task method: delete url:  http://localhost:3000/task/ */
router.delete("/:id", TaskController.deleteTask);

export default router;
