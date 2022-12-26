import React from "react";


const TodoListItem = (props) => {
  return (
    <>
      <div className="todo_style">
      <button > x </button>

        <li> {props.itemValue}</li>
      </div>
    </>
  );
};

export default TodoListItem;
