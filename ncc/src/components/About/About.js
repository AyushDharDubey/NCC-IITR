import React, { useState } from 'react';
import "./About.css";

const departments = [
  "ADMINISTRATION",
  "DESIGN",
  "WEB-D",
  "EDITORIAL",
  "EVENTS",
  "OPERATIONS",
];

const memberData = [
  {
    id: 1, //
    department: 'ADMINISTRATION',
    name: 'Hardik Sahni',
    title: 'General Secretary',
    image: 'member1.jpg',
    email: 'h_sahni@ee.iitr.ac.in',
    phone: '91-9302286449',
  },
  {
    id: 2, //
    department: 'ADMINISTRATION',
    name: 'Himanshu Ranjan',
    title: 'Deputy General Secretary',
    image: 'member1.jpg',
    email: '',
    phone: '',
  },
  {
    id: 3, //
    department: 'DESIGN',
    name: 'GAURAV',
    title: 'Joint Secretary',
    image: 'member1.jpg',
    email: 'd_kumar1@ph.iitr.ac.in',
    phone: '',
  },
  {
    id: 4, //
    department: 'DESIGN',
    name: 'DHIRAJ KUMAR',
    title: 'Joint Secretary',
    image: 'member1.jpg',
    email: 'g_byadwal@ar.iitr.ac.in',
    phone: '',
  },
  {
    id: 5, //
    department: 'WEB-D',
    name: 'AMAN SHRIVASTAVA',
    title: 'Joint Secretary',
    image: 'member1.jpg',
    email: 'a_shrivastava1@me.iitr.ac.in',
    phone: '',
  },
  {
    id: 6, //
    department: 'EDITORIAL',
    name: 'HARSH KUMAR',
    title: 'Joint Secretary',
    image: 'member1.jpg',
    email: 'h_kumar1@ce.iitr.ac.in',
    phone: '',
  },
  {
    id: 7, //
    department: 'EVENTS',
    name: 'KUSHAGRA PANJWANI',
    title: 'Joint Secretary',
    image: 'member1.jpg',
    email: 'k_panjwani@me.iitr.ac.in',
    phone: '',
  },
  {
    id: 8, //
    department: 'EVENTS',
    name: 'KUMKUM MEENA',
    title: 'Joint Secretary',
    image: 'member1.jpg',
    email: 'k_meena@ce.iitr.ac.in',
    phone: '',
  },
  {
    id: 9, //
    department: 'OPERATIONS',
    name: 'ANSHU KHOKER',
    title: 'Joint Secretary',
    image: 'member1.jpg',
    email: 'm_khoker@ce.iitr.ac.in',
    phone: '',
  },
  {
    id: 10, //
    department: 'OPERATIONS',
    name: 'RISHABH KOSTA',
    title: 'Joint Secretary',
    image: 'member1.jpg',
    email: 'r_kosta@me.iitr.ac.in',
    phone: '',
  },

  // Add more member objects for other departments
];

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('Marketing');

  const handleTabClick = (department) => {
    setActiveTab(department);
  };

  const renderMemberCards = (members) => {
    return members.map((member) => (
      <div className="member-card" key={member.id || `${member.department}-${member.name}`}> {/* Use ID or combine department-name */}
        <img src={member.image} />
        <h3>{member.name}</h3>
        <p>{member.title}</p>
      </div>
    ));
  };

  return (
    <div className="about-us">
        <div className='presection'>
            <p>presection</p>
        </div>
        <div className='activities'>
        <p>activities</p>
        </div>
        <div className='officers'>
            <p>officers</p>
        </div>
        <div className='meettheteam'>
            <h1 className='mttheading'>MEET THE TEAM</h1>
      <ul className="departments">
        {departments.map((member) => (
          <li
            key={member}
            className={activeTab === member ? 'active' : ''}
            onClick={() => handleTabClick(member)}
          >
            {member}
          </li>
        ))}
      </ul>
      <div className="content-area">
        {departments.map((member) => (
          <div
            key={member}
            className={`department-members ${
              activeTab === member ? 'active' : ''
            }`}
          >
            {activeTab === member && renderMemberCards(memberData.filter((m) => m.department === activeTab))}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
