import React, { useState } from 'react';
import allPlans from '../data/allPlans';

import Carousel from "../components/common/Carousel.jsx";
import PlanList from "../components/common/PlanList.jsx";

// Import the separated CSS
import "../styles/SavedPage.css";

const SavedPage = () => {
  const [fullView, setFullView] = useState(null);

  // Temporary: using public plans as saved ones
  // Later: replace with actual saved plans from user context/auth
  const savedPlans = allPlans.filter(plan => plan.isPublic);

  // ================== FULL VIEW MODE ==================
  if (fullView) {
    return (
      <div className="saved-page">
        <div className="full-view-header">
          <button
            onClick={() => setFullView(null)}
            className="back-button"
          >
            ← Back
          </button>
          <h1 className="full-view-title">{fullView.title}</h1>
        </div>
        <PlanList
          initialPlans={fullView.items}
          defaultType={fullView.type || "plan"}
        />
      </div>
    );
  }

  // ================== NORMAL MODE ==================
  return (
    <div className="saved-page">
      <Carousel
        title="English"
        items={savedPlans}
        type="plan"
        onViewMore={() => setFullView({
          title: 'All Saved English Plans',
          items: savedPlans,
          type: 'plan'
        })}
      />

      <Carousel
        title="Math"
        items={savedPlans}
        type="plan"
        onViewMore={() => setFullView({
          title: 'All Saved Math Plans',
          items: savedPlans,
          type: 'plan'
        })}
      />

      <Carousel
        title="Coding"
        items={savedPlans}
        type="plan"
        onViewMore={() => setFullView({
          title: 'All Saved Coding Plans',
          items: savedPlans,
          type: 'plan'
        })}
      />
    </div>
  );
};

export default SavedPage;