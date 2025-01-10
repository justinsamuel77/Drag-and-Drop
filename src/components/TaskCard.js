import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/taskSlice";

const TaskCard = ({ task, column, onDragStart }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask({ taskId: task.id, column }));
  };

  const handleEdit = () => {
    if (isEditing && newName.trim()) {
      dispatch(editTask({ taskId: task.id, column, newName }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div
      draggable={!isEditing}
      onDragStart={() => !isEditing && onDragStart(task.id)}
      style={{
        padding: "10px",
        margin: "5px",
        backgroundColor: "lightblue",
        border: "1px solid #ddd",
        position: "relative",
        // cursor: "grab",
      }}
    >
      {
        isEditing ? (
          <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          style={{
            width: "80%",
            padding: "5px",
          }}
        />
        ) : 
        (
          <span>{task.name}</span>
        )
      }

      <div style={{ position: "absolute", top: "5px", right: "5px" }}>
      <button
          onClick={handleEdit}
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "3px",
            marginRight: "5px",
            cursor: "pointer",
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      <button
        onClick={handleDelete}
        style={{
          backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
        }}
      >
        ×
      </button>
    </div>
  );
};

export default TaskCard;
