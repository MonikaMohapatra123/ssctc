
import React, { useRef, useEffect } from "react";
import "./AboutCompany.css";
const AboutCompany = ({ aboutCompanyData }) => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);


  // ✅ Continuous sliding effect
  useEffect(() => {
    const scrollSpeed = 0.9; // adjust speed

    const autoScroll = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += scrollSpeed;

        // Optional: Loop back to start when end is reached
        if (
          sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

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
       <div>
         <p className="sub-heading">{aboutCompanyData.subHeading}</p>
          <a href="tel:+919987549712" className="call-button">Call Us Now - +91 9987549712</a>
       </div>

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
      </div>
    </div>
  );
};

export default AboutCompany;
