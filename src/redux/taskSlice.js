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
  },
});

export const { addTask, moveTask } = taskSlice.actions;
export default taskSlice.reducer;
