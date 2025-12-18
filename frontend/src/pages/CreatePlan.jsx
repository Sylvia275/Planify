import React from "react";
import PlanInfo from "../components/createPlan/PlanInfo";

import "../styles/CreatePlan.css";

const CreatePlan = () => {
  const handleCreate = () => {
    console.log("Create plan");
    // Later: collect data, send to backend, redirect
  };

  const handleReview = () => {
    console.log("Review plan");
    // Later: open preview modal/page
  };

  return (
    <div className="createplan-page">
      <div className="createplan-header">
        <h1>Create New Plan</h1>
      </div>

      <div className="createplan-content">
        <PlanInfo />
      </div>

      <div className="createplan-actions">
        <button className="review-btn" onClick={handleReview}>
          Review
        </button>
        <button className="create-btn" onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default CreatePlan;