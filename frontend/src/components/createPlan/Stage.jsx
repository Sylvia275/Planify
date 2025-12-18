import React, { useState } from "react";
import Task from "./Task";

// Import the CSS
import "../../styles/Stage.css";

const Stage = ({ stageNumber = 1 }) => {
  const [tasks, setTasks] = useState([0]);

  const addTask = () => {
    setTasks([...tasks, tasks.length]);
  };

  return (
    <div className="stage-wrapper">
      <h2 className="stage-header">Stage {stageNumber}</h2>

      {/* Stage Card */}
      <div className="stage-card">
        <div className="stage-field">
          <label htmlFor={`stage-title-${stageNumber}`}>Title</label>
          <input
            id={`stage-title-${stageNumber}`}
            type="text"
            placeholder="Enter stage title"
          />
        </div>

        <div className="stage-field">
          <label htmlFor={`stage-description-${stageNumber}`}>Description</label>
          <input
            id={`stage-description-${stageNumber}`}
            type="text"
            placeholder="Enter stage description (optional)"
          />
        </div>
      </div>

      {/* Tasks */}
      <div className="task-section">
        {tasks.map((_, index) => (
          <Task key={index} taskNumber={index + 1} />
        ))}

        <button className="add-task-btn" onClick={addTask}>
          + Add Task
        </button>
      </div>
    </div>
  );
};

export default Stage;