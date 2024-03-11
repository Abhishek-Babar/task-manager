**Task Management App**

This is a task management application that helps you organize your tasks efficiently. It consists of both frontend and backend components. Follow the instructions below to run the application on your local machine.

### Backend

#### Installation
1. Change directory to the backend folder:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

#### Starting the Server
3. Start the backend server:
   ```
   npm start
   ```
   The backend server will start running at `http://localhost:3001`.
   Please dont run any other app on 3001 port
### Frontend

#### Installation
4. Change directory to the frontend folder:
   ```
   cd frontend
   ```

5. Install dependencies:
   ```
   npm install
   ```

#### Starting the Development Server
6. Start the frontend development server:
   ```
   npm start
   ```
   The frontend server will start running at `http://localhost:3000`.

### Using the Task Management App
Once both the backend and frontend servers are running, you can access the task management app by opening `http://localhost:3000` in your web browser.

### Features
- View all tasks: Get a comprehensive list of all tasks.
- Drag and Drop: Drag a task from one section to another to change status. 
- View a single task: Retrieve detailed information about a specific task.
- Create a new task: Add a new task to the list.
- Update a task: Modify the details of an existing task.
- Delete a task: Remove a task from the list.

### Backend API Endpoints
- **GET /task/all:** Get all tasks.
- **GET /task/:id:** Get a single task by ID.
- **POST /task/:id:** Create a new task.
- **PUT /task/:id:** Update an existing task.
- **DELETE /task/:id:** Delete a task.

### Technologies Used
- **Backend:** Node.js, Express.js
- **Frontend:** React.js, Tailwind csss¯

Now you can start using the task management app to organize your tasks efficiently!
