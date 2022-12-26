import React from "react";
import { useState } from "react";
import TodoListItem from "./TodoListItem";

const App = () => {
  const [item, setItem] = useState("");
  const [itemArr, setItemArr] = useState([]);

  const itemEvent = (e) => {
    setItem(e.target.value);
  };

  const itemAdded = () => {
    setItemArr((oldValue) => {
      return [...oldValue, item];
    });
    setItem(" ");
  };

  const deleteItems = (id ) => {
    console.log("deleted");
    setItemArr((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index  != id;
      })
    })
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Item" onChange={itemEvent} />
          <button onClick={itemAdded}> + </button>

          <ol>
            {/* <li>{item}</li> */}

            {itemArr.map((itemValue, index) => {
              return (
                <TodoListItem
                  itemValue={itemValue}
                  id={index}
                  key={index}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
