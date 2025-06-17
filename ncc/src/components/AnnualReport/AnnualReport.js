import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './AnnualReport.css';

function AnnualReport() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const trackRef = useRef(null);
    const cardContainerRef = useRef(null);
    const carouselContainerRef = useRef(null);

    const reports = [
        { link: "./files/Annual report NCC 2023-24.pdf", imgSrc: "./images/annualreport/annlrp2024.png", altText: "annual report 23-24" },
        { link: "./files/Annual report NCC 2022-23.pdf", imgSrc: "./images/annualreport/annlrp2023.png", altText: "annual report 22-23" },
        { link: "./files/Annual Report 2021-22.pdf", imgSrc: "./images/annualreport/annlrp2022.png", altText: "annual report 21-22" },
        { link: "./files/2020-21.pdf", imgSrc: "./images/annualreport/annlrp2021.jpg", altText: "annual report 20-21" },
        { link: "./files/2019-20.pdf", imgSrc: "./images/annualreport/annlrp2020.jpg", altText: "annual report 19-20" },
    ];

    useEffect(() => {
        document.title = 'Annual Report – NCC';

        if (reports.length > 4) {
            const prev = prevRef.current;
            const next = nextRef.current;
            const track = trackRef.current;
            const cardContainer = cardContainerRef.current;
            const carouselContainer = carouselContainerRef.current;
            let cardWidth = cardContainer.offsetWidth;
            let carouselWidth = carouselContainer.offsetWidth;

            const handleResize = () => {
                cardWidth = cardContainer.offsetWidth;
                carouselWidth = carouselContainer.offsetWidth;
            };

            window.addEventListener('resize', handleResize);

            let index = 0;

            const handleNext = () => {
                index++;
                prev.classList.add('show');
                track.style.transform = `translateX(-${index * cardWidth}px)`;

                if ((reports.length * cardWidth - ((index) * cardWidth)) < carouselWidth) {
                    next.classList.add('hide');
                }
            };

            const handlePrev = () => {
                index--;
                next.classList.remove('hide');
                if (index === 0) {
                    prev.classList.remove('show');
                }
                track.style.transform = `translateX(-${index * cardWidth}px)`;
            };

            next.addEventListener('click', handleNext);
            prev.addEventListener('click', handlePrev);

            return () => {
                next.removeEventListener('click', handleNext);
                prev.removeEventListener('click', handlePrev);
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [reports]);

    return (
        <div className='container'>
            <p className="heading" style={{ marginTop: '122px' }}>Annual Reports</p>
            <div className="reports">
                <div className='curr-year'>
                    <div className="Report-box">
                        <a href="./files/Annual Report 2024-25.pdf" target="_blank" download>
                            <img src="./images/annualreport/annlrp2025.png" alt="annual report 24-25" />
                        </a>
                    </div>
                </div>
                <div className="prev-year">
                    {reports.length < 5 ?
                        <div className={`d-flex ${window.innerWidth < 750 ? 'flex-column' : ''} justify-content-evenly`}>
                            {reports.map((report, index) => (
                                <div className="card-container" key={index}>
                                    <div className="card">
                                        <div className="img">
                                            <a href={report.link} target="_blank" download>
                                                <img src={report.imgSrc} alt={report.altText} style={{ width: '100%', borderRadius: '10px' }} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> :
                        <div className="carousel-container" ref={carouselContainerRef}>
                            <div className="carousel-inner">
                                <div className="track" ref={trackRef}>
                                    {reports.map((report, index) => (
                                        <div className="card-container" key={index} ref={cardContainerRef}>
                                            <div className="card">
                                                <div className="img">
                                                    <a href={report.link} target="_blank" download>
                                                        <img src={report.imgSrc} alt={report.altText} style={{ width: '100%', borderRadius: '10px' }} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="carousel-nav">
                                <button className="prev" ref={prevRef}>
                                    <i className="fa fa-chevron-left"></i>
                                </button>
                                <button className="next" ref={nextRef}>
                                    <i className="fa fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default AnnualReport;