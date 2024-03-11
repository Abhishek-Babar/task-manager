Sure, here's an example README for the frontend:

```
# Task Manager Frontend

Welcome to the Task Manager Frontend! 🚀

This frontend application provides a user interface for managing tasks. It includes functionalities such as organizing tasks into sections, dragging and dropping tasks between sections, editing task details, and adding new tasks.

## Getting Started

To start the frontend application, follow these steps:

1. Install dependencies:
   ```
   npm install
   ```

2. To start the frontend application, run the following command in your terminal:
   ```
   npm start
   ```

The frontend application will be accessible at `http://localhost:3000` by default.

## Functionality

### Task Sections

The application is divided into three sections for tasks:
- Open
- In Progress
- Completed

You can drag and drop tasks between these sections, and the task's status will automatically update accordingly.

### Editing Tasks

To edit a task, click on the task card. Here, you can:
- Change the status of the task
- Mark subtasks as completed

For further editing, click on the ellipsis (...) icon in the top right corner of the task popup. Here, you will find options for editing or deleting the task. You can edit the task name, description, or other details in this section.

### Adding New Tasks

To add a new task, click on the "Add New Task" button in the top right corner of the application. This will open a form where you can enter the details of the new task.

Happy task managing! 📝✨
```

Feel free to customize this README further to match your specific frontend application and requirements.

Also there is ux experience that when you change status of task it does show popup immedietly reason =>
this method is called only on edit popup close as we need change column for this and user changes task multiple time calling again and again wont be helpful