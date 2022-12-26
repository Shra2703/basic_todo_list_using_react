import React from "react";
import { useState } from "react";

const App = () => {
  const [item, setItem] = useState(" ");
  const [itemArr, setItemArr] = useState([]);

  const itemEvent = (e) => {
    setItem(e.target.value);
  };

  const itemAdded = () => {
    setItemArr((oldValue) => {
      return [...oldValue, item];
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

            {itemArr.map((itemValue) => {
              return <li>{itemValue}</li>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
