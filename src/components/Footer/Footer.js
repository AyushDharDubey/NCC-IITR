import React, { useRef, useState } from 'react';
import './Footer.css';


function Footer() {

  const [iconStates, setIconStates] = useState({
    contact_content: 'fa-plus',
    address_content: 'fa-plus',
    website_content: 'fa-plus',
  });

  const contactContentRef = useRef(null);
  const addressContentRef = useRef(null);
  const websiteContentRef = useRef(null);

  const handleClick = (id, ref) => {
    setIconStates((prevStates) => {
      const newState = prevStates[id] === 'fa-plus' ? 'fa-minus' : 'fa-plus';
      if (newState == 'fa-plus') {
        ref.current.classList.remove(`${id}_0`)
      }
      else {
        ref.current.classList.add(`${id}_0`);
      }
      return { ...prevStates, [id]: newState };
    });
  };


  return (<div>
    <div className="ncc-bg-blue ncc-white">
      <div className="row mx-0 ">

        {/* <!-- Normal Footer --> */}

        <div className="py-2 d-flex justify-content-between footerResponsive text-left">
          <div className="d-flex flex-column text-left  px-2 element px-lg-4">
            <span id="title_footer" class="pb-1">
              Contact Us:
            </span>
            <div className="d-flex align-items-center pt-2">
              <img src="./images/svgs/phoneIcon.svg" />
              <div className="px-2">
                <p id="content" className="m-0 pb-1">
                  +91 7464887593
                </p>
                <p id="content" className="pb-1 m-0">
                  +91 7673063605
                </p>
              </div>
            </div>
            <div class="d-flex align-items-center pt-2">
              <img src="./images/svgs/emailIcon.svg" />
              <div class="px-3">
                <p id="content" class="m-0 pb-1">
                  <a href="mailto:ncc@iitr.ac.in" class=" text-white text-decoration-none">ncc@iitr.ac.in</a>
                </p>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column text-left   px-2element  px-lg-4">
            <span id="title_footer" class="pb-1">
              Social Media:
            </span>
            <div class="d-flex align-items-center justify-content-between pt-4 social">
              <a target="_blank" id="logo1" href="https://www.facebook.com/ncc.iitr"><img src="./images/svgs/facebookIcon.svg" class="me-2" /></a>
              <a target="_blank" id="logo2" href="https://www.youtube.com/channel/UCrx5OBkbdv5dldJBDXFfJbA"><img src="./images/svgs/youtubeIcon.svg" class="me-2" /></a>
              <a target="_blank" id="logo3" href="https://www.instagram.com/ncc.iitr/"><img src="./images/svgs/instagram.png" class="me-2" width="44px" height="44px" /></a>
              <a target="_blank" id="logo4" href="https://goo.gl/maps/73UGFeqZSd5HjjZP9"><img src="./images/svgs/maps.png" class="me-2" width="44px" height="44px" /></a>
            </div>
          </div>
          <div class="d-flex flex-column text-left ele  px-2ment iit px-lg-4">
            <span id="title_footer" class="pb-1">
              Website:
            </span>
            <div class="d-flex align-items-center pt-2">
              <img src="./images/svgs/websiteIcon.svg" />
              <div>
                <a href="https://indiancc.nic.in/" target="_blank" id="content" class="text-decoration-none text-white">
                  NCC Official
                </a>
              </div>
            </div>
            <div class="d-flex align-items-center pt-2">
              <img src="./images/svgs/websiteIcon.svg" />
              <div>
                <a href="https://www.iitr.ac.in/" target="_blank" id="content" class="m-0 pb-1">
                  IIT Roorkee
                </a>
              </div>
            </div>

          </div>
          <div class="d-flex flex-column text-left element ">
            <span id="title_footer" class="pb-1">
              Address:
            </span>
            <div class="d-flex align-items-center pt-2">
              <p id="content" class="m-0 pb-1 address">
                3 UK CTR NCC, IIT Roorkee Roorkee, Haridwar Uttarakhand, 247667
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Mobile Footer --> */}

        <div class="py-2 d-flex flex-column footerResponsive1 text-left">
          <div id="footer_heading" class="d-flex flex-column text-left px-4 element">
            <h2>National Cadet Corps</h2>
            <h4>IIT Roorkee</h4>
          </div>
          <div class="d-flex flex-column text-left px-4 element">
            <div id="title_footer" class="d-flex justify-content-between align-items-center">
              <div class="pb-1">
                Contact Us:
              </div>
              <i
                className={`fa ${iconStates.contact_content}`}
                onClick={() => handleClick('contact_content', contactContentRef)}
              ></i>
            </div>
            <div id="contact_content" ref={contactContentRef} className="">
              <div class="d-flex align-items-center pt-3">
                <img src="./images/svgs/phoneIcon.svg" />
                <div class="px-2">
                  <p id="content" class="m-0 pb-1">
                    +91 7464887593
                  </p>
                  <p id="content" class="pb-1 m-0">
                    +91 7673063605
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center pt-2">
                <img src="./images/svgs/emailIcon.svg" />
                <div class="px-3">
                  <p id="content" class="m-0 pb-1">
                    <a href="mailto:ncc@iitr.ac.in" class="text-white text-decoration-none">ncc@iitr.ac.in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column text-left px-4 element">
            <div id="title_footer" class="d-flex justify-content-between align-items-center">
              <div class="pb-1">
                Address:
              </div>
              <i
                className={`fa ${iconStates.address_content}`}
                onClick={() => handleClick('address_content', addressContentRef)}
              ></i>
            </div>
            <div id="address_content" ref={addressContentRef} className="">
              <div class="d-flex align-items-center pt-3">
                <p id="content" class="m-0 pb-1 address">
                  3 UK CTR NCC, IIT Roorkee Roorkee, Haridwar Uttarakhand, 247667
                </p>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column text-left px-4 element">
            <div id="title_footer" class="d-flex justify-content-between align-items-center">
              <div class="pb-1">
                Website:
              </div>
              <i
                className={`fa ${iconStates.website_content}`}
                onClick={() => handleClick('website_content', websiteContentRef)}
              ></i>
            </div>
            <div id="website_content" ref={websiteContentRef} className="">
              <div class="d-flex align-items-center pt-3">
                <img src="./images/svgs/websiteIcon.svg" />
                <div class="px-3">
                  <a href="https://indiancc.nic.in/" target="_blank" id="content" class="text-decoration-none ncc-white">
                    NCC Official
                  </a>
                </div>
              </div>
              <div class="d-flex align-items-center pt-3">
                <img src="./images/svgs/websiteIcon.svg" />
                <div class="px-3">
                  <a href="https://www.iitr.ac.in/" target="_blank" id="content" class="m-0 pb-1">
                    IIT Roorkee
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center pt-1 pb-2">
            <a target="_blank" id="logo1" href="https://www.facebook.com/ncc.iitr"><img src="./images/svgs/facebookIcon.svg" class="mx-2"></img></a>
            <a target="_blank" id="logo2" href="https://www.youtube.com/channel/UCrx5OBkbdv5dldJBDXFfJbA"><img src="./images/svgs/youtubeIcon.svg" class="mx-2"></img></a>
            <a target="_blank" id="logo3" href="https://www.instagram.com/ncc.iitr/"><img src="./images/svgs/instagram.png" class="mx-2" width="44px" height="44px"></img></a>
            <a target="_blank" id="logo4" href="https://goo.gl/maps/73UGFeqZSd5HjjZP9"> < img src="./images/svgs/maps.png" class="mx-2" width="44px" height="44px"></img></a>
          </div>
        </div>
      </div>

    </div>
    <p class="d-flex align-items-center text-center justify-content-center ncc-bg-copyright footer-copyright ncc-16 ncc-white py-2" id="content">©
      Copyright 2024 - NCC IIT Roorkee | All Right Reserved
    </p>
  </div>);
};

export default Footer;
