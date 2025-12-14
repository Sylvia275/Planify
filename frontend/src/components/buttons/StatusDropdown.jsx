import React, { useState } from "react";
import "./StatusDropdown.css";

const STATUSES = [
  { label: "Done", value: "done" },
  { label: "Undone", value: "undone" },
  { label: "Cancel", value: "cancel" }
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

  return (
    <div className="status-dropdown">
      <button
        className={`status-btn ${selected.value}`}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
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
