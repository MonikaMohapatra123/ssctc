import React, { useEffect, useState } from 'react';
import AboutUs from '../../components/AboutUs/AboutUs';
import dataJson from '../../json/data.json';
import ContactUs from '../../components/ContactUs/ContactUs';

const Contact = () => {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    setContactData(dataJson["6"]);
  }, []);

  if (!contactData) return <p>Loading...</p>;

  return (
    <>
      <AboutUs aboutData={contactData} />
      <ContactUs />
    </>
  );
};

export default Contact;
