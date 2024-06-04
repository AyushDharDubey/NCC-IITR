import React, { useState } from 'react';

const Team = () => {
  const [activeTab, setActiveTab] = useState('ADMINISTRATION');
  const [activeTabPastTeam, setActiveTabPastTeam] = useState("2022-2023");
  const teamData = {
    ADMINISTRATION: [
      {
        name: 'HARDIK SAHNI',
        designation: 'General Secretary',
        email: 'h_sahni@ee.iitr.ac.in',
        phone: '91-9302286449',
      },
      {
        name: 'HIMANSHU RANJAN',
        designation: 'Deputy General Secretary',
        email: 'h_ranjan@ece.iitr.ac.in',
        phone: '91-8178818593',
      },
    ],
    DESIGN: [
      {
        name: 'DHIRAJ KUMAR',
        designation: 'Joint Secretary',
        email: 'd_kumar1@ph.iitr.ac.in',
      },
      {
        name: 'GAURAV',
        designation: 'Joint Secretary',
        email: 'g_byadwal@ar.iitr.ac.in',
      },
    ],
    'WEB-D': [
      {
        name: 'AMAN SHRIVASTAVA',
        designation: 'Joint Secretary',
        email: 'a_shrivastava1@me.iitr.ac.in',
      },
    ],
    EDITORIAL: [
      {
        name: 'HARSH KUMAR',
        designation: 'Joint Secretary',
        email: 'h_kumar1@ce.iitr.ac.in',
      },
    ],
    EVENTS: [
      {
        name: 'KUSHAGRA PANJWANI',
        designation: 'Joint Secretary',
        email: 'k_panjwani@me.iitr.ac.in',
      },
      {
        name: 'KUMKUM MEENA',
        designation: 'Joint Secretary',
        email: 'k_meena@ce.iitr.ac.in',
      },
    ],
    OPERATIONS: [
      {
        name: 'ANSHU KHOKER',
        designation: 'Joint Secretary',
        email: 'm_khoker@ce.iitr.ac.in',
      },
      {
        name: 'RISHABH KOSTA',
        designation: 'Joint Secretary',
        email: 'r_kosta@me.iitr.ac.in',
        phone: '91-9026693996',
      },
    ],
  };

  const alumniData = [
    {
      year: "2022-2023",
      members: [
        { name: "PRATYAKSH CHAUHAN", designation: "General Secretary" },
        { name: "CHAYAN AILAWALIA", designation: "Joint Secretary, Editorial" },
        { name: "RAHUL GOYAL", designation: "Joint Secretary, Web-D" },
        { name: "SUHALI KONDAPALLI", designation: "Joint Secretary, Training & Sports" },
        { name: "SHRIKANT", designation: "Joint Secretary, Events" }
      ]
    },
    {
      year: "2021-2022",
      members: [
        { name: "ABHISHEK KUMAR JHA", designation: "General Secretary" },
        { name: "VARUN MISHRA", designation: "Joint Secretary, Editorial" },
        { name: "ANUJ KUMAR", designation: "Joint Secretary, Web-D" },
        { name: "RAJKUMAR KHICHAR", designation: "Joint Secretary, Training & Sports" },
        { name: "PRATHAMESH BHAKTAN", designation: "Joint Secretary, Administration" },
        { name: "ANSHIKA BANG", designation: "Joint Secretary, Events" }
      ]
    },
    {
      year: "2020-2021",
      members: [
        { name: "DEEPAK YADAV", designation: "General Secretary" },
        { name: "SDL MALAVIKA", designation: "Joint Secretary, Administration" },
        { name: "NITESH KUMAR", designation: "Joint Secretary, Training & Sports" },
        { name: "GEDILA SARITA", designation: "Joint Secretary, Events" }
      ]
    },
    {
      year: "2019-2020",
      members: [
        { name: "LAVKUSH VERMA", designation: "General Secretary" },
        { name: "SHIVANI SNIGDHA", designation: "Joint Secretary, Administration" },
        { name: "DEEPAK GURJAR", designation: "Joint Secretary, Training & Sports" }
      ]
    }
  ];



  return (
    <><div className="container-fluid">
      <div className="section-heading text-center d-flex align-items-center justify-content-around py-3">
        <div className="line"></div>
        <p className="heading">MEET THE TEAM</p>
        <div className="line"></div>
      </div>
      <div className="container-fluid">
        <ul className="nav nav-tabs mb-3 justify-content-evenly" id="pills-tab-1" role="tablist">
          {Object.keys(teamData).map((key) => (
            <li className="nav-item" role="presentation" key={key}>
              <button
                className={`nav-link ${activeTab === key ? 'active' : ''}`}
                id={`pills-${key}-tab`}
                onClick={() => setActiveTab(key)}
                data-bs-toggle="pill"
                data-bs-target={`#pills-${key}`}
                type="button"
                role="tab"
                aria-controls={`pills-${key}`}
                aria-selected={activeTab === key}
              >
                {key}
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content" id="pills-tabContent">
          {Object.keys(teamData).map((key) => (
            <div
              key={key}
              className={`tab-pane fade ${activeTab === key ? 'active show' : ''}`}
              id={`pills-${key}`}
              role="tabpanel"
              aria-labelledby={`pills-${key}-tab`}
            >
              <div className="container">
                <div className="section-1 d-flex flex-wrap justify-content-evenly">
                  {teamData[key].map((member, index) => (
                    <div className="item" key={index}>
                      <p className="name"><b>{member.name}</b></p>
                      
                      <p className="designation"><i className="fa fa-user-tie"></i> {member.designation}</p>
                      <p className="contact">
                        <a href={`mailto:${member.email}`}>
                          <i className="fa fa-envelope me-1"></i>{member.email}
                        </a>
                      </p>
                      {member.phone && (
                        <p className="phone">
                          <i className="fa fa-phone me-1"></i>{member.phone}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div><div className="alumni">
        <div className="container-fluid" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="section-heading text-center d-flex align-items-center justify-content-around py-3">
            <div className="line"></div>
            <p className="heading">PAST TEAMS</p>
            <div className="line"></div>
          </div>
          <div className="container-fluid">
            <ul className="nav nav-tabs mb-3 justify-content-evenly" id="pills-tab-2" role="tablist">
              {alumniData.map((team) => (
                <li className="nav-item" role="presentation" key={team.year}>
                  <button
                    className={`nav-link ${activeTabPastTeam === team.year ? "active" : ""}`}
                    id={`pills-${team.year}-tab`}
                    onClick={() => setActiveTabPastTeam(team.year)}
                    data-bs-toggle="pill"
                    data-bs-target={`#pills-${team.year}`}
                    type="button"
                    role="tab"
                    aria-controls={`pills-${team.year}`}
                    aria-selected={activeTabPastTeam === team.year}
                  >
                    {team.year}
                  </button>
                </li>
              ))}
            </ul>
            <div className="tab-content tab-content-alum" id="pills-tabContent">
              {alumniData.map((team) => (
                <div
                  className={`tab-pane fade ${activeTabPastTeam === team.year ? "show active" : ""}`}
                  id={`pills-${team.year}`}
                  role="tabpanel"
                  aria-labelledby={`pills-${team.year}-tab`}
                  key={team.year}
                >
                  <div className="container">
                    <div className="section-1 d-flex justify-content-evenly">
                      {team.members.slice(0, 3).map((member) => (
                        <div className="item" key={member.name}>
                          <p className="name"><b>{member.name}</b></p>
                          <span className="designation"><i class='fa fa-user-tie'></i> {member.designation}</span>
                        </div>
                      ))}
                    </div>
                    <div className="section-2 d-flex justify-content-evenly">
                      {team.members.slice(3).map((member) => (
                        <div className="item" key={member.name}>
                          <p className="name"><b>{member.name}</b></p>
                          <span className="designation"><i className="fa fa-user-tie"></i> {member.designation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div></>

  );
};

export default Team;

