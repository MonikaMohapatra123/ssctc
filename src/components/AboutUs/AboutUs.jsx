// import React from 'react';
// import './AboutUs.css';

// const AboutUs = () => {
//   return (
//     <div className="about-us-section" style={{ backgroundImage: `url('/project-4.png')` }}>
//       <div className="about-us-overlay">
//         <h1>About Us</h1>
//         <p>
//           We are a top ten advisory tax and assurance firm dedicated to customized business
//           solutions that generate and sustain growth. We lead with purpose, and we walk with you
//           every step along your journey.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
import React from 'react';
import './AboutUs.css';

const AboutUs = ({ aboutData }) => {
  const { heading, description, backgroundImage } = aboutData;

  return (
    <div className="about-us-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="about-us-overlay">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AboutUs;

