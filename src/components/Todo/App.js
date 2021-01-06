import React, { useState, useMemo } from "react";
import "./App.css";
import TodoItem from "../../TodoItem";
import useTodos from "./useTodos";

// function Button({onClick, children}) {
//     console.log("render button");
//     return <button onClick={onClick}>
//         {children}</button>;
// }

// const MemoButton = memo(Button);

// const redStyle = {
//     color: "red"
// };
// const blueStyle = {
//     color: "blue"
// };

function App() {
  const {
    todos,
    handleButtonClick,
    handleDeleteTodo,
    handleToggleIsDone,
    value,
    handleChange
  } = useTodos();
  const [filter, setFliter] = useState( "all" )

  const filterTodos = useMemo( () => {
    console.log( 'calculate todos' )
    return todos.filter( todo => {
      if ( filter === "all" ) 
        return true;
      


      if ( filter === "active" ) {
        return !todo.isDone;
      }
      if ( filter === "completed" ) {
        return todo.isDone
      }
      return true;
    } )
  }, [ filter, todos ] )

  // const s = { color: value ? "red" : "blue" };
  // const s = useMemo(() => {
  //     console.log("calcuate s");
  //     return {
  //         color: value ? "red" : "blue"
  //     };
  //     // return value ? redStyle : blueStyle;
  // }, [lue]);

  return (
    <div className="App">
      <input type="text" placeholder="todo"
        value={value}
        onChange={handleChange}/>
      <button onClick={handleButtonClick}>Add todo</button>
      {
      filterTodos.map( ( todo ) => (
        <div>
          <TodoItem key={
              todo.id
            }
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleIsDone={handleToggleIsDone}/>
        </div>
      ) )
    } </div>
  );
}

export default App;
