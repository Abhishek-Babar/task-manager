import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Column from "./Column";

function TaskList() {
  //fetching data from redux state via useSelector hook
  const { columns } = useSelector((state) => state.data);

  return (
    <div className="bg-[#f4f7fd] dark:bg-[#20212c] overflow-x-auto scrollbar-hide flex justify-center">
      {/* Columns Section */}
      {columns.length && (
        <div className="flex flex-wrap justify-center">
          {columns.map((col, index) => (
            <Column key={index} colIndex={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
