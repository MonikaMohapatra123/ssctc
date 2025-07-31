import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // 👈 Import this
import "./JoinOurTeam.css";

const JoinOurTeam = ({ data }) => {
  const navigate = useNavigate(); // 👈 Initialize navigate

  if (!data) return null;

  const handleClick = () => {
    navigate("/about"); // 👈 Navigate to /about page
  };

  return (
    <div className="join-team-container">
      <div className="join-team-image">
        <img src={data.image} alt="Join Our Team" />
      </div>
      <div className="join-team-content">
        <p className="join-subheading">{data.subheading}</p>
        <h2 className="join-main-text">{data.heading}</h2>
        <button className="join-button" onClick={handleClick}>
          {data.buttonText} <FaArrowRight className="button-icon" />
        </button>
      </div>
    </div>
  );
};

export default JoinOurTeam;
