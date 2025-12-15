import React, { useState, useEffect, useRef } from "react";
import PlanCard from "./PlanCard";
import ViewMoreButton from "./ViewMoreButton";

import PrevIcon from "../../assets/icons/PreviousBtn.svg";
import NextIcon from "../../assets/icons/NextBtn.svg";

import "../../styles/Carousel.css";

const Carousel = ({ title, items, type, onViewMore }) => {
  const [offset, setOffset] = useState(0);
  const wrapperRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(5);

  const CARD_WIDTH = 180;  // Updated to 75% of 240
  const GAP = 18;  // Scaled down proportionally
  const ITEM_TOTAL_WIDTH = CARD_WIDTH + GAP;

  // Calculate how many cards fit in the container
  useEffect(() => {
    const calculateVisible = () => {
      if (wrapperRef.current) {
        const width = wrapperRef.current.offsetWidth;
        const calculated = Math.floor(width / ITEM_TOTAL_WIDTH);
        setVisibleItems(Math.max(1, calculated));
      }
    };

    calculateVisible();
    window.addEventListener("resize", calculateVisible);
    return () => window.removeEventListener("resize", calculateVisible);
  }, []);

  const maxOffset = Math.max(0, items.length - visibleItems);
  const hasPrev = offset > 0;
  const hasNext = offset < maxOffset;

  return (
    <div className="carousel-box">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {onViewMore && <ViewMoreButton onClick={onViewMore} />}
      </div>

      <div className="carousel" data-has-prev={hasPrev} data-has-next={hasNext}>
        {hasPrev && (
          <button
            className="nav-btn left"
            onClick={() => setOffset(Math.max(0, offset - 1))}
          >
            <img src={PrevIcon} alt="Previous" style={{ width: 50, height: 50 }} />
          </button>
        )}

        {hasNext && (
          <button
            className="nav-btn right"
            onClick={() => setOffset(Math.min(maxOffset, offset + 1))}
          >
            <img src={NextIcon} alt="Next" style={{ width: 50, height: 50 }} />
          </button>
        )}

        <div className="carousel-wrapper" ref={wrapperRef}>
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${offset * ITEM_TOTAL_WIDTH}px)` }}
          >
            {items.map((item) => (
              <PlanCard key={item.id} item={item} type={type} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;