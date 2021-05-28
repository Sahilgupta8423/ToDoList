import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ListComp from "./ListComp";
const ToDoList = () => {
  const [item, setItem] = useState();
  const [newItem, setNewItem] = useState([]);
  const itemEvent = (event) => {
    setItem(event.target.value);
  };
  const listOfItems = () => {
    setNewItem((preValue) => {
      return [...preValue, item];
    });
    setItem("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add Item"
            onChange={itemEvent}
            value={item}
          ></input>
          <Button className="newBtn" onClick={listOfItems}>
            <AddIcon></AddIcon>
          </Button>
          <br></br>
          <ol>
            {newItem.map((val, index) => {
              return (
                <>
                  <ListComp text={val} key={index}></ListComp>
                  <br />
                </>
              );
            })}
          </ol>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
