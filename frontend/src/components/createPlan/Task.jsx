import React from "react";
import Subtask from "./Subtask";
import "./Task.css";

const Task = () => {
  return (
    <div className="task-wrapper">
        <h2>Task</h2>
      {/* Task Card */}
      <div className="task-card">
        <div className="task-field">
          <label>Title</label>
          <input type="text" placeholder="Enter task title" />
        </div>

        <div className="task-field">
          <label>Description</label>
          <input type="text" placeholder="Enter task description" />
        </div>

        <div className="task-field duration-field">
          <label>Duration</label>
          <div className="duration-input">
            <input type="number" min="0" placeholder="0" />
            <span className="duration-unit">Days</span>
          </div>
        </div>
      </div>

      {/* Subtask Section */}
      <Subtask />
    </div>
  );
};

export default Task;
