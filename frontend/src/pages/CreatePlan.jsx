import React from "react";
import PlanInfo from "../components/createPlan/PlanInfo";
import "./CreatePlan.css";

const CreatePlan = () => {
  const handleCreate = () => {
    // Later:
    // - collect plan data
    // - send to backend
    // - redirect to MyPlan page
    console.log("Create plan");
  };

  const handleReview = () => {
    // Later:
    // - open Preview page / modal
    console.log("Review plan");
  };

  return (
    <div className="createplan-page">
      {/* Page Header */}
      <div className="createplan-header">
        <h1>Create New Plan</h1>
      </div>

      {/* Main Content */}
      <div className="createplan-content">
        <PlanInfo />
      </div>

      {/* Action Buttons */}
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
