import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import data from "../../json/data.json";

// Map string names to actual icon components
const iconMap = {
  FaFacebookF: <FaFacebookF />,
  FaInstagram: <FaInstagram />,
  FaLinkedinIn: <FaLinkedinIn />,
  FaYoutube: <FaYoutube />,
};

const Footer = () => {
  const footerData = data["2"]; // Access footer section with ID "2"

  if (!footerData) return null;

  return (
    <footer className="footer-wrapper">
      <div className="footer-top">
        {/* Left Column: Subscribe button and social icons */}
        <div className="footer-column-left">
          <button className="newsletter-btn">
            {footerData.buttonText} <FaArrowRight className="arrow-icon" />
          </button>

          <div className="social-icons">
            {footerData.socialIcons.map((iconObj, index) => (
              <div key={index} className="icon">
                {iconMap[iconObj.icon]}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Footer links */}
        <div className="footer-links">
          {footerData.footerLinks.map((col, colIndex) => (
            <ul key={colIndex}>
              {col.column.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Footer Bottom: Description */}
      <div className="footer-bottom">
        <p>{footerData.footerDescription}</p>
      </div>

      {/* Attribution */}
      <div className="footer-attribution">
        <div>© 2025 SSCTC & Associates All Rights Reserved</div>
        <div>
          Website designed and managed by{" "}
          <a
            href="https://axiomos.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="axiomos-link"
          >
            AXIOMOS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
