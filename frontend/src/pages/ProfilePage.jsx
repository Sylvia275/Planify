import React, { useState } from "react";

// Import UI components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProfileInfo from "../components/ProfileInfo";
import FollowButton from "../components/FollowButton";
import Tabs from "../components/Tabs";

export default function ProfilePage() {

  // -----------------------------
  // STATE VARIABLES
  // -----------------------------

  // Number of followers for this profile
  const [followers, setFollowers] = useState(5);

  // Whether the current user has followed this profile
  const [isFollowed, setIsFollowed] = useState(false);

  // Currently selected tab: "Plans", "Liked", "Followers", "Following"
  const [activeTab, setActiveTab] = useState("Plans");

  // -----------------------------
  // FOLLOW BUTTON LOGIC
  // -----------------------------
  function toggleFollow() {
    setIsFollowed(prev => {
      // next = !prev (toggle)
      const next = !prev;

      // Increase followers when following, decrease when unfollowing
      setFollowers(f => f + (next ? 1 : -1));

      // Return new follow state
      return next;
    });
  }

  // -----------------------------
  // PAGE UI
  // -----------------------------
  return (
    <div className="app-root">

      {/* Left side navigation menu */}
      <Sidebar />

      {/* Main content column */}
      <div className="main-column">

        {/* Top bar with logo or navigation buttons */}
        <Header />

        {/* Profile header area: avatar, name, follow button */}
        <div className="profile-header">

          {/* Shows profile name + follower/following/plan counts */}
          <ProfileInfo
            username="Choi1505"
            followers={followers}
            followings={15}
            plans={10}
          />

          {/* Follow → Following button (toggles state) */}
          <FollowButton
            isFollowed={isFollowed}
            onToggle={toggleFollow}
          />
        </div>

        {/* Tabs: switch between Plans, Liked, Following, Followers */}
        <Tabs
          active={activeTab}
          onChange={setActiveTab}
        />

        {/* Main content + About card positioned as two columns */}
        <div className="page-content">

          {/* Left small card displaying user bio */}
          <aside className="about-card">
            <h3>About me</h3>
            <p>"This is bio"</p>
          </aside>

          {/* Actual content of the selected tab */}
          <section className="tab-content">
            <h4>{activeTab}</h4>

            {/* Placeholder box for tab data */}
            <div className="content-box">
              {activeTab} content here...
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
