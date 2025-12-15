import { NavLink } from "react-router-dom";
import { useState } from "react";

// Icons
import ToggleIcon from "../assets/icons/Toggle.svg";
import HomeIcon from "../assets/icons/Home.svg";
import PlanIcon from "../assets/icons/Plan.svg";
import SavedIcon from "../assets/icons/Saved.svg";
import CommuIcon from "../assets/icons/Commu.svg";
import AddIcon from "../assets/icons/Add.svg";
import AboutIcon from "../assets/icons/About.svg";

// Import the CSS file
import "../styles/Sidebar.css";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  const menuItems = [
    { label: "Home", icon: HomeIcon, path: "/" },
    { label: "My Plan", icon: PlanIcon, path: "/plan" },
    { label: "Saved", icon: SavedIcon, path: "/saved" },
    { label: "Community", icon: CommuIcon, path: "/commu" },
    { label: "Add Plan", icon: AddIcon, path: "/add" },
  ];

  return (
    <aside
      className={`sidebar ${expanded ? "expanded" : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Top Section */}
      <div>
        {/* Toggle Icon */}
        <div className="sidebar-toggle">
          <img src={ToggleIcon} alt="Menu" className="sidebar-icon" />
        </div>

        {/* Main Menu Items */}
        <nav style={{ marginTop: 8 }}>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "sidebar-active sidebar-item" : "sidebar-item"
              }
            >
              <img src={item.icon} alt="" className="sidebar-icon" />
              <span className="sidebar-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* About Link (Bottom) */}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "sidebar-active sidebar-item about-item"
            : "sidebar-item about-item"
        }
      >
        <img src={AboutIcon} alt="About" className="sidebar-icon" />
        <span className="sidebar-label">About Us</span>
      </NavLink>
    </aside>
  );
}