import React from "react";

// Import the CSS
import "../../styles/ViewMoreButton.css";

const ViewMoreButton = ({ children = "View More →", onClick }) => {
  return (
    <button className="view-more-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default ViewMoreButton;