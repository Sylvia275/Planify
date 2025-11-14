import React from "react";

// A simple list containing all tab names
// This keeps the code clean and prevents repeating <button> manually.
const tabs = ["Plans", "Liked", "Followings", "Followers"];

export default function Tabs({ active, onChange }) {
  /*
    Props:
      - active: the currently selected tab (string)
      - onChange: a function from the parent to update the active tab

    This component renders a row of buttons.
    When the user clicks a tab, it calls onChange()
    so the parent page knows the user switched tabs.
  */

  return (
    <div className="tabs">
      {tabs.map(t => (
        // Each button uses the tab name as a unique key
        <button
          key={t}

          // Adds class "active" only when this tab is selected
          className={`tab-btn ${active === t ? "active" : ""}`}

          // When clicked → notify parent to switch to this tab
          onClick={() => onChange(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
