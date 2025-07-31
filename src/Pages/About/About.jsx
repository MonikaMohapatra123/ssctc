import React, { useEffect, useState } from "react";
import dataJson from "../../json/data.json";
import AboutUs from "../../components/AboutUs/AboutUs";
import ResearchDevelopment from "../../components/ResearchDevelopment/ResearchDevelopment";
import Experience from "../../components/Experience/Experience";

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(dataJson["3"]);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <AboutUs aboutData={data} />
      <ResearchDevelopment researchDevelopment={data.researchDevelopment} />
      <Experience experienceData={data.experience} />
    </>
  );
};

export default About;
