import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
    <h1 style={{color:"#ccc",textAlign:"center"}}>Made with <span style={{color:"red"}}>&hearts;</span> by AAYUSH KUMAR</h1>
    <div className="todo-app">
      <TodoList />
    </div>
    </>
  );
}

export default App;