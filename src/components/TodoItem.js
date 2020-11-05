import React, { useState, useEffect } from "react";

const TodoItem = ({ updateHandle, deleteHandle, todo }) => {
  console.log("TodoItem:", todo);
  // python에서 받아온 data

  return (
    <li name={todo.created_date}>
      {`${todo.author} : => ${todo.description} ${todo.created_date}`}
      <button
        name={todo.created_date}
        onClick={updateHandle}
        style={{ margin: 1 }}
        value={"test_modify_button"}
      >
        modify
      </button>
      <button
        onClick={deleteHandle}
        name={todo.created_date}
        style={{ margin: 1 }}
        value={"test_delete_button"}
      >
        delete
      </button>
    </li>
  );
};
export default TodoItem;
