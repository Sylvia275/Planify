import React from "react";
import Subtask from "./Subtask";

// Import the CSS
import "../../styles/Task.css";

const Task = ({ taskNumber = 1 }) => {
  return (
    <div className="task-wrapper">
      <h2 className="task-header">Task {taskNumber}</h2>

      {/* Task Card */}
      <div className="task-card">
        <div className="task-field">
          <label htmlFor={`task-title-${taskNumber}`}>Title</label>
          <input
            id={`task-title-${taskNumber}`}
            type="text"
            placeholder="Enter task title"
          />
        </div>

        <div className="task-field">
          <label htmlFor={`task-description-${taskNumber}`}>Description</label>
          <input
            id={`task-description-${taskNumber}`}
            type="text"
            placeholder="Enter task description (optional)"
          />
        </div>

        <div className="task-field duration-field">
          <label htmlFor={`task-duration-${taskNumber}`}>Duration</label>
          <div className="duration-input">
            <input
              id={`task-duration-${taskNumber}`}
              type="number"
              min="0"
              placeholder="0"
            />
            <span className="duration-unit">Days</span>
          </div>
        </div>
      </div>

      {/* Subtasks */}
      <div className="subtask-section-header">Subtasks</div>
      <Subtask />
    </div>
  );
};

export default Task;