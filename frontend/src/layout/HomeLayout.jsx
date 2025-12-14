import React from "react";
import RightSidebar from "../components/RightSidebar";
import WeeklyChart from "../components/WeeklyChart";
import TodayToDoList from "../components/TodayToDoList";
import "./HomeLayout.css";

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
