import React from "react";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";

import "../../styles/PlanCard.css";

const PlanCard = ({ item }) => {
  return (
    <div className="plan-card">
      <Link to={`/plans/${item.id}`} className="plan-card-link">
        <div className="plan-card-image" />
        <div className="plan-card-info">
          <h3>{item.title || item.name}</h3>
          <p>{item.duration || item.info || "No description available"}</p>
        </div>
      </Link>

      <LikeButton itemId={item.id} type="plan" />
    </div>
  );
};

export default PlanCard;