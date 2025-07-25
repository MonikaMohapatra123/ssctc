import React from "react";
import { FaArrowRight } from "react-icons/fa"; 
import "./JoinOurTeam.css";

const JoinOurTeam = ({ data }) => {
  if (!data) return null;

  return (
    <div className="join-team-container">
      <div className="join-team-image">
        <img src={data.image} alt="Join Our Team" />
      </div>
      <div className="join-team-content">
        <p className="join-subheading">{data.subheading}</p>
        <h2 className="join-main-text">{data.heading}</h2>
        <button className="join-button">
          {data.buttonText} <FaArrowRight className="button-icon" />
        </button>
      </div>
    </div>
  );
};

export default JoinOurTeam;
