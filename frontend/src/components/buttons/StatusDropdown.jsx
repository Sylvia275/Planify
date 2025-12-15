import React, { useState } from "react";

// Import the CSS
import "../../styles/StatusDropdown.css";

const STATUSES = [
  { label: "Done", value: "done", color: "done" },
  { label: "Undone", value: "undone", color: "undone" },
  { label: "Cancel", value: "cancel", color: "cancel" },
];

const StatusDropdown = ({ defaultStatus = "undone", onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(
    STATUSES.find((s) => s.value === defaultStatus) || STATUSES[1]
  );

  const handleSelect = (status) => {
    setSelected(status);
    setIsOpen(false);
    if (onChange) onChange(status.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") setIsOpen(false);
  };

  return (
    <div
      className="status-dropdown"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <button
        className={`status-btn ${selected.color}`}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selected.label}
      </button>

      {isOpen && (
        <div className="status-menu">
          {STATUSES.map((status) => (
            <div
              key={status.value}
              className="status-item"
              onClick={() => handleSelect(status)}
              onKeyDown={(e) => e.key === "Enter" && handleSelect(status)}
              role="menuitem"
              tabIndex={0}
            >
              {status.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;