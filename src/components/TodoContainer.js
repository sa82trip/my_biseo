import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import { post, get } from "axios";
import styled, { css } from "styled-components";

const TodoContainer = () => {
  const H1 = styled.h1`
    color: white;
  `;
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
    fetch(`/delete?target=${name}`);
  };

  const updateHandle = (e) => {
    e.preventDefault();
    console.log("madamada");
  };

  const selectAllTodos = (e) => {
    e.preventDefault();
    console.log("request!!!");
    get("/selectAll").then((response) => setTodo(() => response.data));
  };
  return (
    <div className="todocontainer">
      <H1>kandan Todo List</H1>
      <button onClick={selectAllTodos}>todos</button>
      <form onSubmit={postHandle}>
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
      </form>
      <TodoList
        todo={todo}
        deleteHandle={deleteHandle}
        updateHandle={updateHandle}
      />
    </div>
  );
};
export default TodoContainer;
