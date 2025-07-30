import React from "react";
import "./SC.css";
import dataJson from "../../json/data.json";

const Certificates = () => {
  const certificates = dataJson["5"]; // directly read from JSON

  if (!certificates || !certificates.length) return <p>No certificates found.</p>;

  return (
    <>
      {certificates.map((item) => (
        <div
          key={item.id}
          className={`allaboutblock-container ${item.reverse ? "reverse" : ""}`}
        >
          <div className="allaboutblock-left">
            {item.image && (
              <img src={item.image} alt={item.title} loading="lazy" />
            )}
          </div>

          <div className="allaboutblock-right">
            {item.subtitle && (
              <h5 className="allaboutblock-subtitle">{item.subtitle}</h5>
            )}
            {item.title && (
              <h2 className="allaboutblock-title">{item.title}</h2>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Certificates;
