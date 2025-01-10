import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || {
    todo: [],
    inProgress: [],
    completed: [],
  },
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state?.tasks?.todo?.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    moveTask(state, action) {
      const { taskId, from, to } = action.payload;
      const taskIndex = state.tasks[from].findIndex((task) => task.id === taskId);
      const [task] = state.tasks[from].splice(taskIndex, 1);
      state.tasks[to].push(task);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask(state, action) {
      const { taskId, column } = action.payload;
      state.tasks[column] = state.tasks[column].filter((task) => task.id !== taskId);
      localStorage.setItem("tasks", JSON.stringify(state.tasks))
    },
    editTask(state, action) {
      const { taskId, column, newName } = action.payload;
      const task = state.tasks[column].find((task) => task.id === taskId);
      if (task) {
        task.name = newName;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    }

  },
});

export const { addTask, moveTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
