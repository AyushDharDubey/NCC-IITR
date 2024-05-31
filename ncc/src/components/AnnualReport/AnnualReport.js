import React, { useEffect } from 'react'
import './AnnualReport.css';

export default function AnnualReport() {

    useEffect(() => {
        document.title = 'Annual Report – NCC';

        if (reports.length>4){
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
        }
    }, []);

    const reports = [
        { link: "https://drive.google.com/file/d/1kAgogATQnVMk3ikKk5sFv3QoAVrTZ-vW/view?usp=sharing", imgSrc: "./images/annualreport/annlrp2021.jpg", altText: "annual report 20-21" },
        { link: "https://drive.google.com/file/d/1b9w3FArFXU7Jj4sLXbRKhiCy7sEb2xTA/view?usp=sharing", imgSrc: "./images/annualreport/annlrp2020.jpg", altText: "annual report 19-20" },
        { link: "https://drive.google.com/file/d/1kAgogATQnVMk3ikKk5sFv3QoAVrTZ-vW/view?usp=sharing", imgSrc: "./images/annualreport/annlrp2021.jpg", altText: "annual report 20-21" },
        // { link: "https://drive.google.com/file/d/1b9w3FArFXU7Jj4sLXbRKhiCy7sEb2xTA/view?usp=sharing", imgSrc: "./images/annualreport/annlrp2020.jpg", altText: "annual report 19-20" },
        // { link: "https://drive.google.com/file/d/1kAgogATQnVMk3ikKk5sFv3QoAVrTZ-vW/view?usp=sharing", imgSrc: "./images/annualreport/annlrp2021.jpg", altText: "annual report 20-21" },
    ];

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
                    {reports.length < 5 ?
                        <div className={`d-flex ${window.innerWidth<750 ? 'flex-column' : ''} justify-content-evenly`}>
                            {reports.map((report) => (
                                <div className="card-container">
                                    <div className="card">
                                        <div className="img">
                                            <a href={report.link} target="_blank" rel="noopener noreferrer">
                                                <img src={report.imgSrc} alt={report.altText} style={{ width: '100%', borderRadius: '10px' }} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> :
                        <div class="carousel-container">
                            <div class="carousel-inner">
                                <div class="track">
                                    {reports.map((report) => (
                                        <div className="card-container">
                                            <div className="card">
                                                <div className="img">
                                                    <a href={report.link} target="_blank" rel="noopener noreferrer">
                                                        <img src={report.imgSrc} alt={report.altText} style={{ width: '100%', borderRadius: '10px' }} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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
                    }
                </div>
            </div>
        </div>
    )
}