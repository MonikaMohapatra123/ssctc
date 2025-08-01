import React from "react";
import "./Footer.css";
import data from "../../json/data.json";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerData = data["2"];
  if (!footerData) return null;

  const allLinks = footerData.footerLinks.flatMap((col) => col.column).slice(0, 5);

  const routeMap = {
    "Home": "/",
    "About Us": "/about",
    "Equipments": "/equipments",
    "Certificates": "/certificates",
    "Contact Us": "/contact",
  };

  return (
    <>
      <hr className="footer-top-line" />

      <footer className="footer-wrapper">
        <ul className="footer-links-top">
          {allLinks.map((linkText, index) => (
            <li key={index}>
              <Link to={routeMap[linkText] || "/"} className="footer-link">
                {linkText}
              </Link>
            </li>
          ))}
        </ul>

        <div className="footer-description">
          <p>{footerData.footerDescription}</p>
        </div>

        {/* 🔻 Company Address from JSON */}
        {footerData.footerAddress && (
          <div className="footer-address">
            <p>
              {footerData.footerAddress.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        )}

        <hr className="footer-divider" />
      </footer>

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
