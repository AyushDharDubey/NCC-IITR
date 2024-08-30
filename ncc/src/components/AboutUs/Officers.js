import React from 'react';
function Officers() {
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
            <img src="./images/aboutus/newcoimg.jpg" alt="Col Anoop Vyas" className="rounded" />
          </div>
          <div className="mt-1 ncc-white ncc-bg-cadet rounded p-2 text-center">
            <div className="fw-bold">Col Anoop Vyas</div>
            <div className="ncc-div-fs">Commanding Officer, 3 UK CTR NCC</div>
          </div>
        </div>
        <div className="col d-flex flex-column align-items-center justify-content-center mb-4">
          <div>
            <img src="./images/aboutus/Admin.jpg" alt="Col AK Nautiyal" className="rounded" />
          </div>
          <div className="mt-1 ncc-white ncc-bg-cadet rounded p-2 text-center">
            <div className="fw-bold">Col AK Nautiyal</div>
            <div className="ncc-div-fs">Administrative Officer, 3 UK CTR NCC</div>
          </div>
        </div>
      </div>
      <p/>
      {/* 2nd Row */}
      <div className="container-fluid row2 row">
        <div className="col d-flex flex-column align-items-center justify-content-center mb-4">
          <div>
            <img src="./images/aboutus/dps.jpg" alt="Dr Dharmendra Pratap Singh " className="rounded" />
          </div>
          <div className="mt-1 ncc-white ncc-bg-cadet rounded p-2 text-center">
            <div className="fw-bold">Dr Dharmendra Pratap Singh</div>
            <div className="ncc-div-fs">Faculty Advisor, NCC IIT Roorkee</div>
            <div className="ncc-div-fs">
              <a className="ncc-white text-decoration-none" href="mailto:dharmendra.singh@es.iitr.ac.in">
                <i className="fas fa-envelope"></i> dharmendra.singh@es.iitr.ac.in
              </a>
            </div>
          </div>
        </div>
        <div className="col d-flex flex-column align-items-center justify-content-center mb-4">
          <div>
            <img src="./images/aboutus/mb.jpg" alt="Lt (Dr) Mukesh Bhardwaj" className="rounded" />
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
            <img src="./images/aboutus/is.jpg" alt="Lt (Dr) Inderdeep Singh" className="rounded" />
          </div>
          <div className="mt-1 ncc-white ncc-bg-cadet rounded p-2 text-center">
            <div className="fw-bold">Lt (Dr) Inderdeep Singh</div>
            <div className="ncc-div-fs">Associate NCC Officer</div>
            <div className="ncc-div-fs">
              <a href="mailto:inderdeep.singh@me.iitr.ac.in" className="ncc-white text-decoration-none">
                <i className="fas fa-envelope"></i> inderdeep.singh@me.iitr.ac.in
              </a>
            </div>
          </div>
        </div>
        <div className="col d-flex flex-column align-items-center justify-content-center mb-4">
          <div>
            <img src="./images/aboutus/a.jpg" alt="Dr Abhishek" className="rounded" />
          </div>
          <div className="mt-1 ncc-white ncc-bg-cadet rounded p-2 text-center">
            <div className="fw-bold">Dr Abhishek</div>
            <div className="ncc-div-fs">Care Taker Officer</div>
            <div className="ncc-div-fs">
              <a className="ncc-white text-decoration-none" href="mailto:abhishek@ce.iitr.ac.in">
                <i className="fas fa-envelope"></i> abhishek@ce.iitr.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Officers;