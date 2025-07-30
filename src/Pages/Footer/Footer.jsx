import React from "react";
import "./Footer.css";
import data from "../../json/data.json";

const Footer = () => {
  const footerData = data["2"];
  if (!footerData) return null;

  const allLinks = footerData.footerLinks.flatMap((col) => col.column).slice(0, 5);

  return (
    <>
      {/* Horizontal line above the footer */}
      <hr className="footer-top-line" />

      <footer className="footer-wrapper">
        <ul className="footer-links-top">
          {allLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>

        <div className="footer-description">
          <p>{footerData.footerDescription}</p>
        </div>

        <hr className="footer-divider" />
      </footer>

      {/* White full-width AXIOMOS section */}
      <div className="footer-white-bar">
        <p>
          Website Designed & Maintained by{" "}
          <a
            href="https://axiomos.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="axiomos-link"
          >
            AXIOMOS
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
