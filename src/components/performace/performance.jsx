import React from "react";
import "./performance.css";
import { FaCheckCircle } from "react-icons/fa";

const PerformanceExperience = () => {
  const experiences = [
    {
      company: "Reliance Power for their plant at ROSA",
      description:
        "Thermal Upgrade of 1 no Cooling tower consisting of 12 cells having a capacity of 39000 m3/hr of 12 cells at Reliance Power Rosa through Messrs. MM Aqua was carried out and considerable improvement in cold water temperature was achieved and proved after carrying out thermal testing."
    },
    {
      company: "Abuja Cement – Unit - Maratha Cement Plant at Chandrapur District in Maharashtra",
      description:
        "Thermal Upgrading of Cooling Tower through Messrs. MM Aqua. Thermal upgrade was successfully carried out on 2 cells. Thermal testing was carried out and the guarantees in cold water improvement were achieved and solution to fouling was proved."
    },
    {
      company: "Utam Galva Metallics Ltd – Wardha",
      description:
        "Thermal testing was carried out to assess the present tower performance and to reason for shortfall. Accordingly, report was prepared indicating the actual design condition vs present performance, Design rating of the tower, physical observations, major reasons for nonperformance and methods and procedure to improve performance. The tower consisted of 4 cells of counter flow IDCT with film fill."
    },
    {
      company: "UPL limited Ankleshwar",
      description:
        "for the various process plants. A total of 16 towers were tested and complete ratings design vs present rating were presented. Report was submitted indicating the reasons for nonperformance and ways and means to improve the tower. In some towers the fills where changed as per recommendations and the tower performance and clogging which was previously observed were drastically reduced."
    },
    {
      company: "JORD INDUSTRIES - UAE DUBAI",
      description:
        "for the cooling towers catering to EMAR-BHURJ KHALIFA. A total of 6 cells were tested and the capacity of each tower was established along with the actual design capacity of the tower. The reason for major shortfall in the towers were identified and report was handed over to EMAR through JORD INDUSTRIES. There were major problems with the water distribution, which was identified, and accordingly suitable nozzle sizing was varied to suit the existing condition. Similarly, fan performance issues has been pointed out and action would be taken shortly."
    },
    {
      company: "Reliance Power Butibori",
      description:
        "Thermal upgrade was successfully carried out on 2 cells through Messrs. MM Aqua and the guarantees in cold water improvement were achieved. Performance test was carried out both pre and post improvement."
    },
    {
      company: "ACC Chanda",
      description:
        "Thermal upgrade was successfully carried out on 2 cell towers through Messrs. MM Aqua and guarantees in cold water improvement were achieved. Both pre and post thermal upgrade test was carried out."
    }
  ];

  return (
    <div className="performance-wrapper">
      <h2 className="performance-heading">
        <FaCheckCircle className="icon" />
        Thermal Performance Improvement Experiences Along With CT Performance Testing.
      </h2>
      <ul className="experience-list">
        {experiences.map((item, index) => (
          <li key={index} className="experience-item">
            <strong>{item.company} –</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceExperience;
