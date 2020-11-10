import React, { useState } from "react";
import TodoList from "./TodoList";
import { post, get } from "axios";
import styled from "styled-components";

// styled-component를 사용하기
const H1 = styled.h1`
  color: gray;
  margin: 2px;
  // props를 이용하기
`;
// styled-component를 상속하기
const H1ex = styled(H1)`
  background: gray;
  color: white;
`;

const StyledTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 620px;
`;
const TodoContainer = (props) => {
  const [todo, setTodo] = useState([]);
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

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
    console.log("enter");
    const formData = new FormData();
    formData.append("author", author);
    formData.append("description", description);
    console.log(formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    post("/insert", formData, config).then((response) => {
      console.log(response);
      setTodo(response.data);
    });
  };

  const deleteHandle = (e) => {
    e.preventDefault();
    // li는 value가 무조건 number라는걸 잊지마라.
    const name = e.target.getAttribute("name");
    console.log(name);
    const newTodos = todo.filter((one) => one.created_date !== name);
    console.log(newTodos);
    setTodo(() => newTodos);
    fetch(`/api/delete?target=${name}`);
  };

  const updateHandle = (e) => {
    e.preventDefault();
    console.log("madamada");
  };

  const selectAllTodos = (e) => {
    e.preventDefault();
    console.log("request!!!");
    get("/api/selectAll").then((response) => setTodo(() => response.data));
  };
  return (
    <StyledTodoContainer>
      <H1>kandan Todo List</H1>
      <H1ex>write what you need to do!!</H1ex>
      <form style={{ display: "flex" }} onSubmit={postHandle} method="POST">
        <div>
          <input
            type="text"
            name="author"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <button type="submit">todo 등록하기</button>
        <button onClick={selectAllTodos}>todos</button>
      </form>
      <TodoList
        todo={todo}
        deleteHandle={deleteHandle}
        updateHandle={updateHandle}
      />
    </StyledTodoContainer>
  );
};
export default TodoContainer;
