import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const StyledUl_for_todo = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const TodoList = ({ todo, deleteHandle, updateHandle }) => {
  return (
    <div>
      <StyledUl_for_todo>
        {/* https://medium.com/@leannezhang/curly-braces-versus-parenthesis-in-reactjs-4d3ffd33128f */}
        {todo.map((one, idx) => {
          return (
            <TodoItem
              key={idx}
              todo={one}
              deleteHandle={deleteHandle}
              updateHandle={updateHandle}
            />
          );
        })}
      </StyledUl_for_todo>
    </div>
  );
};
export default TodoList;
