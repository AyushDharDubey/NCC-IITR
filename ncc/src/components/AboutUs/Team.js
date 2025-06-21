import React, { useState } from 'react';

const Team = () => {
  const [activeTab, setActiveTab] = useState('ADMINISTRATION');
  const [activeTabPastTeam, setActiveTabPastTeam] = useState("2023-2024");
  const teamData = {
    ADMINISTRATION: [
      {
        name: 'AMAN KUMAR',
        designation: 'General Secretary',
        email: 'aman_k1@ece.iitr.ac.in',
        phone: '+91-7464887593',
      },
      {
        name: 'ARYAN MISHRA',
        designation: 'Deputy General Secretary',
        email: 'aryan_m1@ece.iitr.ac.in',
        phone: '+91-7673063605',
      },
      {
        name: 'KANWAR ANMOL SINGH',
        designation: 'Deputy General Secretary (Unit)',
        email: 'kanwar_as@hs.iitr.ac.in',
        phone: '+91-7347346875',
      },
    ],
    OPERATIONS: [
      {
        name: 'ANKIT LAL',
        designation: 'Joint Secretary',
        email: 'ankit_l@ce.iitr.ac.in',
        phone: '+91-9958718768',
      },
      {
        name: 'ATHARV NANDKUMAR',
        designation: 'Joint Secretary',
        email: 'atharva_ns@ece.iitr.ac.in',
        phone: '+91-8010345453',
      },
      {
        name: 'KAJAL KATARIA',
        designation: 'Joint Secretary',
        email: 'kajal_k@ce.iitr.ac.in',
        phone: '+91-8477876989',
      },
    ],
    EVENTS: [
      {
        name: 'HANSHIKA SONI',
        designation: 'Joint Secretary',
        email: 'hansika_s@ce.iitr.ac.in',
        phone: '+91-8209472897',
      },
      {
        name: 'PRATIK',
        designation: 'Joint Secretary',
        email: 'pratik@hs.iitr.ac.in',
        phone: '+91-8856009384',
      },
      {
        name: 'TAPISH VIKRAM',
        designation: 'Joint Secretary',
        email: 'tapish_v@me.iitr.ac.in',
        phone: '+91-8979753464',
      },
    ],
    UNIT: [
      {
        name: 'ISHA',
        designation: 'Joint Secretary',
        email: 'isha@me.iitr.ac.in',
        phone: '+91-9958312529',
      },
      {
        name: 'NEETU',
        designation: 'Joint Secretary',
        email: 'neetu@cy.iitr.ac.in',
        phone: '+91-7986012845',
      },
      {
        name: 'PRATHAMVEER SINGH',
        designation: 'Joint Secretary',
        email: 'prathamveer_s@me.iitr.ac.in',
        phone: '+91-8855900021',
      },
      {
        name: 'TADANGI DRAKSHAYANI',
        designation: 'Joint Secretary',
        email: 'tadangi_d@bt.iitr.ac.in',
        phone: '+91-9390789510',
      },
    ],
    DESIGN: [
      {
        name: 'ABHIUDIT SHARMA',
        designation: 'Joint Secretary',
        email: 'abhiudit_s@ar.iitr.ac.in',
        phone: '+91-9205152911',
      },
      {
        name: 'MANISH RANJAN',
        designation: 'Joint Secretary',
        email: 'manish_r@ce.iitr.ac.in',
        phone: '+91-6205255659',
      },
    ],
    'WEB-D': [
      {
        name: 'DEWANSH UPADHYAY',
        designation: 'Joint Secretary',
        email: 'dewansh_u@me.iitr.ac.in',
        phone: '+91-8604435220',
      },
      {
        name: 'DIVYA RAJ',
        designation: 'Joint Secretary',
        email: 'divya_r@me.iitr.ac.in',
        phone: '+91-6299425399',
      },
    ],
    MULTIMEDIA: [
      {
        name: 'DHEERAJ KUMAR MOURYA',
        designation: 'Joint Secretary',
        email: 'dheeraj_km@es.iitr.ac.in',
        phone: '+91-8707215896',
      },
      {
        name: 'YASH GEHLOT',
        designation: 'Joint Secretary',
        email: 'yash_g@ece.iitr.ac.in',
        phone: '+91-9461896459',
      },
    ],
    EDITORIAL: [
      {
        name: 'ARYAN RAJ',
        designation: 'Joint Secretary',
        email: 'aryan_r1@ece.iitr.ac.in',
        phone: '+91-8690930289',
      },
      {
        name: 'BHAVYA BHARGAV',
        designation: 'Joint Secretary',
        email: 'bhavya_b@ar.iitr.ac.in',
        phone: '+91-7973004260',
      },
    ],
  };

  const alumniData = [
    {
      year: "2024-2025",
      members: [
        { name: "AMAN KUMAR", designation: "General Secretary" },
        { name: "ARYAN MISHRA", designation: "Deputy General Secretary" },
        { name: "KANWAR ANMOL SINGH", designation: "Deputy General Secretary, Unit" },
        { name: "ANKIT LAL", designation: "Joint Secretary, Operations" },
        { name: "ATHARV NANDKUMAR", designation: "Joint Secretary, Operations" },
        { name: "KAJAL KATARIA", designation: "Joint Secretary, Operations" },
        { name: "HANSHIKA SONI", designation: "Joint Secretary, Events" },
        { name: "PRATIK", designation: "Joint Secretary, Events" },
        { name: "TAPISH VIKRAM", designation: "Joint Secretary, Events" },
        { name: "ISHA", designation: "Joint Secretary, Unit" },
        { name: "NEETU", designation: "Joint Secretary, Unit" },
        { name: "PRATHAMVEER SINGH", designation: "Joint Secretary, Unit" },
        { name: "TADANGI DRAKSHAYANI", designation: "Joint Secretary, Unit" },
        { name: "ABHIUDIT SHARMA", designation: "Joint Secretary, Design" },
        { name: "MANISH RANJAN", designation: "Joint Secretary, Design" },
        { name: "DEWANSH UPADHYAY", designation: "Joint Secretary, Web-D" },
        { name: "DIVYA RAJ", designation: "Joint Secretary, Web-D" },

        { name: "DHEERAJ KUMAR MOURYA", designation: "Joint Secretary, Multimedia"},
        { name: "YASH GEHLOT", designation: "Joint Secretary, Multimedia" },
        { name: "ARYAN RAJ", designation: "Joint Secretary, Editorial"},
        { name: "BHAVYA BHARGAV", designation: "Joint Secretary, Editorial" }
      ]
    },{
      year: "2023-2024",
      members: [
        { name: "HARDIK SAHNI", designation: "General Secretary" },
        { name: "HIMANSHU RANJAN", designation: "Deputy General Secretary" },
        { name: "ANSHU KHOKER", designation: "Joint Secretary, Operations" },
        { name: "RISHABH KOSTA", designation: "Joint Secretary, Operations" },
        { name: "AMAN SHRIVASTAVA", designation: "Joint Secretary, Web-D" },
        { name: "DHIRAJ KUMAR", designation: "Joint Secretary, Design" },
        { name: "GAURAV", designation: "Joint Secretary, Design" },
        { name: "HARSH KUMAR", designation: "Joint Secretary, Editorial" },
        { name: "KUSHAGRA PANJWANI", designation: "Joint Secretary, Events" },
        { name: "KUMKUM MEENA", designation: "Joint Secretary, Events" }
      ]
    },
    {
      year: "2022-2023",
      members: [
        { name: "PRATYAKSH CHAUHAN", designation: "General Secretary" },
        { name: "CHAYAN AILAWALIA", designation: "Joint Secretary, Editorial" },
        { name: "ROHIT KUMAR BAMNAWAT", designation: "Joint Secretary, Design" },
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
                    <div className="section-1 d-flex justify-content-evenly">
                      {team.members.slice(3, 6).map((member) => (
                        <div className="item" key={member.name}>
                          <p className="name"><b>{member.name}</b></p>
                          <span className="designation"><i className="fa fa-user-tie"></i> {member.designation}</span>
                        </div>
                      ))}
                    </div>
                    <div className="section-1 d-flex justify-content-evenly">
                      {team.members.slice(6, 9).map((member) => (
                        <div className="item" key={member.name}>
                          <p className="name"><b>{member.name}</b></p>
                          <span className="designation"><i className="fa fa-user-tie"></i> {member.designation}</span>
                        </div>
                      ))}
                    </div>
                    <div className="section-1 d-flex justify-content-evenly">
                      {team.members.slice(9,12).map((member) => (
                        <div className="item" key={member.name}>
                          <p className="name"><b>{member.name}</b></p>
                          <span className="designation"><i className="fa fa-user-tie"></i> {member.designation}</span>
                        </div>
                      ))}
                    </div>
                     <div className="section-1 d-flex justify-content-evenly">
                      {team.members.slice(12,15).map((member) => (
                        <div className="item" key={member.name}>
                          <p className="name"><b>{member.name}</b></p>
                          <span className="designation"><i className="fa fa-user-tie"></i> {member.designation}</span>
                        </div>
                      ))}
                    </div>
                     <div className="section-1 d-flex justify-content-evenly">
                      {team.members.slice(15,18).map((member) => (
                        <div className="item" key={member.name}>
                          <p className="name"><b>{member.name}</b></p>
                          <span className="designation"><i className="fa fa-user-tie"></i> {member.designation}</span>
                        </div>
                      ))}
                    </div>
                       <div className="section-1 d-flex justify-content-evenly">
                      {team.members.slice(18,21).map((member) => (
                        <div className="item" key={member.name}>
                          <p className="name"><b>{member.name}</b></p>
                          <span className="designation"><i className="fa fa-user-tie"></i> {member.designation}</span>
                        </div>
                      ))}
                    </div>
                     <div className="section-1 d-flex justify-content-evenly">
                      {team.members.slice(21).map((member) => (
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

