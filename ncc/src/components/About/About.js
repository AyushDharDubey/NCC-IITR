import React, { useState } from 'react';
import "./About.css";
import Officers from './Officers.js';
import Mteam from './Mteam.js';
const About = () => {

  return (
    <div>
      <Officers/>
      <Mteam />
    </div>
  );
};

export default About;