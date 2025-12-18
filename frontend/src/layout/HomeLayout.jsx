import React from "react";
import RightSidebar from "../components/home/RightSidebar";
import WeeklyChart from "../components/home/WeeklyChart";
import TodayToDoList from "../components/home/TodayToDoList";

// Import the plain CSS file
import "../styles/HomeLayout.css";

export default function HomeLayout({ children }) {
  return (
    <div className="home-layout">
      <div className="home-content">
        <WeeklyChart />
        <TodayToDoList />
      </div>

      <div className="right-sidebar">
        <RightSidebar />
      </div>
    </div>
  );
}