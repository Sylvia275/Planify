import React from "react";
import SearchIcon from "../../assets/icons/search.svg";

// Import the CSS
import "../../styles/ExploreHeader.css";

const ExploreHeader = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { key: "subject", label: "Subjects" },
    { key: "certificate", label: "Certificates" },
    { key: "other", label: "Other" },
  ];

  return (
    <div className="explore-header">
      {/* Search Bar */}
      <div className="explore-search-bar">
        <input
          type="text"
          placeholder="Search courses, teachers..."
          className="explore-search-input"
        />
        <img
          src={SearchIcon}
          alt="Search"
          className="explore-search-icon"
        />
      </div>

      {/* Tabs */}
      <div className="explore-main-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`explore-tab-button ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExploreHeader;