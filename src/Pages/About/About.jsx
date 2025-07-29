import React, { useEffect, useState } from "react";
import dataJson from "../../json/data.json";
import AboutUs from "../../components/AboutUs/AboutUs";

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(dataJson["3"]);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <AboutUs aboutData={data} />
    </>
  );
};

export default About;
