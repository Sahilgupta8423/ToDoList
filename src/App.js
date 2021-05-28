import React from "react";
import ToDoList from "./ToDoList";
const App = () => {
  // Array Distructing
  return (
    <>
      <ToDoList />
    </>
  );
};

export default App;

// we can not put any statement (if-else/switch/for) inside JSX.
// Hooks is used to change the state of components, variables etc.
// we can also pass function or object in useState().
