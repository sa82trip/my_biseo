import React from "react";

const TodoItem = ({updateHandle, deleteHandle, todo}) => {
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
			{`${todo.author} : => ${todo.description} ${todo.created_date}`}
			<span
				onClick={deleteHandle}
				name={todo.created_date}
				style={{color: "red", margin: "0 1rem 0 1rem"}}>X</span>
			<div style={{display: "flex"}}>
				{/*
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

		  */}
			</div>
		</li>
	);
};
export default TodoItem;
