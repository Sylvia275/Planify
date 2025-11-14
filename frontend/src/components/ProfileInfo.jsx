import React from "react";

export default function ProfileInfo({ username, followers, followings, plans }) {
  return (
    <div className="profile-info">
      <div className="avatar" />
      <div className="profile-meta">
        <h2>{username}</h2>
        <p className="counts">
          {followings} followings • {followers} followers • {plans} plans
        </p>
      </div>
    </div>
  );
}
