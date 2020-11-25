import React from "react";
import Card_Material from "../components/material_components/Card_Material";

const TodoItem = ({ updateHandle, deleteHandle, todo }) => {
  // console.log("TodoItem:", todo);
  // python에서 받아온 data

  return (
    <li
      style={{
        color: "white",
        display: "flex",
        flexDirection: "row",
      }}
      name={todo.created_date}
    >
      <div style={{ display: "flex" }}>
        <Card_Material
          todo={todo}
          deleteHandle={deleteHandle}
          updateHandle={updateHandle}
        />
      </div>
    </li>
  );
};
export default TodoItem;
