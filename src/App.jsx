import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <div className="header">
        <h1>QuickTask</h1>
      </div>
      <Todo />
    </Provider>
  );
}

export default App;
