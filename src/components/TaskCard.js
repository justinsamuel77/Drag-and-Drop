import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";

const TaskCard = ({ task, column, onDragStart }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask({ taskId: task.id, column }));
  };

  return (
    <div
      draggable
      onDragStart={() => onDragStart(task.id)}
      style={{
        padding: "10px",
        margin: "5px",
        backgroundColor: "lightblue",
        border: "1px solid #ddd",
        position: "relative",
        cursor: "grab",
      }}
    >
      <span>{task.name}</span>
      <button
        onClick={handleDelete}
        style={{
          position: "absolute",
          top: "5px",
          right: "5px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "20px",
          height: "20px",
          cursor: "pointer",
        }}
      >
        ×
      </button>
    </div>
  );
};

export default TaskCard;
