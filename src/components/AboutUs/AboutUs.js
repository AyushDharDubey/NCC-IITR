import React, { useEffect } from 'react';
import "./AboutUs.css";
import Officers from './Officers.js';
import UnD from './UnD.js';
import Team from './Team.js';
import Activity from './Activity.js';

const AboutUs = () => {

  useEffect(() => {
    document.title = 'About Us – NCC';
}, []);

  return (
    <>
      <UnD/>
      <Activity/>
      <Officers/>
      <Team />
    </>
  );
};

export default AboutUs;