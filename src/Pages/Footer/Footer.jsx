import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import data from "../../json/data.json";

const iconMap = {
  FaFacebookF: <FaFacebookF />,
  FaInstagram: <FaInstagram />,
  FaLinkedinIn: <FaLinkedinIn />,
  FaYoutube: <FaYoutube />,
};

const Footer = () => {
  const footerData = data["2"]; // Accessing the footer object with id "2"

  return (
    <footer className="footer-wrapper">
      <div className="footer-top">
        {/* Left Column: Button + Icons */}
        <div className="footer-column-left">
          <button className="newsletter-btn">
            {footerData.buttonText}
          </button>
          <div className="social-icons">
            {footerData.socialIcons.map((iconObj, index) => (
              <div key={index} className="icon">
                {iconMap[iconObj.icon]}
              </div>
            ))}
          </div>
        </div>

        {/* Right Columns: Links */}
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

      {/* Bottom Text */}
      <div className="footer-bottom">
        <p>{footerData.footerDescription}</p>
      </div>
    </footer>
  );
};

export default Footer;
