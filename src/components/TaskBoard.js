import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveTask } from "../redux/taskSlice";
import Column from "./Column";

const TaskBoard = () => {
  const dispatch = useDispatch();
  const { todo, inProgress, completed } = useSelector((state) => state.tasks.tasks);
  const handleDragStart = (taskId) => {
    window.taskId = taskId;
  };

  const handleDrop = (column) => {
    const taskId = window.taskId;
    dispatch(moveTask({ taskId: parseInt(taskId), from: getTaskOrigin(taskId), to: column }));
  };

  const getTaskOrigin = (taskId) => {
    if (todo.some((task) => task.id === parseInt(taskId))) return "todo";
    if (inProgress.some((task) => task.id === parseInt(taskId))) return "inProgress";
    return "completed";
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Column title="To Do" tasks={todo} onDrop={() => handleDrop("todo")} onDragStart={handleDragStart} />
      <Column title="In Progress" tasks={inProgress} onDrop={() => handleDrop("inProgress")} onDragStart={handleDragStart} />
      <Column title="Completed" tasks={completed} onDrop={() => handleDrop("completed")} onDragStart={handleDragStart} />
    </div>
  );
};

export default TaskBoard;
