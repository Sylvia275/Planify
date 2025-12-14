import React, { useState } from "react";
import Stage from "./Stage";
import "./PlanInfo.css";

const CATEGORIES = [
  "Study",
  "Work",
  "Personal",
  "Health",
  "Fitness",
  "Language",
  "Exam",
  "Project"
];

const PlanInfo = () => {
  const [stages, setStages] = useState([0]);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const addStage = () => {
    setStages([...stages, stages.length]);
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="planinfo-wrapper">
      {/* Plan Title */}
      <div className="plan-title-card">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter plan title"
          className="plan-title-input"
        />
      </div>

      {/* Plan Info Card */}
      <div className="planinfo-card">
        {/* Image Upload */}
        <div className="image-upload">
          <input type="file" accept="image/*" />
          <span>Upload Image</span>
        </div>

        {/* Description + Categories */}
        <div className="planinfo-right">
          <div className="planinfo-field">
            <label>Description</label>
            <textarea placeholder="Describe your plan..." />
          </div>

          <div className="categories-section">
            <button
              className="categories-btn"
              onClick={() => setShowCategories(!showCategories)}
            >
              Categories
            </button>

            {showCategories && (
              <div className="categories-popup">
                {CATEGORIES.map((cat) => (
                  <span
                    key={cat}
                    className={`category-tag ${
                      selectedCategories.includes(cat) ? "active" : ""
                    }`}
                    onClick={() => toggleCategory(cat)}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stages */}
      <div className="stage-list">
        {stages.map((_, index) => (
          <Stage key={index} />
        ))}

        <button className="add-stage-btn" onClick={addStage}>
          + Add Stage
        </button>
      </div>
    </div>
  );
};

export default PlanInfo;
