import React, { useState } from 'react';
import ExploreHeader from '../components/explore/ExploreHeader';
import ExploreTags from '../components/explore/ExploreTags';
import allPlans from '../data/allPlans';

import Carousel from "../components/common/Carousel.jsx";
import PlanList from "../components/common/PlanList.jsx";

// Import the separated CSS file
import "../styles/ExplorePage.css";

const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState('subject');
  const [pinnedTags, setPinnedTags] = useState([]);
  const [fullView, setFullView] = useState(null);

  const handlePinTag = (tag) => {
    if (!pinnedTags.includes(tag)) {
      setPinnedTags([...pinnedTags, tag]);
    }
  };

  const handleUnpinTag = (tag) => {
    setPinnedTags(pinnedTags.filter(t => t !== tag));
  };

  // Filter only public plans
  const publicPlans = allPlans.filter(plan => plan.isPublic);

  // ================== FULL VIEW MODE ==================
  if (fullView) {
    return (
      <div className="explore-page">
        <div className="full-view-header">
          <button
            onClick={() => setFullView(null)}
            className="back-button"
          >
            ← Back to Explore
          </button>
          <h1 className="full-view-title">{fullView.title}</h1>
        </div>
        <PlanList initialPlans={fullView.items} />
      </div>
    );
  }

  // ================== NORMAL EXPLORE MODE ==================
  return (
    <div className="explore-page">
      <ExploreHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <ExploreTags
        activeTab={activeTab}
        pinnedTags={pinnedTags}
        onPin={handlePinTag}
        onUnpin={handleUnpinTag}
      />

      <Carousel
        title="Featured Plans"
        items={publicPlans}
        type="plan"
        onViewMore={() => setFullView({
          title: 'All Featured Plans',
          items: publicPlans
        })}
      />

      <Carousel
        title="Plan"
        items={publicPlans} // Replace with actual users data if available
        type="plan"
        onViewMore={() => setFullView({
          title: 'All Plans',
          items: publicPlans
        })}
      />
    </div>
  );
};

export default ExplorePage;