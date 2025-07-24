


import React, { useRef } from "react";
import "./AboutCompany.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AboutCompany = ({ aboutCompanyData }) => {
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

  // ✅ Prevent error if data is missing
  if (!aboutCompanyData || !aboutCompanyData.cards) {
    return <div className="aboutcompany-wrapper">No data available.</div>;
  }

  const cardData = aboutCompanyData.cards;

  return (
    <div className="aboutcompany-wrapper">
      <div className="aboutcompany-heading-container">
        <div className="heading-left">
          <h2 className="main-heading">{aboutCompanyData.mainHeading}</h2>
        </div>
        <p className="sub-heading">{aboutCompanyData.subHeading}</p>
      </div>

      <div className="slider-wrapper">
        <div className="aboutcompany-slider" ref={sliderRef}>
          {cardData.map((card, index) => (
            <div key={index} className="aboutcompany-card">
              <img src={card.image} alt={card.title} />
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

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

export default AboutCompany;
