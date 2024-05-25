import React, { useEffect } from 'react'
import './AnnualReport.css';

// import Navbar from "../Navbar/navbar.js"

export default function AnnualReport() {

    useEffect(() => {

        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');

        const track = document.querySelector('.track');
        let cards = document.querySelectorAll('.card-container');
        let cardWidth = document.querySelector('.card-container').offsetWidth;

        let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

        window.addEventListener('resize', () => {
            cardWidth = document.querySelector('.card-container').offsetWidth;
            carouselWidth = document.querySelector('.carousel-container').offsetWidth;
        })

        let index = 0;

        next.addEventListener('click', () => {
            index++;
            prev.classList.add('show');
            track.style.transform = `translateX(-${index * cardWidth}px)`;

            if ((cards.length * cardWidth - ((index + 1) * cardWidth)) < carouselWidth) {
                next.classList.add('hide');
            }
        })

        prev.addEventListener('click', () => {
            index--;
            next.classList.remove('hide');
            if (index === 0) {
                prev.classList.remove('show');
            }
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        })
    }, []);

    return (
        <div className='container'>
            <p class="heading">Annual Reports</p>
            <div class="reports">
                <div className='curr-year'>
                    <div class="Report-box">
                        <a href="https://drive.google.com/file/d/1kAgogATQnVMk3ikKk5sFv3QoAVrTZ-vW/view?usp=sharing" target="_blank">
                            <img src="./images/annualreport/annlrp2021.jpg" alt="annual report 20-21" /></a>
                    </div>
                </div>
                <div class="prev-year">
                    <div class="carousel-container">
                        <div class="carousel-inner">
                            <div class="track">
                                <div class="card-container">
                                    <div class="card">
                                        <div className="img">
                                            <a href="https://drive.google.com/file/d/1b9w3FArFXU7Jj4sLXbRKhiCy7sEb2xTA/view?usp=sharing" target="_blank">
                                                <img src="./images/annualreport/annlrp2020.jpg" alt="annual report 19-20" style={{ width: '100%', borderRadius: '10px' }} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-container">
                                    <div class="card">
                                        <div className="img">
                                            <a href="https://drive.google.com/file/d/1kAgogATQnVMk3ikKk5sFv3QoAVrTZ-vW/view?usp=sharing" target="_blank">
                                                <img src="./images/annualreport/annlrp2021.jpg" alt="annual report 20-21" style={{ width: '100%', borderRadius: '10px' }} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-container">
                                    <div class="card">
                                        <div className="img">
                                            <a href="https://drive.google.com/file/d/1b9w3FArFXU7Jj4sLXbRKhiCy7sEb2xTA/view?usp=sharing" target="_blank">
                                                <img src="./images/annualreport/annlrp2020.jpg" alt="annual report 19-20" style={{ width: '100%', borderRadius: '10px' }} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-container">
                                    <div class="card">
                                        <div className="img">
                                            <a href="https://drive.google.com/file/d/1kAgogATQnVMk3ikKk5sFv3QoAVrTZ-vW/view?usp=sharing" target="_blank">
                                                <img src="./images/annualreport/annlrp2021.jpg" alt="annual report 20-21" style={{ width: '100%', borderRadius: '10px' }} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-container">
                                    <div class="card">
                                        <div className="img">
                                            <a href="https://drive.google.com/file/d/1b9w3FArFXU7Jj4sLXbRKhiCy7sEb2xTA/view?usp=sharing" target="_blank">
                                                <img src="./images/annualreport/annlrp2020.jpg" alt="annual report 19-20" style={{ width: '100%', borderRadius: '10px' }} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-nav">
                            <button class="prev hide">
                                <i class="fa fa-chevron-left"></i>
                            </button>
                            <button class="next">
                                <i class="fa fa-chevron-right"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}