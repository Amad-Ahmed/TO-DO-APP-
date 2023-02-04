import "./App.css";
import BottomBar from "./Components/BottomBar";
import NavBar from "./Components/NavBar";
import React, { useState } from "react";

function App(props) {
  const [task, setTask] = useState(0);
  return (
    <>
      <NavBar />
      <div className="card">
        <h1 className="heading">THINGS TO DO</h1>
        <div className="task">
          <input
            type="search"
            id="form1"
            className="task-input"
            placeholder="Task To Do"
            aria-label="Search"
          />
        </div>
        <div>
          <form>
            <input type="checkbox"></input>
            <label>Learn Javascript</label>
            <hr />
            <input type="checkbox"></input>
            <label>Learn React</label>
            <hr />
            <input type="checkbox"></input>
            <label>Learn Javascript</label>
            <hr />
          </form>
        </div>
        <BottomBar />
      </div>
    </>
  );
}

export default App;
