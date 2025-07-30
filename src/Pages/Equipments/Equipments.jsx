import React from "react";
import dataJson from "../../json/data.json";
import "./Equipments.css";

const Equipments = () => {
  const data = dataJson["4"];
  const { heading, backgroundImage, description, equipments } = data;

  return (
    <div className="equipments-page">
     
       <h2>Major Equipment Available For PG Testing Of Cooling Tower</h2>
      <div className="equipment-grid">
        {equipments.map((item, index) => (
          <div key={index} className="equipment-card">
            <h4>{item.title}</h4>
            {item.subtitle && <p>{item.subtitle}</p>}
            {item.desc && <p>{item.desc}</p>}
            <p className="count">{item.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipments;
