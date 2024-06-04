import React from 'react';
import img1 from './aboutus1.jpg'
import img2 from './Aim.jpg'
import img3 from './aboutNCC.jpg'
import './Und.css'

function MyComponent() {

  return (
    <div style={{ padding: '16px' }}>
      <h2>UNITY AND DISCIPLINE | एकता और अनुशासन</h2>
      <div className='about3img' style={{ display: 'flex', gap: '16px', overflow: 'scroll', justifyItems: 'center' }}>
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />

      </div>
      <p>
      The National Cadet Corps (NCC) is a youth development movement. It has enormous potential for nation-building. NCC IIT Roorkee is one of the oldest NCC units in the country, providing opportunities to the youth for their overall development with a sense of Duty, Commitment, Dedication, Discipline so that they become able leaders and useful citizens. The National Cadet Corps, IIT Roorkee under the unit 3 UKComposite Technical Regiment National Cadet Corps is a student unit of the Indian Army which aims to develop a sense of discipline, rigour, and unity in the cadets. It provides a platform for the students to develop their personalities by engaging themselves in various events. The Guard of Honour, Indoor and outdoor sports events, firing practice, and Training camps aim to inculcate the values of teamwork and discipline in the cadets and exposure to life in the Army.At the same time, working for the society, the NCC conducts plantation and cleanliness drives, awareness campaigns, and activities for social causes to instill the spirit of service in the young cadets. Currently, the NCC has 420 active members who are continuously guided by the Unit's Commanding Officer and are working towards self-development and nation-building. 'UNITY AND DISCIPLINE,' the motto of the NCC, precisely highlights the aim and culture of the unit.
      </p>
    </div>
  );
}

export default MyComponent;
