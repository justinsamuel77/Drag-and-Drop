import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const InputField = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), name: task }));
      setTask("");
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        style={{ padding: "10px", width: "300px" }}
      />
      <button onClick={handleAddTask} style={{ padding: "10px 20px", marginLeft: "10px" }}>
        Add
      </button>
    </div>
  );
};

export default InputField;
