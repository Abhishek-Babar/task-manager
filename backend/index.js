import express from "express";
import tasks from "./routes/tasks.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

//makes req.body available for accessing parsed JSON data in route handlers
app.use(express.json());

app.use((req, res, next) => {
  // allowed cross origin request
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  // allow other request methods than default
  res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE');
  next();
});

// middleware for task routes handling
app.use("/task", tasks);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
