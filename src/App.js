import React, { memo, useMemo } from "react";
import "./App.css";
import TodoItem from "./TodoItem";
import useTodos from "./useTodos";

function Button({ onClick, children }) {
  console.log("render button");
  return <button onClick={onClick}>{children}</button>;
}

const MemoButton = memo(Button);

function Test({ style }) {
  console.log("render test");
  return <div style={style}>Test</div>;
}

const redStyle = { color: "red" };
const blueStyle = { color: "blue" };

function App() {
  const {
    todos,
    setTodos,
    id,
    handleButtonClick,
    handleDeleteTodo,
    handleToggleIsDone,
    value,
    setValue,
    handleChange,
  } = useTodos();

  // const s = { color: value ? "red" : "blue" };
  const s = useMemo(() => {
    console.log("calcuate s");
    return { color: value ? "red" : "blue" };
    // return value ? redStyle : blueStyle;
  }, [value]);

  return (
    <div className="App">
      <Test style={s} />
      <input
        type="text"
        placeholder="todo"
        value={value}
        onChange={handleChange}
      />
      <MemoButton onClick={handleButtonClick}>Add todo</MemoButton>
      {/* <MemoButton>Add todo</MemoButton> */}
      {/* <Button>Add todo</Button> */}

      {todos.map((todo) => (
        <div>
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleIsDone={handleToggleIsDone}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
