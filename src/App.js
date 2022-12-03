import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/modules/todos";
import styled from "styled-components";

const App = () => {
  const [tempTodo, setTempTodo] = useState("");
  const globalTodo = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onClickAddTodoHandler = () => {
    if (tempTodo.length === 0) {
      alert("값을 입력하세요~");
    } else {
      dispatch(addTodo(tempTodo));
      setTempTodo("");
    }
  };
  return (
    <div className="App">
      <input
        onChange={(e) => {
          setTempTodo(e.target.value);
        }}
        value={tempTodo}
      />
      <button onClick={onClickAddTodoHandler}>추가하기</button>

      <h1>Todo List</h1>

      <StTodoListContainer>
        {globalTodo.map((a) => {
          return <StTodoBox key={a.title}>{a.title}</StTodoBox>;
        })}
      </StTodoListContainer>
    </div>
  );
};

const StTodoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StTodoBox = styled.div`
  width: 120px;
  height: 120px;
  border: 3px solid lightblue;
  border-radius: 20px;
  margin: 10px 15px 0px 0px;
`;
export default App;
