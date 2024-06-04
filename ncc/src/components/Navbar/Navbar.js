import "./Navbar.css"
import { Link, useLocation } from 'react-router-dom';
import React, {useState,useEffect} from 'react'

 function Navbar() {
    const location = useLocation();
    const [isShrunk, setIsShrunk] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (location.pathname === '/') {
            handleScroll();
            window.addEventListener('scroll', handleScroll);
        } else {
            setIsShrunk(true); 
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);


    const handleScroll = () => {
        if (location.pathname === '/') {
            if (window.scrollY > 140) {
                setIsShrunk(true);
            } else {
                setIsShrunk(false);
            }
        }
    };

    // Event handler to toggle class
    const handleClick = () => {
        setIsActive(!isActive);   // This will toggle the class on click
    };

    return (
        <><div>
            <div class="container-fluid navBar">
                <div class="row ncc-navBar">
                    <div class="NCC-Logo">
                        <Link href="/">
                            <img src="./images/NCC Logo.png" alt="NCC Logo" id="NCC-Logo" className={isShrunk ? 'ncc_shrink' : ''}></img>
                        </Link>
                    </div>
                    <div class="col-10" id="navbar_NavLinks" className={` col-10 ${isShrunk ? 'navbar_shrink' : ''}`}>
                        <div class="pt-3 navItem" id="ncc-heading">
                            <p class="heading-ncc-hn">नेशनल कैडेट कोर</p>
                            <p class="heading-ncc-en">National Cadet Corps, IIT Roorkee</p>
                        </div>
                        <nav class="navbar navbar-expand-lg navbar-dark navLinks py-0 box">
                            <div class="container p-0 m-0">
                                <div class="navbar-collapse">
                                    <ul class="navbar-nav d-flex justify-content-between w-100 me-auto mb-lg-0">
                                        <li class="nav-item">
                                            <Link class={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`} to="/about-us">About</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class={`nav-link ${location.pathname === '/events' ? 'active' : ''}`} to="/events">Events</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class={`nav-link ${location.pathname === '/blogs' ? 'active' : ''}`} to="/blogs">Blogs</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class={`nav-link ${location.pathname === '/faqs' ? 'active' : ''}`} to="/faqs">FAQs</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class={`nav-link ${location.pathname === '/annual-report' ? 'active' : ''}`} to="/annual-report">Annual Reports</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="IITR-Logo">
                        <a href="https://iitr.ac.in/"><img src="./images/IITR Logo.png" alt="IITR logo" id="IITR-Logo" className={isShrunk ? 'iitr_shrink' : ''}></img></a>
                    </div>
                </div>
            </div>
        </div>
            {/* Mobile Navbar */}
            <div id="navbar1">
                <div id="images" className="d-flex flex-row">
                    <Link href="/">
                        <img src="./images/NCC Logo.png" alt="NCC Logo" id="NCC-Logo1"></img>
                    </Link>
                    <a href="https://iitr.ac.in/"><img src="./images/IITR Logo.png" alt="IITR logo" id="IITR-Logo1"></img></a>
                </div>
                <div id="hamburger">
                    <img id='ham-icon' src="./images/navbar/bars.svg" onClick={handleClick}></img>
                </div>
            </div>
            {/* Hamburger Menu bar*/}
            <div id="Menu" className={isActive ? '' : 'd-none'}>
                <div><img src='./images/close.png' onClick={handleClick}></img></div>
                <ul>
                    <li>
                        <Link aria-current="page" to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/faqs">FAQs</Link>
                    </li>
                    <li>
                        <Link to="/annual-report">Annual Reports</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default Navbar