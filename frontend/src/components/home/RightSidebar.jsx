import React from "react";
import Calendar from "./Calendar";
import TodayPieChart from "./TodayPieChart";

// Import the CSS
import "../../styles/RightSidebar.css"; // Adjust path if needed

export default function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="calendar-section">
        <Calendar />
      </div>

      <div className="today-performance">
        <div className="pie-chart-label">Today's Performance</div>
        <TodayPieChart />
      </div>
    </div>
  );
}