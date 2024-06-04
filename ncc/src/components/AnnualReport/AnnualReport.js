import React, { useEffect, useRef } from 'react';
import './AnnualReport.css';

function AnnualReport() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const trackRef = useRef(null);
    const cardContainerRef = useRef(null);
    const carouselContainerRef = useRef(null);

    const reports = [
        { link: "https://drive.google.com/file/d/1kAgogATQnVMk3ikKk5sFv3QoAVrTZ-vW/view?usp=sharing", imgSrc: "/images/annualreport/annlrp2021.jpg", altText: "annual report 20-21" },
        { link: "https://drive.google.com/file/d/1b9w3FArFXU7Jj4sLXbRKhiCy7sEb2xTA/view?usp=sharing", imgSrc: "/images/annualreport/annlrp2020.jpg", altText: "annual report 19-20" },
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
            <p className="heading">Annual Reports</p>
            <div className="reports">
                <div className='curr-year'>
                    <div className="Report-box">
                        <a href="https://drive.google.com/file/d/1XQC6-aUcZG6igPKWHH0zacx0M0uEPU7l/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            <img src="/images/annualreport/annlrp2023.jpg" alt="annual report 23-24" />
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
                                            <a href={report.link} target="_blank" rel="noopener noreferrer">
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
                                                    <a href={report.link} target="_blank" rel="noopener noreferrer">
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