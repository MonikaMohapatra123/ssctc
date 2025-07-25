import React, { useState } from "react";
import "./AdvisorySection.css";

const AdvisorySection = ({ data }) => {
  const [activeId, setActiveId] = useState(null);
  const [prevId, setPrevId] = useState(null);

  const handleHover = (id) => {
    if (id !== activeId) {
      setPrevId(activeId);
      setActiveId(id);
    }
  };

  const handleLeave = () => {
    setPrevId(null);
    setActiveId(null);
  };

  if (!data) return null;

  return (
    <div className="advisory-wrapper">
      <div className="advisory-container">
        <div className="advisory-left">
          <div className="advisory-line"></div>
          <h2 className="advisory-heading">
            {data.headingLeft.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
        </div>
        <div className="advisory-right">
          <p>{data.descriptionRight}</p>
        </div>
      </div>

      <div className="card-section">
        {data.cards.map((card) => {
          const isActive = card.id === activeId;
          const isPrev = card.id === prevId;

          return (
            <div
              className="card"
              key={card.id}
              onMouseEnter={() => handleHover(card.id)}
              onMouseLeave={handleLeave}
            >
              <div className="card-top">
                {isActive || isPrev ? (
                  <div className={`scroll-wrapper ${isPrev ? "right" : "left"}`}>
                    <div className="scroll-track">
                      {card.full}&nbsp;&nbsp;&nbsp;&nbsp;{card.full}&nbsp;&nbsp;&nbsp;&nbsp;{card.full}
                    </div>
                  </div>
                ) : (
                  <div className="short-text">{card.full.slice(0, 2)}</div>
                )}
              </div>
              <div className="card-bottom">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdvisorySection;
