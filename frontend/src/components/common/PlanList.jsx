import React, { useState } from "react";
import PlanCard from "./PlanCard";

import "../../styles/PlanList.css";

const PlanList = ({ initialPlans = [], defaultType = "plan" }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const items = Array.isArray(initialPlans) ? initialPlans : [];

  const filteredItems = items.filter((item) => {
    const search = searchTerm.toLowerCase();
    const text = (
      item?.name ||
      item?.username ||
      item?.fullName ||
      item?.displayName ||
      item?.title ||
      ""
    ).toLowerCase();
    return text.includes(search);
  });

  return (
    <div className="planlist-wrapper">
      <div className="planlist-container">
        <div className="planlist-header">

          <div className="planlist-search-box">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="planlist-search-input"
            />
            <svg className="planlist-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        <div className="planlist-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="plan-card-wrapper">
                <PlanCard item={item} type={item.type || defaultType} />
              </div>
            ))
          ) : (
            <div className="planlist-no-results">
              {searchTerm
                ? `No results found for "${searchTerm}"`
                : "No data available yet."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanList;