```
# Task Manager Backend

Welcome to the Task Manager Backend! 🚀

This backend application provides APIs for managing tasks.

## Getting Started

To start the server, follow these steps:

1. Install dependencies:
   ```
   npm install
   ```

2. Start the server:
   ```
   npm start
   ```

   **Command:**
   ```
   npm start
   ```

The server will start running on port 3001 by default.
Dont run any other server on 3001 as frontend is using it app wont get up

## Routes

### Get Entire Task List
- **Method:** GET
- **URL:** `http://localhost:3000/task/all`
- **Description:** Retrieves the entire list of tasks.
- **Controller:** `TaskController.getAll`

### Get Single Task
- **Method:** GET
- **URL:** `http://localhost:3000/task/:id`
- **Description:** Retrieves a single task by its ID.
- **Controller:** `TaskController.getById`

### Create Task
- **Method:** POST
- **URL:** `http://localhost:3000/task/`
- **Description:** Creates a new task.
- **Controller:** `TaskController.createTask`

### Update Task
- **Method:** PUT
- **URL:** `http://localhost:3000/task/:id`
- **Description:** Updates an existing task by its ID.
- **Controller:** `TaskController.updateTask`

### Delete Task
- **Method:** DELETE
- **URL:** `http://localhost:3000/task/:id`
- **Description:** Deletes a task by its ID.
- **Controller:** `TaskController.deleteTask`

Please make sure to replace `:id` in the URLs with the actual ID of the task.

Happy task managing! 📝✨
```
