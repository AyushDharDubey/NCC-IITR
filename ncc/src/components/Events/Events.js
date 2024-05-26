import React, { useEffect } from 'react'
import './Events.css';

export default function Events() {
    useEffect(() => {
        document.title = 'Events – NCC';

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
            <div className='upcoming-events'>
                <div class="section-heading text-center d-flex align-items-center justify-content-around py-3">
                    <div class="line"></div>
                    <p class="heading">Upcoming Events</p>
                    <div class="line"></div>
                </div>

                <div id="upcomingEventsCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-theme="dark" data-bs-touch="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#upcomingEventsCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#upcomingEventsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#upcomingEventsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./images/events/trdd.png" alt="events" class="d-block" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="changeCarouselInterval()" />
                            <div class="block">
                                <div id="date">Date & Time - 26-01-2022</div>
                                <div id="place">Place - IIT Roorkee </div>
                                <div id="last_date">Last date of registration - 25-01-2022</div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="./images/events/vfl.png" alt="events" class="d-block" data-bs-toggle="modal" data-bs-target="#exampleModal2" onclick="changeCarouselInterval()" />

                            <div class="block">
                                <div id="date">Date & Time - 15-08-2022</div>
                                <div id="place">Place - IITR</div>
                                <div id="last_date">Last date of registration - 14-08-2021</div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="./images/events/fc.png" alt="events" class="d-block" data-bs-toggle="modal" data-bs-target="#exampleModal3" onclick="changeCarouselInterval()" />
                            <div class="block">
                                <div id="date">Date & Time - 02-10-2022</div>
                                <div id="place">Place - IITR</div>
                                <div id="last_date">Last date of registration - 02-10-2022</div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#upcomingEventsCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#upcomingEventsCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" style={{ display: 'none' }} aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center">
                                            <img src="./images/events/trdd.png" alt="events" class="d-block" style={{ width: '100%', margin: '0px', padding: '0px', borderRadius: '0px' }} />
                                        </div>
                                        <div class="col-6 modal-event">
                                            <p class="text-center event-name">Guard of Honour</p>
                                            <p class="text-center event-des" style={{ padding: '13px' }}>This year's Independence day was special, as we were celebrating 75 years of independence. This special occasion implored for a grand celebration. Being a part of the celebration, NCC IIT Roorkee organised various events to commemorate the occasion. NCC's guard of honour, which has always been the centre of attraction of The Independence day, graced the event. NCC also conducted a seminar on "Partition Horrors Remembrance", which took us back to the dreadful days of partition.</p>
                                            <p class="event-details">Date &amp; Time - 15-08-2022, 9:00 AM</p>
                                            <p class="event-details">Venue - LBS Stadium</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModal2Label" style={{ display: 'none' }} aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center">
                                            <img src="./images/events/vfl.png" alt="events" class="d-block" style={{ width: '100%', margin: '0px', padding: '0px', borderRadius: '0' }} />
                                        </div>
                                        <div class="col-6 modal-event">
                                            <p class="text-center event-name">Vocal for Local</p>
                                            <p class="text-center event-des" style={{ padding: '30px' }}>Today is a historic day with regard to the freedom struggle. It was the day when people from all parts of India and from all religious groups, came to streets, demanding poorna swaraj and complete end of British rule. It was this campaign which shook the roots of British Empire and paved the way for swaraj(self-rule). On this significant occasion, NCC organised a 'Vocal for Local' rally across the IITR campus celebrating this remarkable event and also creating awareness about 'Vocal for Local' as in today's world self dependency in true swaraj.</p>
                                            <p class="event-details">Date - 09-08-2022</p>
                                            <p class="event-details">Venue - IITR Campus</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center">
                                            <img src="./images/events/fc.png" alt="events" class="d-block" style={{ width: '100%', margin: '0px', padding: '0px', borderRadius: '0' }} />
                                        </div>
                                        <div class="col-6 modal-event">
                                            <p class="text-center event-name" style={{ paddingTop: '3px' }}>BEG Visit</p>
                                            <p class="text-center event-des">NCC IIT Roorkee had conducted a visit to one of the oldest regiments in the Indian military, the Bengal Sappers, which is stationed in Roorkee and is trained by the Bengal Engineers Group (BEG). This visit was full of pride and ardour as the students got an opportunity to experience how our warriors train with fervour. They were made to have a tour of the military school, army labs, regiment parade ground, where they witnessed the daily procession of the army unit. They were exhibited many military weapons and tanks. NCC also paid a visit to the the regiment's war memorial, where the anecdotes of many brave soldiers were portrayed.</p>
                                            <p class="event-details">Date - 06-08-2022</p>
                                            <p class="event-details">Venue - BEG, Roorkee</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='past-events'>
                <div class="section-heading text-center d-flex align-items-center justify-content-around py-3">
                    <div class="line"></div>
                    <p class="heading">Past Events</p>
                    <div class="line"></div>
                </div>
                <div class="recom">
                    <div class="carousel-container">
                        <div class="carousel-inner">
                            <div class="track">

                                <div class="card-container">
                                    <div class="card">
                                        <div class="img"><img src="./images/events/yoga.jpg" alt="" data-bs-toggle="modal" data-bs-target="#exampleModalp9"/></div>
                                    </div>
                                </div>
                                <div class="card-container">
                                    <div class="card">
                                        <div class="img"><img src="./images/events/bdc.jpeg" alt="" data-bs-toggle="modal" data-bs-target="#exampleModalp8"/></div>
                                    </div>
                                </div>
                                <div class="card-container">
                                    <div class="card">
                                        <div class="img"><img src="./images/events/marathon.jpg" alt="" data-bs-toggle="modal" data-bs-target="#exampleModalp7"/></div>
                                    </div>
                                </div>
                                <div class="card-container">
                                    <div class="card">
                                        <div class="img"><img src="./images/events/quiz.jpg" alt="" data-bs-toggle="modal" data-bs-target="#exampleModalp6"/></div>
                                    </div>
                                </div>
                                <div class="card-container">
                                    <div class="card">
                                        <div class="img"><img src="./images/events/hd.png" alt=""  data-bs-toggle="modal" data-bs-target="#exampleModalp5"/></div>
                                    </div>
                                </div>
                                <div class="card-container">
                                    <div class="card">
                                        <div class="img"><img src="./images/events/Run.jpg" alt=""  data-bs-toggle="modal" data-bs-target="#exampleModalp4"/></div>
                                    </div>
                                </div>
                                <div class="card-container">
                                    <div class="card">
                                        <div class="img"><img src="./images/events/KVDquiz.png" alt=""  data-bs-toggle="modal" data-bs-target="#exampleModalp2"/></div>
                                    </div>
                                </div>
                                <div class="card-container">
                                    <div class="card">
                                        <div class="img"><img src="./images/events/Pentathlon.png" alt="" data-bs-toggle="modal" data-bs-target="#exampleModalp3"/></div>
                                    </div>
                                </div>
                                <div class="card-container">
                                    <div class="card">
                                        <div class="img"><img src="./images/events/GenSD-Webinar1.jpg" alt="" data-bs-toggle="modal" data-bs-target="#exampleModalp1"/></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="nav">
                            <button class="prev">
                                <i class="fa fa-chevron-left"></i>
                            </button>
                            <button class="next show">
                                <i class="fa fa-chevron-right"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}