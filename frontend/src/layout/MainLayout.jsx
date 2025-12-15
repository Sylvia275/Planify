import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

// Import the CSS file
import "../styles/MainLayout.css";

function MainLayout() {
  return (
    <div className="main-layout-container">
      <Header />
      <Sidebar />

      {/* Main content area */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;