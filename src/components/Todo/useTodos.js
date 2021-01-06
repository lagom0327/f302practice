import { useState, useEffect, useRef, useCallback } from "react";
import useInput from "./useInput";

function writeTodosToLocalStorage(todos) {
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

export default function useTodos() {
  const id = useRef(1);
  const { value, setValue, handleChange } = useInput();
  const [todos, setTodos] = useState(() => {
    let todoData = window.localStorage.getItem("todos") || "";
    console.log(todoData);
    if (todoData) {
      todoData = JSON.parse(todoData);
      console.log(todoData);
      if (todoData.length !== 0) {
        id.current = todoData[0].id + 1;
      }
    }
    return todoData || [];
  });
  useEffect(() => {
    writeTodosToLocalStorage(todos);
  }, [todos]);
  const handleButtonClick = useCallback(() => {
    setTodos((prevTodos) => [
      {
        id: id.current,
        content: value,
      },
      ...prevTodos,
    ]);
    id.current++;
    setValue("");
  }, [id, value, setValue]);

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleIsDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id !== id
          ? todo
          : {
              ...todo,
              isDone: !todo.isDone,
            }
      )
    );
  };

  return {
    todos,
    setTodos,
    id,
    handleButtonClick,
    handleDeleteTodo,
    handleToggleIsDone,
    value,
    setValue,
    handleChange,
  };
}
