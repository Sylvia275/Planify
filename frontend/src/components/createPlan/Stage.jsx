import React, { useState } from "react";
import Task from "./Task";
import "./Stage.css";

const Stage = () => {
  const [tasks, setTasks] = useState([0]);

  const addTask = () => {
    setTasks([...tasks, tasks.length]);
  };

  return (
    <div className="stage-wrapper">
        <h2>Stage</h2>
      {/* Stage Card */}
      <div className="stage-card">
        <div className="stage-field">
          <label>Title</label>
          <input type="text" placeholder="Enter stage title" />
        </div>

        <div className="stage-field">
          <label>Description</label>
          <input type="text" placeholder="Enter stage description" />
        </div>
      </div>

      {/* Task Sections */}
      <div className="task-section">
        {tasks.map((_, index) => (
          <Task key={index} />
        ))}

        <button className="add-task-btn" onClick={addTask}>
          + Add Task
        </button>
      </div>
    </div>
  );
};

export default Stage;
