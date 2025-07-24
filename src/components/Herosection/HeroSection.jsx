
// import React, { useState, useEffect } from "react";
// import "./Herosection.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import heroData from "../../json/data.json";

// const HeroSection = () => {
//   const [slides, setSlides] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (heroData["1"] && Array.isArray(heroData["1"].Herosection)) {
//       const formattedSlides = heroData["1"].Herosection.map((item) => ({
//         image: item.image,
//         texts: [item.heading, item.description].filter(Boolean),
//       }));
//       setSlides(formattedSlides);
//     }
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         slides.length ? (prevIndex + 1) % slides.length : 0
//       );
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, [currentIndex, slides]);

//   const handlePreviousClick = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNextClick = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   if (!slides.length) return <p>No slides available.</p>;

//   const progressWidth = ((currentIndex + 1) / slides.length) * 100;

//   return (
//     <div className="hero-container">
//       <div
//         className="hero-slider"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div className="hero-slide" key={index}>
//             <img
//               src={slide.image}
//               alt={`Slide ${index}`}
//               className="hero-image"
//             />
//             <div className="hero-overlay"></div>
//             <div className="hero-text-overlay">
//               {/* Progress bar above text */}
//               <div className="hero-range-bar">
//                 <div
//                   className="hero-range-fill"
//                   style={{ width: `${progressWidth}%` }}
//                 ></div>
//               </div>

//               {slide.texts.map((text, i) => (
//                 <p key={i} className={`hero-text-line hero-text-${i + 1}`}>
//                   {text}
//                 </p>
//               ))}

//               <button className="hero-cta-small-btn">Explore</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="hero-nav-buttons">
//         <button className="hero-nav-btn" onClick={handlePreviousClick}>
//           <FaChevronLeft />
//         </button>
//         <button className="hero-nav-btn" onClick={handleNextClick}>
//           <FaChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;








import React, { useState, useEffect } from "react";
import "./Herosection.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroSection = ({ herosectionData }) => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (Array.isArray(herosectionData)) {
      const formattedSlides = herosectionData.map((item) => ({
        image: item.image,
        texts: [item.heading, item.description].filter(Boolean),
      }));
      setSlides(formattedSlides);
    }
  }, [herosectionData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        slides.length ? (prevIndex + 1) % slides.length : 0
      );
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex, slides]);

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!slides.length) return <p>No slides available.</p>;

  const progressWidth = ((currentIndex + 1) / slides.length) * 100;

  return (
    <div className="hero-container">
      <div
        className="hero-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index}>
            <img src={slide.image} alt={`Slide ${index}`} className="hero-image" />
            <div className="hero-overlay"></div>
            <div className="hero-text-overlay">
              <div className="hero-range-bar">
                <div
                  className="hero-range-fill"
                  style={{ width: `${progressWidth}%` }}
                ></div>
              </div>
              {slide.texts.map((text, i) => (
                <p key={i} className={`hero-text-line hero-text-${i + 1}`}>
                  {text}
                </p>
              ))}
              <button className="hero-cta-small-btn">Explore</button>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-nav-buttons">
        <button className="hero-nav-btn" onClick={handlePreviousClick}>
          <FaChevronLeft />
        </button>
        <button className="hero-nav-btn" onClick={handleNextClick}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

