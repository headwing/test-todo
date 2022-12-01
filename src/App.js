import logo from "./logo.svg";
import "./App.css";
import { useState, useRef } from "react";

function App() {
  let [todo, setTodo] = useState(["리액트를 공부해봅시다.", "푹 쉬기"]);
  let [tempTodo, setTempTodo] = useState("");

  const addTodoHandler = (e) => {
    let copy = [...todo];
    copy.push(tempTodo);
    setTodo(copy);
  };

  const inputRef = useRef(null);

  const clearInput = () => {
    inputRef.current.value = "";
    setTempTodo("");
  };

  return (
    <div className="App">
      <input
        onChange={(e) => {
          setTempTodo(e.target.value);
        }}
        ref={(element) => (inputRef.current = element)}
      />
      <button
        onClick={(e) => {
          addTodoHandler();
          clearInput();
        }}
      >
        추가하기
      </button>

      <h1>Todo List</h1>

      <div className="todoList">
        {todo.map((a, i) => {
          return <div className="todoListIndi">{a}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
