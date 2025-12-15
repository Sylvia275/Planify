import React, { useState } from "react";

// Import the CSS
import "../../styles/Subtask.css";

const Subtask = () => {
  const [inputValue, setInputValue] = useState("");
  const [subtasks, setSubtasks] = useState([]);

  const addSubtask = () => {
    const trimmed = inputValue.trim();
    if (trimmed === "") {
      alert("Please enter a subtask!");
      return;
    }
    setSubtasks([...subtasks, trimmed]);
    setInputValue("");
  };

  const removeSubtask = (indexToRemove) => {
    setSubtasks(subtasks.filter((_, index) => index !== indexToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addSubtask();
    }
  };

  return (
    <div className="subtask-wrapper">
      <h3 className="subtask-header">Subtasks</h3>

      {/* Input Row */}
      <div className="subtask-input-row">
        <input
          type="text"
          placeholder="Add a subtask..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          className="subtask-input"
        />
        <button onClick={addSubtask} className="subtask-add-btn">
          Add
        </button>
      </div>

      {/* Subtask List */}
      {subtasks.length === 0 ? (
        <p className="subtask-empty">No subtasks yet. Add one above!</p>
      ) : (
        <ul className="subtask-list">
          {subtasks.map((subtask, index) => (
            <li key={index} className="subtask-item">
              <span className="subtask-text">{subtask}</span>
              <button
                onClick={() => removeSubtask(index)}
                className="subtask-remove-btn"
                aria-label="Remove subtask"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Subtask;