import { NavLink } from "react-router-dom";
import { useState } from "react";

// Icons
import Logo from "../assets/icons/Logo.svg";
import LanguageIcon from "../assets/icons/Language.svg";
import NotiIcon from "../assets/icons/Noti.svg";
import MyProfileIcon from "../assets/icons/Me.svg";
import SearchIcon from "../assets/icons/Search.svg";

// Import the CSS
import "../styles/Header.css";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="header">
      {/* LEFT: LOGO */}
      <NavLink to="/" className="header-logo-link">
        <img src={Logo} alt="Logo" className="header-logo" />
      </NavLink>

      {/* MIDDLE: SEARCH BAR */}
      <div className="header-search-container">
        <div className="header-search-wrapper">
          <img
            src={SearchIcon}
            alt="Search"
            className="header-search-icon"
          />
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="header-search-input"
          />
        </div>
      </div>

      {/* RIGHT: ICONS */}
      <div className="header-right-icons">
        <img src={LanguageIcon} alt="Language" className="header-icon" />
        <img src={NotiIcon} alt="Notifications" className="header-icon" />
        <img src={MyProfileIcon} alt="Profile" className="header-icon" />
      </div>
    </header>
  );
}