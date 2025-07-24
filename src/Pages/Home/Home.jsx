

import React, { useEffect, useState } from "react";
import HeroSection from "../../components/Herosection/HeroSection";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import CompanyHighlights from "../../components/CompanyHighlights/CompanyHighlights";
import heroData from "../../json/data.json";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import JoinOurTeam from "../../components/JoinOurTeam/JoinOurTeam";
import OurExpertise from "../../components/OurExpertise/OurExpertise";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(heroData["1"]);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <HeroSection herosectionData={data.Herosection} />
      <AboutCompany aboutCompanyData={data.AboutCompany} />
      <CompanyHighlights highlightData={data.CompanyHighlights} />
      <UpcomingEvents events={data.UpcomingEvents} /> 
      <JoinOurTeam data={data.JoinOurTeam} />
      <OurExpertise expertiseData={data.OurExpertise} />

     
    </>
  );
};

export default Home;


