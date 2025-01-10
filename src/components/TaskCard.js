import React from "react";

const TaskCard = ({ task, onDragStart }) => {
  return (
    <div
      draggable
      onDragStart={() => onDragStart(task.id)}
      style={{
        padding: "10px",
        margin: "5px",
        backgroundColor: "lightblue",
        border: "1px solid #ddd",
        cursor: "grab",
      }}
    >
      {task.name}
    </div>
  );
};

export default TaskCard;
