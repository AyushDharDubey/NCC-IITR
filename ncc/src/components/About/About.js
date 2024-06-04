import React, { useState } from 'react';
import "./About.css";
import Mteam from './Mteam.js';
const About = () => {
  const [activeTab, setActiveTab] = useState('ADMINISTRATION');
  const [activeTab2, setActiveTab2] = useState('2022-2023');
  const handleTabClick = (department) => {
    setActiveTab(department);
  };

  const handleTabClick2 = (department1) => {
    setActiveTab2(department1);
  };


  const renderMemberCards = (members) => {
    return members.map((member) => (
      <div className="member-card" key={member.id || `${member.department}-${member.name}`}> {/* Use ID or combine department-name */}
  
        <h3>{member.name}</h3>
        <p>{member.title}</p>
        <p>{member.email}</p>
        <p>{member.phone}</p>
      </div>
    ));
  };

  return (
    <div>
      <Mteam />
    </div>
  );
};

export default About;