import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="overflow-scroll">
      <Header />
      <TaskList/>
      {/* Component to show success or error flash */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
