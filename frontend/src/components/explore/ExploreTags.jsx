import React from "react";

// Import the CSS
import "../../styles/ExploreTags.css";

const tagGroups = {
  subject: [
    "Math", "Physics", "Chemistry", "Literature", "English",
    "Biology", "History", "Geography", "Computer Science"
  ],
  certificate: [
    "IELTS", "TOEIC", "VSTEP", "SAT", "IELTS UKVI", "TOPIK"
  ],
  other: [
    "Soft Skills", "Programming", "Design", "Marketing", "Foreign Languages"
  ],
};

const ExploreTags = ({ activeTab, pinnedTags, onPin, onUnpin }) => {
  const currentTags = tagGroups[activeTab] || [];

  return (
    <div className="explore-tags-box">
      {/* Pinned Tags */}
      {pinnedTags.length > 0 && (
        <div className="explore-pinned-tags">
          {pinnedTags.map((tag) => (
            <span key={`pinned-${tag}`} className="explore-tag pinned">
              <strong>{tag}</strong>
              <button
                className="explore-unpin-btn"
                onClick={() => onUnpin(tag)}
                aria-label={`Unpin ${tag}`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Available Tags */}
      <div className="explore-tags-container">
        {currentTags
          .filter((tag) => !pinnedTags.includes(tag))
          .map((tag, index) => (
            <span
              key={index}
              className="explore-tag"
              onClick={() => onPin(tag)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && onPin(tag)}
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default ExploreTags;