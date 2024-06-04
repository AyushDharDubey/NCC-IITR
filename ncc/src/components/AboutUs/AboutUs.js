import React, { useState } from 'react';
import "./AboutUs.css";
import Officers from './Officers.js';
import Und from './Und.js';
import ActivitySlideshow from './Activity.js';
import Mteam from './Mteam.js';
const AboutUs = () => {

  return (
    <div>
      <Und/>
      <ActivitySlideshow/>
      <Officers/>
      <Mteam />
    </div>
  );
};

export default AboutUs;