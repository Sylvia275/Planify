import React, { useState } from 'react';
import allPlans from '../data/allPlans';

import Carousel from "../components/common/Carousel.jsx";
import PlanList from "../components/common/PlanList.jsx";

// Import the separated CSS
import "../styles/MyPlanPage.css";

const MyPlanPage = () => {
  const [fullView, setFullView] = useState(null);

  // Simulate current user (later from auth/context)
  const currentUserId = "user123";

  // Filter plans belonging to the current user
  const myPlans = allPlans.filter(p => p.authorId === currentUserId);

  // Temporary: using all my plans for both sections
  // Later: add lastOpenedAt, status fields to allPlans data
  const recentlyOpened = myPlans;
  const inProcess = myPlans;

  // ================== FULL VIEW MODE ==================
  if (fullView) {
    return (
      <div className="my-plan-page">
        <div className="full-view-header">
          <button
            onClick={() => setFullView(null)}
            className="back-button"
          >
            ← Back
          </button>
          <h1 className="full-view-title">{fullView.title}</h1>
        </div>
        <PlanList initialPlans={fullView.items} defaultType="plan" />
      </div>
    );
  }

  // ================== NORMAL MODE ==================
  return (
    <div className="my-plan-page">
      <Carousel
        title="Recently Opened"
        items={recentlyOpened}
        type="plan"
        onViewMore={() => setFullView({
          title: 'All Recently Opened Plans',
          items: recentlyOpened
        })}
      />

      <Carousel
        title="In Progress"
        items={inProcess}
        type="plan"
        onViewMore={() => setFullView({
          title: 'All In Progress Plans',
          items: inProcess
        })}
      />

      {/* Full list of user's plans at the bottom */}
      <PlanList initialPlans={myPlans} defaultType="plan" />
    </div>
  );
};

export default MyPlanPage;