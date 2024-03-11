import { startCase } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataStart } from "../redux/reducers/task.reducer";
import Task from "./Task";

function Column({ colIndex }) {
  const colors = {
    open: "bg-red-500",
    in_progress: "bg-yellow-500",
    completed: "bg-green-500",
  };

  const [apiCalled, setApiCalled] = useState(false);

  const dispatch = useDispatch();

  //fetching data from redux state via useSelector hook
  const { columns } = useSelector((state) => state.data);

  //fetching current column to show
  const col = columns.find((col, i) => i === colIndex);

  // drop handler for drag and drop
  const handleOnDrop = (e) => {
    const { prevColIndex, taskIndex } = JSON.parse(
      e.dataTransfer.getData("text")
    );

    if (colIndex !== prevColIndex) {
      //redux + api call
      dispatch(
        dataStart({
          requestType: "dragTask",
          colIndex,
          prevColIndex,
          taskIndex,
        })
      );
    }
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    //check to call api once
    if (!apiCalled) {
      //redux + api call
      dispatch(dataStart({ requestType: "getAllTasks" }));
      setApiCalled(true)
    }
  }, [dispatch, apiCalled]);

  return (
    <div
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
      className="scrollbar-hide   mx-5 pt-[90px] min-w-[280px] "
    >
      <p className=" font-semibold flex  items-center  gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
        <div className={`rounded-full w-4 h-4 ${colors[col.name]} `} />
        {startCase(col.name)} ({col.tasks.length})
      </p>

      {col.tasks.map((task, index) => (
        <Task key={index} taskIndex={index} colIndex={colIndex} />
      ))}
    </div>
  );
}

export default Column;
