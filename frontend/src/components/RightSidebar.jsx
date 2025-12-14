import React from "react";
import "./RightSidebar.css";
import Calendar from "../components/Calendar";
import TodayPieChart from "../components/TodayPieChart";

export default function RightSidebar() {
    return (
        <div className="right-sidebar">
            <div className="calendar-section">
                <Calendar />
            </div>
            <div className="today-performance">
                <div className="pie-chart-label">Today's Performance</div>
                <TodayPieChart/>
            </div>
        </div>

    );
}
