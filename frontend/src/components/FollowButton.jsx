import React from "react";

export default function FollowButton({ isFollowed, onToggle }) {
  return (
    <div className="follow-wrap">
      <button
        className={`follow-btn ${isFollowed ? "followed" : ""}`}
        onClick={onToggle}
      >
        {isFollowed ? "✓ Followed" : "+ Follow"}
      </button>
    </div>
  );
}
