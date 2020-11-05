import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, deleteHandle, updateHandle }) => {
  return (
    <div>
      <ul>
        {/* https://medium.com/@leannezhang/curly-braces-versus-parenthesis-in-reactjs-4d3ffd33128f */}
        {todo.map((one, idx) => {
          return (
            <TodoItem
              todo={one}
              deleteHandle={deleteHandle}
              updateHandle={updateHandle}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
