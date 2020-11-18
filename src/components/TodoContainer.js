import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { post, get } from "axios";
import styled from "styled-components";
import {
  StyledForm,
  StyledH1,
  H1ex,
  StyledInput,
  StyledButton,
} from "../css/styled_components/StyledComponents";
import { useViewport } from "../context/ViewportProvider";
import "../css/todo.css";

const StyledTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TodoContainer = (props) => {
  const [todo, setTodo] = useState([]);
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const { width } = useViewport();

  const handleAuthorChange = (e) => {
    const author = e.target.value;
    setAuthor(author);
  };

  const handleDescriptionChange = (e) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
  };

  const postHandle = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("author", author);
    formData.append("description", description);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    post("/api/insert", formData, config).then((response) => {
      setTodo(response.data);
    });
  };

  const deleteHandle = (e) => {
    e.preventDefault();
    // li는 value가 무조건 number라는걸 잊지마라.
    const name = e.target.getAttribute("name");
    const newTodos = todo.filter((one) => one.created_date !== name);
    setTodo(() => newTodos);
    fetch(`/api/delete?target=${name}`);
  };

  const updateHandle = (e) => {
    e.preventDefault();
  };

  const selectAllTodos = (e) => {
    e.preventDefault();
    get("/api/selectAll").then((response) => setTodo(() => response.data));
  };
  return (
    <StyledTodoContainer>
      <StyledH1>SIMPLE TODO LIST</StyledH1>
      <H1ex>WRITE WHAT YOU NEED TO DO!!</H1ex>
      <StyledForm
        style={{ display: "flex" }}
        onSubmit={postHandle}
        method="POST"
      >
        <div>
          <StyledInput
            inputWidth={width - 30}
            type="text"
            name="author"
            value={author}
            onChange={handleAuthorChange}
            className="writerInput"
          />
        </div>
        <div>
          <StyledInput
            inputWidth={width - 30}
            type="text"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            className="descriptionInput"
          />
        </div>
        <div style={{ display: "flex", alignItems: "stretch" }}>
          <StyledButton className="submitStyledButton" type="submit">
            ADD TODO
          </StyledButton>
          <StyledButton className="loadStyledButton" onClick={selectAllTodos}>
            LOAD TODO
          </StyledButton>
        </div>
      </StyledForm>
      <TodoList
        todo={todo}
        deleteHandle={deleteHandle}
        updateHandle={updateHandle}
      />
    </StyledTodoContainer>
  );
};
export default TodoContainer;
