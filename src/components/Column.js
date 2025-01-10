import React from "react";
import TaskCard from "./TaskCard";

const Column = ({ title, tasks, column, onDrop, onDragStart }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    onDrop(taskId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        flex: 1,
        padding: "10px",
        border: "1px solid #ccc",
        minHeight: "200px",
        margin: "5px",
      }}
    >
      <h4>{title}</h4>
      {tasks?.map((task) => (
        <TaskCard key={task.id} task={task} onDragStart={onDragStart} column={column} />
      ))}
    </div>
  );
};

export default Column;
