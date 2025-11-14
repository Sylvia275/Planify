import React, { useState } from "react";

// List of sidebar items (icon + label)
const items = [
  { label: "Home", icon: "🏠" },
  { label: "My Plans", icon: "🗂" },
  { label: "Liked", icon: "❤️" },
  { label: "Community", icon: "🧑‍🤝‍🧑" },
  { label: "Create", icon: "➕" },
  { label: "About Us", icon: "ℹ️" },
];

export default function Sidebar() {
  // "open" = whether sidebar is expanded or collapsed
  // false = collapsed (only icons)
  // true = expanded (icons + text)
  const [open, setOpen] = useState(false);

  return (
    // Add class "open" to change width (CSS handles that)
    <nav className={`sidebar ${open ? "open" : ""}`}>

      {/* Button to expand/collapse sidebar */}
      <button className="toggle" onClick={() => setOpen(o => !o)}>
        ☰
      </button>

      {/* Sidebar menu list */}
      <ul className="nav-list">

        {/*
          Loop through items array.
          For each item, render:
          - emoji icon
          - label text (only when sidebar is open)
        */}
        {items.map(it => (
          <li key={it.label} className="nav-item">
            {/* Icon always shown */}
            <span className="icon">{it.icon}</span>

            {/* Label only shown when "open" === true */}
            {open && <span className="label">{it.label}</span>}
          </li>
        ))}

      </ul>
    </nav>
  );
}
