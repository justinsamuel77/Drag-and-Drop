import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import InputField from "./components/InputField";
import TaskBoard from "./components/TaskBoard";

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: "20px" }}>
        <h2>Task Management Board</h2>
        <InputField />
        <TaskBoard />
      </div>
    </Provider>
  );
};

export default App;
