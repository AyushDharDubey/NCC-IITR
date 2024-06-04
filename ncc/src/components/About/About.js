<<<<<<< HEAD
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

];

const years = [
  "2022-2023",
  "2021-2022",
  "2020-2021",
  "2019-2020",
]

const yearTm = [
  {
    id: 10, //
    department: '2022-2023',
    name: 'RISHABH KOSTA',
    title: 'Joint Secretary',
    image: 'member1.jpg',
    email: 'r_kosta@me.iitr.ac.in',
    phone: '',
  },
  {
    id:1,
    year: '2022-2023',
    name:'CHAYAN AILAWALIA',
    title: 'Joint Secretary, Editorial',
  },
  {
    id:2,
    year: '2022-2023',
    name:'RAHUL GOYAL',
    title: 'Joint Secretary, Web-D',
  },
  {
    id:3,
    year: '2022-2023',
    name:'SUHALI KONDAPALLI',
    title: ' Joint Secretary, Training & Sports',
  },
  {
    id:4,
    year: '2022-2023',
    name:'SHRIKANT',
    title: 'Joint Secretary, Events',
  },

  {
    id:0,
    year: '2021-2022',
    name:'ABHISHEK KUMAR JHA',
    title: '',
  },
  {
    id:0,
    year: '2021-2022',
    name:'VARUN MISHRA',
    title: ' Joint Secretary, Editorial',
  },
  {
    id:0,
    year: '2021-2022',
    name:'ANUJ KUMAR',
    title: 'Joint Secretary, Web-D',
  },
  {
    id:0,
    year: '2021-2022',
    name:'RAJKUMAR KHICHAR',
    title: 'Joint Secretary, Training & Sports',
  },
  {
    id:0,
    year: '2021-2022',
    name:'PRATHAMESH BHAKTAN',
    title: 'Joint Secretary, Administration',
  },
  {
    id:0,
    year: '2021-2022',
    name:'ANSHIKA BANG',
    title: 'Joint Secretary, Events',
  },

  {
    id:0,
    year: '2020-2021',
    name:'DEEPAK YADAV',
    title: 'General Secretary',
  },
  {
    id:0,
    year: '2020-2021',
    name:'SDL MALAVIKA',
    title: 'Joint Secretary, Administration',
  },
  {
    id:0,
    year: '2020-2021',
    name:'NITESH KUMAR',
    title: 'Joint Secretary, Training & Sports',
  },
  {
    id:0,
    year: '2020-2021',
    name:'GEDILA SARITA',
    title: 'Joint Secretary, Events',
  },
  {
    id:0,
    year: '2019-2020',
    name:'LAVKUSH VERMA',
    title: 'General Secretary',
  },
  {
    id:0,
    year: '2019-2020',
    name:'SHIVANI SNIGDHA',
    title: 'Joint Secretary, Administration',
  },
  {
    id:0,
    year: '2019-2020',
    name:'DEEPAK GURJAR',
    title: ' Joint Secretary, Training & Sports',
  },
]
const AboutUs = () => {
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
        <span className='mttspan'>
          <h1 className='mttheading'>MEET THE TEAM</h1>
        </span>
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
              className={`department-members ${activeTab === member ? 'active' : ''
                }`}
            >
              {activeTab === member && renderMemberCards(memberData.filter((m) => m.department === activeTab))}
            </div>
          ))}
        </div>
      </div>

      {/* Past Members begins */}

      <div className='meettheteam'>
        <span className='mttspan'>
          <h1 className='mttheading'>MEET THE TEAM</h1>
        </span>
        <ul className="departments">
          {years.map((member1) => (
            <li
              key={member1}
              className={activeTab2 === member1 ? 'active' : ''}
              onClick={() => handleTabClick2(member1)}
            >
              {member1}
            </li>
          ))}
        </ul>
        <div className="content-area">
          {years.map((member1) => (
            <div
              key={member1}
              className={`department-members ${activeTab2 === member1 ? 'active' : ''
                }`}
            >
              {activeTab2 === member1 && renderMemberCards(yearTm.filter((m) => m.year === activeTab2))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
=======
import React from 'react';
import './About.css';



const About = () => {
  return (
    <>


     {/* ----- Officers Section ---- */}
    
     <div className="container cadets mt-5">
      <div className="section-heading text-center d-flex align-items-center justify-content-around py-3">
        <div className="line"></div>
        <p className="heading">OFFICERS</p>
        <div className="line"></div>
      </div>
      {/* 1st Row */}
      <div className="row row1">
        <div className="col d-flex flex-column align-items-center justify-content-center mb-4">
          <div>
            <img src="./images/newcoimg.jpg" alt="Col Anoop Vyas" className="rounded" />
          </div>
          <div className="mt-1 ncc-white ncc-bg-cadet rounded p-2 text-center">
            <div className="fw-bold">Col Anoop Vyas</div>
            <div className="ncc-div-fs">Commanding Officer, 3 UK CTR NCC</div>
          </div>
        </div>
        <div className="col d-flex flex-column align-items-center justify-content-center mb-4">
          <div>
            <img src="./images/Admin.jpg" alt="Col AK Nautiyal" className="rounded" />
          </div>
          <div className="mt-1 ncc-white ncc-bg-cadet rounded p-2 text-center">
            <div className="fw-bold">Col AK Nautiyal</div>
            <div className="ncc-div-fs">Administrative Officer, 3 UK CTR NCC</div>
          </div>
        </div>
      </div>
      {/* 2nd Row */}
      <div className="row row2">
        <div className="col d-flex flex-column align-items-center justify-content-center mb-4">
          <div>
            <img src="./images/dn.jpg" alt="Dr Diptimayee Nayak" className="rounded" />
          </div>
          <div className="mt-1 ncc-white ncc-bg-cadet rounded p-2 text-center">
            <div className="fw-bold">Dr Diptimayee Nayak</div>
            <div className="ncc-div-fs">Faculty Advisor, NCC IIT Roorkee</div>
            <div className="ncc-div-fs">
              <a className="ncc-white text-decoration-none" href="mailto:dipti.nayak@hs.iitr.ac.in">
                <i className="fas fa-envelope"></i> dipti.nayak@hs.iitr.ac.in
              </a>
            </div>
          </div>
        </div>
        <div className="col d-flex flex-column align-items-center justify-content-center mb-4">
          <div>
            <img src="./images/mb.jpg" alt="Lt (Dr) Mukesh Bhardwaj" className="rounded" />
          </div>
          <div className="mt-1 ncc-white ncc-bg-cadet rounded p-2 text-center">
            <div className="fw-bold">Lt (Dr) Mukesh Bhardwaj</div>
            <div className="ncc-div-fs">Associate NCC Officer</div>
            <div className="ncc-div-fs">
              <a href="mailto:mukesh.bhardwaj@mt.iitr.ac.in" className="ncc-white text-decoration-none">
                <i className="fas fa-envelope"></i> mukesh.bhardwaj@mt.iitr.ac.in
              </a>
            </div>
          </div>
        </div>
        <div className="col d-flex flex-column align-items-center justify-content-center mb-4">
          <div>
            <img src="./images/is.jpg" alt="Lt (Dr) Inderdeep Singh" className="rounded" />
          </div>
          <div className="mt-1 ncc-white ncc-bg-cadet rounded p-2 text-center">
            <div className="fw-bold">Lt (Dr) Inderdeep Singh</div>
            <div className="ncc-div-fs">Associate NCC Officer</div>
            <div className="ncc-div-fs">
              <a href="mailto:inderdeep.singh@me.iitr.ac.in" className="ncc-white text-decoration-none">
                <i className="fas fa-envelope"></i> inderdeep.singh@me.iitr.ac.in
              </a>
            </div>
            <div className="ncc-div-fs">
              <i className="fas fa-phone-alt"></i> 91-1332-285614
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;

>>>>>>> 0c77b4491be4c86e7f8ebff92dc00e4620a441d4
