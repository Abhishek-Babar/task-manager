import React, { useState } from "react";
import Logo from "../assets/logo-mobile.svg";
import AddEditTaskModal from "../modals/AddEditTaskModal";

function Header() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);  
  return (
    <div className=" p-4 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0 ">
      <header className=" flex justify-between dark:text-white items-center  ">
        {/* Left Side  */}
        <div className=" flex items-center space-x-2  md:space-x-4">
          <img src={Logo} alt=" Logo " className=" h-6 w-6" />
            <h3 className=" truncate max-w-[250px] md:text-2xl text-xl font-bold md:ml-20 font-sans  ">
              Task Management
            </h3>
        </div>

        {/* Right Side */}

        <div className=" flex space-x-4 items-center md:space-x-6 ">
          <button
            className=" button  md:block "
            onClick={() => {
              setIsTaskModalOpen((prevState) => !prevState);
            }}
          >
            + Add New Task
          </button>
        </div>
      </header>
      {isTaskModalOpen && (
        <AddEditTaskModal
          setIsAddTaskModalOpen={setIsTaskModalOpen}
          type="add"
          device="mobile"
        />
      )}
    </div>
  );
}

export default Header;
