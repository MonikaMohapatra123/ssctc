import React, { useRef } from "react";
import "./OurExpertise.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OurExpertise = ({ expertiseData }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!expertiseData || !expertiseData.cards) {
    return <div className="ourexpertise-wrapper">No data available.</div>;
  }

  const cardData = expertiseData.cards;

  return (
    <div className="ourexpertise-wrapper">
      <div className="ourexpertise-heading-container">
        <div className="heading-left">
          <h2 className="main-heading">{expertiseData.mainHeading}</h2>
        </div>
        <p className="sub-heading">{expertiseData.subHeading}</p>
      </div>

      <div className="slider-wrapper">
        <div className="ourexpertise-slider" ref={sliderRef}>
          {cardData.map((card, index) => (
            <div key={index} className="ourexpertise-card">
              <img src={card.image} alt={card.title} />
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        {/* Arrows below on the left */}
        <div className="arrow-container">
          <button className="arrow left" onClick={() => scroll("left")}>
            <FaChevronLeft />
          </button>
          <button className="arrow right" onClick={() => scroll("right")}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
