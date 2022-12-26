import React from "react";

const TodoListItem = (props) => {
  return (
    <>
      <div className="todo_style">
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          
          x
        </button>

        <li> {props.itemValue}</li>
      </div>
    </>
  );
};

export default TodoListItem;
