import React, { useEffect, useRef } from 'react'
import './Events.css';

function Events() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const trackRef = useRef(null);
    const cardContainerRef = useRef(null);
    const carouselContainerRef = useRef(null);

    const events = [
        {
            src: "./images/events/BEG2024.jpeg",
            alt: "BEG Visit",
            dataBsTarget: "#exampleModalp23"
        },
        {
            src: "./images/events/megaFoodDrive.jpeg",
            alt: "Food Donation Drive with Robin Hood Army",
            dataBsTarget: "#exampleModalp22"
        },
        {
            src: "./images/events/26Jan2024.jpeg",
            alt: "Guard of Honour on Republic Day",
            dataBsTarget: "#exampleModalp21"
        },
        {
            src: "./images/events/catc2023.jpg",
            alt: "CATC",
            dataBsTarget: "#exampleModalp20"
        },
        {
            src: "./images/events/BDC2023.jpeg",
            alt: "BDC Event",
            dataBsTarget: "#exampleModalp19"
        },
        {
            src: "./images/events/15aug2023.jpg",
            alt: "Guard Of Honour",
            dataBsTarget: "#exampleModalp18"
        },
        {
            src: "./images/events/tree-plantation2023.jpg",
            alt: "Tree Plantation Drive",
            dataBsTarget: "#exampleModalp17"
        },
        {
            src: "./images/events/flood-donation2023.jpg",
            alt: "Flood Relief Donation Drive",
            dataBsTarget: "#exampleModalp16"
        },
        {
            src: "./images/events/atomic.jpg",
            alt: "Atomic Artistry",
            dataBsTarget: "#exampleModalp15"
        },
        {
            src: "./images/events/selfDef.jpeg",
            alt: "Self Defence Workshop",
            dataBsTarget: "#exampleModalp14"
        },
        {
            src: "./images/events/26Jan2023.jpeg",
            alt: "Guard Of Honour",
            dataBsTarget: "#exampleModalp13"
        },
        {
            src: "./images/events/trdd.png",
            alt: "Guard Of Honour",
            dataBsTarget: "#exampleModalp12"
        },
        {
            src: "./images/events/vfl.png",
            alt: "Vocal For Local",
            dataBsTarget: "#exampleModalp11"
        },
        {
            src: "./images/events/fc.png",
            alt: "BEG Visit",
            dataBsTarget: "#exampleModalp10"
        },
        {
            src: "./images/events/yoga.jpg",
            alt: "Yoga Event",
            dataBsTarget: "#exampleModalp9"
        },
        {
            src: "./images/events/bdc.jpeg",
            alt: "BDC Event",
            dataBsTarget: "#exampleModalp8"
        },
        {
            src: "./images/events/marathon.jpg",
            alt: "Marathon Event",
            dataBsTarget: "#exampleModalp7"
        },
        {
            src: "./images/events/quiz.jpg",
            alt: "Quiz Event",
            dataBsTarget: "#exampleModalp6"
        },
        {
            src: "./images/events/hd.png",
            alt: "HD Event",
            dataBsTarget: "#exampleModalp5"
        },
        {
            src: "./images/events/Run.jpg",
            alt: "Run Event",
            dataBsTarget: "#exampleModalp4"
        },
        {
            src: "./images/events/KVDquiz.png",
            alt: "KVD Quiz Event",
            dataBsTarget: "#exampleModalp2"
        },
        {
            src: "./images/events/Pentathlon.png",
            alt: "Pentathlon Event",
            dataBsTarget: "#exampleModalp3"
        },
        {
            src: "./images/events/GenSD-Webinar1.jpg",
            alt: "GenSD Webinar",
            dataBsTarget: "#exampleModalp1"
        }
    ];


    useEffect(() => {
        document.title = 'Events – NCC';

        const prev = prevRef.current;
        const next = nextRef.current;
        const track = trackRef.current;
        const cardContainer = cardContainerRef.current;
        const carouselContainer = carouselContainerRef.current;
        let cardWidth = cardContainer.offsetWidth;
        let carouselWidth = carouselContainer.offsetWidth;


        if (window.innerWidth < 750) {
            next.classList.add('hide');
        }
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

            if ((events.length * cardWidth - ((index) * cardWidth)) < carouselWidth) {
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

    }, []);

    return (
        <div style={{ marginBottom: '2vw' }}>
            <div className='upcoming-events'>
                <div class="section-heading text-center d-flex align-items-center justify-content-around py-3">
                    <div class="line"></div>
                    <p class="heading">Upcoming Events</p>
                    <div class="line"></div>
                </div>

                <div id="upcomingEventsCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-theme="dark" data-bs-touch="true">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./images/events/trdd.png" alt="events" class="d-block" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="changeCarouselInterval()" />
                        </div>
                        <div class="carousel-item">
                            <img src="./images/events/vfl.png" alt="events" class="d-block" data-bs-toggle="modal" data-bs-target="#exampleModal2" onclick="changeCarouselInterval()" />
                        </div>
                        <div class="carousel-item">
                            <img src="./images/events/fc.png" alt="events" class="d-block" data-bs-toggle="modal" data-bs-target="#exampleModal3" onclick="changeCarouselInterval()" />
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
                                        <div class="col-6 px-0 align-self-center img-container">
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
                                        <div class="col-6 px-0 align-self-center img-container">
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
                                        <div class="col-6 px-0 align-self-center img-container">
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
                    <div className="carousel-container" ref={carouselContainerRef}>
                        <div class="carousel-inner">
                            <div className="track" ref={trackRef}>
                                {events.map((event, index) => (
                                    <div className="card-container" key={index} ref={cardContainerRef}>
                                        <div className="card">
                                            <div class="img"><img src={event.src} alt="" data-bs-toggle="modal" data-bs-target={event.dataBsTarget} /></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div class="nav event-nav">
                            <button className="prev" ref={prevRef}>
                                <i class="fa fa-chevron-left"></i>
                            </button>
                            <button className="next show" ref={nextRef}>
                                <i class="fa fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModalp1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/GenSD-Webinar1.jpg" alt="events" style={{ width: '100%' }} />
                                        </div>
                                        <div class="col-6 modal-event">
                                            <p class="text-center event-name"
                                                style={{ paddingTop: '10px', fontSize: '30px', lineHeight: '35px' }}>Bravest of the brave: The
                                                Indian Army</p>
                                            <p class="text-center event-des" style={{ paddingTop: '0px', margin: '0px', fontSize: '15px' }}>
                                                NCC IIT Roorkee brings to you the first webinar of a series of events, on the topic
                                                ‘Bravest of the Brave: The Indian Army’. Our speaker for the event, a very eminent
                                                personality, is Lt. Gen. Satish Dua, PVSM, UYSM, SM, VSM(R), and during the webinar, he
                                                will talk about his experiences in the Army during 4 decades of his service. The webinar
                                                will be an opportunity for all those enthusiastic about the Indian Army to know more
                                                about the IA, and life in the IA, and motivate those who are willing to don the uniform.
                                            </p>
                                            <p class="event-details" style={{ paddingTop: '20px', fontSize: '15px' }}>Date & Time -
                                                07-02-2021</p>
                                            <p class="event-details" style={{ fontSize: '15px' }}>Venue - Online</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModalp2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/KVDQwinners.png" alt="events" style={{ width: '100%' }} class="imga" />
                                        </div>
                                        <div class="col-6 modal-event">
                                            <p class="text-center event-name" style={{ paddingTop: '20px' }}>Kargil Vijay Diwas Quiz</p>
                                            <p class="text-center event-des" style={{ paddingTop: '30px', fontSize: '15px' }}>
                                                Winner <br />
                                                1st : Mr. Ayush Agrawal <br />
                                                2nd : Mr. Rohan Kumar<br />
                                                3rd : Mr. Suraj Sharma<br />
                                            </p>
                                            <p class="event-details" style={{ paddingTop: '40px', fontSize: '15px' }}>Date & Time -
                                                15-08-2021</p>
                                            <p class="event-details" style={{ fontSize: '15px' }}>Venue - IIT Roorkee</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModalp3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/pentathlonwinners.png" alt="events" style={{ width: '100%' }} class="imga" />
                                        </div>
                                        <div class="col-6 modal-event">
                                            <p class="text-center event-name" style={{ paddingTop: '15px' }}>Pentathlon</p>
                                            <p class="text-center event-des" style={{ paddingTop: '10px', fontSize: '15px' }}>
                                                Winners <br />
                                                Refer the poster.
                                            </p>
                                            <p class="event-details" style={{ paddingTop: '15px', fontSize: '15px' }}>Date & Time -
                                                <ul style={{ fontSize: '15px', paddingLeft: '80px', margin: '0px' }}>
                                                    <li> 26-07-2021</li>
                                                    <smallbr />
                                                    <li>31-07-2021</li>
                                                    <smallbr />
                                                    <li>1-08-2021</li>
                                                    <smallbr />
                                                    <li>07-08-2021</li>
                                                    <smallbr />
                                                    <li>08-08-2021</li>
                                                    <smallbr />
                                                </ul> At 6pm each day.</p>
                                            <p class="event-details" style={{ fontSize: '15px' }}>Venue - </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div className="container-fluid p-0">
                                    <div className="row d-flex modal-box m-0">
                                        <div className="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/Run.jpg" alt="events" style={{ width: '100%' }} className="imga" />
                                        </div>
                                        <div className="col-6 modal-event">
                                            <p className="text-center event-name" style={{ paddingTop: '20px' }}>Run for the Nation</p>
                                            <p className="text-center event-des" style={{ paddingTop: '10px' }}>
                                                Celebrating Azadi Ka Amrit Mahotsav, NCC IIT ROORKEE is overjoyed to announce the Freedom Day Run. NCC has always stressed the importance of physical fitness and well-being. This 15th August, get ready to free yourself from chains of lethargy and procrastination. Being physically fit is a boon you can give to yourself; being fit not only helps your physical well-being but also develops a healthy mind.
                                            </p>
                                            <p className="event-details" style={{ paddingTop: '10px', fontSize: '15px' }}>Date & Time - 15-08-2021, 9 PM</p>
                                            <p className="event-details" style={{ fontSize: '15px' }}>Venue - Anywhere</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div className="container-fluid p-0">
                                    <div className="row d-flex modal-box m-0">
                                        <div className="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/hd.png" alt="events" style={{ width: '100%' }} className="imga" />
                                        </div>
                                        <div className="col-6 modal-event">
                                            <p className="text-center event-name" style={{ paddingTop: '20px' }}>Hindi Diwas</p>
                                            <p className="text-center event-des" style={{ paddingTop: '30px' }}>
                                                प्रत्येक वर्ष 14 सितम्बर को हिंदी दिवस मनाया जाता है। इस दिन ही भारत की संविधान सभा ने हिंदी को भारत गणराज्य की आधिकारिक भाषा घोषित किया था। इस हिंदी दिवस पर एन. सी. सी आई. आई. टी. रुड़की आप सभी के लिए एक हिंदी वाचन प्रतियोगिता प्रस्तुत कर रहा है।
                                            </p>
                                            <p className="event-details" style={{ paddingTop: '70px', fontSize: '15px' }}>Date - 12-09-2021</p>
                                            <p className="event-details" style={{ fontSize: '15px' }}>Venue - Online</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp6" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div className="container-fluid p-0">
                                    <div className="row d-flex modal-box m-0">
                                        <div className="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/quiz.jpg" alt="events" style={{ width: '100%' }} className="imga" />
                                        </div>
                                        <div className="col-6 modal-event">
                                            <p className="text-center event-name" style={{ paddingTop: '20px' }}>Quizzard</p>
                                            <p className="text-center event-des" style={{ paddingTop: '10px' }}>
                                                On 26th January 2022, NCC IIT Roorkee celebrates the 73rd Republic Day of India with much enthusiasm and heartfelt gratitude to the heroic sons of Mother India whose ceaseless determination and unending valor lead to the transformation of the country into a sovereign nation. It is a day to celebrate the essence of liberty, pay homage to our constitution and help India accomplish its freedom fighters' dreams.
                                            </p>
                                            <p className="event-details">Date & Time - 26-01-2022, 9 PM</p>
                                            <p className="event-details">Venue - D2C</p>
                                            <p className="event-details">Last date of registration - 26-01-2022, 8 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp7" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div className="container-fluid p-0">
                                    <div className="row d-flex modal-box m-0">
                                        <div className="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/marathon.jpg" alt="events" style={{ width: '100%' }} className="imga" />
                                        </div>
                                        <div className="col-6 modal-event">
                                            <p className="text-center event-name" style={{ paddingTop: '20px' }}>Fresher's Marathon</p>
                                            <p className="text-center event-des" style={{ paddingTop: '10px' }}>
                                                NCC IIT Roorkee is organizing a 'Freshers marathon' for all IITR students on 5th February 2022. The marathon would be 5 KM for both boys and girls. We have a cash prize of ₹6000, and the top 5 runners will get T-Shirts and there are Certificates of participation for all those who complete the marathon.
                                            </p>
                                            <p className="event-details">Date - 05-02-2022</p>
                                            <p className="event-details">Venue - Anywhere</p>
                                            <p className="event-details">Last date of registration - 04-02-2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp8" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div className="container-fluid p-0">
                                    <div className="row d-flex modal-box m-0">
                                        <div className="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/bdc.jpeg" alt="events" style={{ width: '100%' }} className="imga" />
                                        </div>
                                        <div className="col-6 modal-event">
                                            <p className="text-center event-name" style={{ paddingTop: '20px' }}>Blood Donation Camp</p>
                                            <p className="text-center event-des" style={{ paddingTop: '10px' }}>
                                                Blood Donation is a noble cause. Keeping this in mind, NCC in collaboration with NSS IIT Roorkee, conducted a blood donation camp. Maa Ganga Blood Centre, IMA Dehradun and Mother Teresa Blood Bank were invited. The combined collection was nearly 850+ units. Mr Suresh Kumar Saini, a world record holder in the number of times he has donated blood graced the occasion as the chief guest of the occasion.
                                            </p>
                                            <p className="event-details">Date - 07-04-2022</p>
                                            <p className="event-details">Venue - SAC, 1st Floor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp9" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div className="container-fluid p-0">
                                    <div className="row d-flex modal-box m-0">
                                        <div className="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/yoga.jpg" alt="events" style={{ width: '100%' }} className="imga" />
                                        </div>
                                        <div className="col-6 modal-event">
                                            <p className="text-center event-name" style={{ paddingTop: '20px' }}>Yoga Sadna</p>
                                            <p className="text-center event-des" style={{ paddingTop: '10px' }}>
                                                Yoga is the journey of the self, through the self, to the self. To give a mirror to look at from within, NCC IIT Roorkee organized Yoga Sadhna, a mass yoga event at LBS Stadium. The event saw a huge participation of nearly 1200 participation from the IIT R community. T-shirts and refreshments were given. The chief guest of the occasion was the Deputy Director of IIT Roorkee, Dr Manoranjan Parida.
                                            </p>
                                            <p className="event-details">Date & Time - 17-04-2022, 5:30 AM</p>
                                            <p className="event-details">Venue - LBS Stadium</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp10" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center img-container">
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
                <div className="modal fade" id="exampleModalp11" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center img-container">
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
                <div className="modal fade" id="exampleModalp12" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/trdd.png" alt="events" class="d-block" style={{ width: '100%', margin: '0px', padding: '0px', borderRadius: '0px' }} />
                                        </div>
                                        <div class="col-6 modal-event">
                                            <p class="text-center event-name">Guard of Honour</p>
                                            <p class="text-center event-des" style={{ padding: '13px' }}>This year's Independence day was special, as we were celebrating 75 years of independence. This special occasion implored for a grand celebration. Being a part of the celebration, NCC IIT Roorkee organised various events to commemorate the occasion. NCC's guard of honour, which has always been the centre of attraction of The Independence day, graced the event. NCC also conducted a seminar on "Partition Horrors Remembrance", which took us back to the dreadful days of partition.</p>
                                            <p class="event-details">Date &amp; Time - 15-08-2022, 9:00 AM</p>
                                            <p class="event-details">Venue - Thomso Ground</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp13" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/26Jan2023.jpeg" alt="events" class="d-block" style={{ width: '100%', margin: '0px', padding: '0px', borderRadius: '0px' }} />
                                        </div>
                                        <div class="col-6 modal-event">
                                            <p class="text-center event-name">Guard of Honour</p>
                                            <p class="text-center event-des" style={{ padding: '0px 15px' }}>
                                                This year's Republic Day celebration at IIT Roorkee was marked with patriotic fervor and memorable events organized by NCC IIT Roorkee. The event began with the cadet's guard of honor, showcasing their discipline and precision, capturing the admiration of all attendees. The day celebrated the spirit of the Indian Republic, fostering national pride and unity among participants. The commendable efforts of the cadets made the day memorable for all.
                                            </p>
                                            <p class="event-details">Date &amp; Time - 26-01-2023, 9:00 AM</p>
                                            <p class="event-details">Venue - Thomso Ground</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp14" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/self.Def.jpeg" alt="events" class="d-block" style={{ width: '100%', margin: '0px', padding: '0px', borderRadius: '0px' }} />
                                        </div>
                                        <div class="col-6 modal-event">
                                            <p class="text-center event-name">Self Defence Workshop</p>
                                            <p class="text-center event-des" style={{ padding: '0px 15px' }}>
                                                "The purpose of self-defence is not to win a fight, but to prevent one." - Bruce Lee
                                                Join us for a hands-on Self-Defence Workshop on 19th March 2023, starting at 5:00 PM onwards at the Taekwondo Club Floor. This workshop is being organized by NCC IIT Roorkee in collaboration with the Taekwondo Club IIT Roorkee.
                                            </p>
                                            <p class="event-details">Date & Time - 19-03-2023, 5:00 PM</p>
                                            <p class="event-details">Venue - Taekwondo Club area, above central gym</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp15" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/atomicWinner.jpg" alt="events" style={{ width: '100%' }} class="imga" />
                                        </div>
                                        <div class="col-6 modal-event">
                                            <p class="text-center event-name" style={{ paddingTop: '20px', fontSize: '35px', lineHeight: '40px' }}>Pokhran II Nuclear Test Painting Competition</p>
                                            <p class="text-center event-des" style={{ paddingTop: '30px', fontSize: '15px' }}>
                                                Winners <br />
                                                1st : Mr. Nikita Tripathi <br />
                                                2nd : Mr. Cheerag Shridhar<br />
                                                3rd : Mr. Shrey Agrawal<br />
                                            </p>
                                            <p class="event-details" style={{ paddingTop: '40px', fontSize: '15px' }}>Date & Time -
                                                13-05-2023</p>
                                            <p class="event-details" style={{ fontSize: '15px' }}>Venue - IIT Roorkee</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp16" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/flood-donation2023.jpg" alt="events" class="d-block" style={{ width: '100%', margin: '0px', padding: '0px', borderRadius: '0px' }} />
                                        </div>
                                        <div class="col-6 modal-event">
                                            <p class="text-center event-name">Flood Relief Donation Drive</p>
                                            <p class="text-center event-des" style={{ padding: '0px 15px' }}>
                                                In the guidance of the traditional values of helping the needy, NCC and NSS, IIT Roorkee came together to contribute to the flood affected society in collaboration with the IX Battalion The Jat Regiment. The donation, collected from the residents of IIT Roorkee, was was distributed on 5th August at The Bengal Engineers Group centre, Roorkee. The grace of the occassion was enhanced by the presence of the Commandant of BEG centre himself.
                                            </p>
                                            <p class="event-details">Date - 18-06-2023</p>
                                            <p class="event-details">Venue - Roorkee</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp17" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-5 px-0 align-self-center img-container">
                                            <img src="./images/events/tree-plantation-2023.jpg" alt="events" class="d-block" style={{ width: '100%', margin: '0px', padding: '0px', borderRadius: '0px' }} />
                                        </div>
                                        <div class="col-7 modal-event">
                                            <p class="text-center event-name">Tree Plantation Drive</p>
                                            <p class="text-center event-des" style={{ padding: '0px 15px' }}>
                                                On August 13th, NCC, Institute Works Department, and the Green Committee joined forces
                                                on August 13th for a tree planting event. This collaboration aimed to promote nature
                                                appreciation within the campus. Volunteers from various backgrounds planted saplings
                                                around the ABN Ground, symbolizing environmental commitment and inspiring a
                                                connection with nature for future generations.
                                            </p>
                                            <p class="event-details">Date - 13-08-2023</p>
                                            <p class="event-details">Venue - ABN Ground</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp18" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/15aug-2023.jpg" alt="events" class="d-block" style={{ width: '100%', margin: '0px', padding: '0px', borderRadius: '0px' }} />
                                        </div>
                                        <div class="col-6 modal-event">
                                            <p class="text-center event-name">GoH 15 Aug 2023</p>
                                            <p class="text-center event-des" style={{ padding: '0px 15px' }}>
                                                This year's Independence Day celebration at IIT Roorkee resonated with patriotic zeal and memorable events organized by NCC IIT Roorkee. The festivities commenced with a solemn flag hoisting ceremony, symbolizing our nation's freedom and sovereignty, evoking deep reverence among all present. The day embodied the essence of India's independence struggle, igniting a sense of pride and unity among the participants. The unwavering dedication of the cadets made the occasion truly unforgettable for everyone involved.                                            </p>
                                            <p class="event-details">Date &amp; Time - 15-08-2023, 9:00 AM</p>
                                            <p class="event-details">Venue - Thomso Ground</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp19" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/BDC2023.jpeg" alt="events" class="d-block" style={{ width: '100%', margin: '0px', padding: '0px', borderRadius: '0px' }} />
                                        </div>
                                        <div class="col-6 modal-event">
                                            <p class="text-center event-name">Blood Donation Event</p>
                                            <p class="text-center event-des" style={{ padding: '0px 15px' }}>
                                                Join us for a Lifesaving Mission!
                                                <br />
                                                Are you ready to make a difference?
                                                <br />
                                                On this Sunday, the 8th of October, NCC IIT Roorkee has made arrangements for a Blood Donation Camp on campus at SAC. Join us as we put our hands together towards the future of the country.
                                                Let's come together, unite our strengths, donate blood and create a ripple effect of kindness that will touch countless lives. See you there on the Sunday!                                           </p>
                                            <p class="event-details">Date &amp; Time - 08-10-2023, 10:00 AM</p>
                                            <p class="event-details">Venue - SAC</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp20" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-5 px-0 align-self-center img-container">
                                            <img src="./images/events/catc2023.jpg" alt="events" class="d-block" style={{ width: '100%', margin: '0px', padding: '0px', borderRadius: '0px' }} />
                                        </div>
                                        <div class="col-7 modal-event">
                                            <p class="text-center event-name">CATC</p>
                                            <p class="text-center event-des" style={{ padding: '0px 15px' }}>
                                                Combined Annual Training Camp, which was a significant event organized by the National
                                                Cadet Corps (NCC) in IIT Roorkee. CATC camps serve as platforms for cadets to undergo
                                                intensive training in a structured environment. This camp features NCC IIT Roorkee cadets
                                                and other cadets from nearby colleges in Haridwar District under the 3 UK CTR NCC
                                                Roorkee.
                                            </p>
                                            <p class="event-details">Date - 27-11-2023</p>
                                            <p class="event-details">Venue - IIT Roorkee</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp21" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/26Jan2024.jpeg" alt="events" class="d-block" style={{ width: '100%', margin: '0px', padding: '0px', borderRadius: '0px' }} />
                                        </div>
                                        <div class="col-6 modal-event">
                                            <p class="text-center event-name">GoH 26 Jan 2024</p>
                                            <p class="text-center event-des" style={{ padding: '0px 15px' }}>
                                                This year's Republic Day celebration at IIT Roorkee reverberated with patriotic fervor and remarkable events orchestrated by NCC IIT Roorkee. The day commenced with a dignified flag hoisting ceremony, symbolizing the spirit of our nation's democratic values and unity in diversity, evoking profound respect among all attendees. The unwavering commitment of the cadets made the event truly memorable and resonant for all who were part of it.
                                            </p>
                                            <p class="event-details">Date &amp; Time - 26-01-2024, 9:00 AM</p>
                                            <p class="event-details">Venue - Thomso Ground</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp22" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/megaFoodDrive.jpeg" alt="events" class="d-block" style={{ width: '100%', margin: '0px', padding: '0px', borderRadius: '0px' }} />
                                        </div>
                                        <div class="col-6 modal-event">
                                            <p class="text-center event-name">Mega Food Drive</p>
                                            <p class="text-center event-des" style={{ padding: '0px 15px' }}>
                                                In a heartwarming act of kindness, NCC IIT Roorkee collaborated with the Robinhood Army to provide more than 100 food packets packed with essential nourishment to families residing in the IIT Roorkee Labour Camp on 20th of March, 2024. Moreover, this collaborative effort brought joy to children's faces by distributing toys and teddy bears.
                                                <br />
                                                A dedicated team of 25 cadets from NCC IIT Roorkee stood by, spreading hope throughout the community every step of the way.
                                            </p>
                                            <p class="event-details">Date &amp; Time - 26-01-2024, 9:00 AM</p>
                                            <p class="event-details">Venue - Thomso Ground</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalp24" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" style={{maxWidth:'1000px'}}>
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div class="container-fluid p-0">
                                    <div class="row d-flex modal-box m-0">
                                        <div class="col-6 px-0 align-self-center img-container">
                                            <img src="./images/events/BEG2024.jpeg" alt="events" class="d-block" style={{ width: '100%', margin: '0px', padding: '0px', borderRadius: '0'}} />
                                        </div>
                                        <div class="col-6 modal-event">
                                            <p class="text-center event-name" style={{ paddingBottom: '7px' }}>BEG Visit</p>
                                            <p class="text-center event-des">
                                                20 cadets from 3 UK CTR NCC Roorkee visited the Bengal Engineers Group and Center, Roorkee at the annual event "Exercise Jal Taranga", organised by the Bengal Sappers. The event was conducted gracefully by showcasing the task of corps of engineers in Indian Army during war and peace times.
                                            <br/>NCC IIT Roorkee hails the sappers who, by implementation of their knowledge, serve the nation and leave no stone unturned to neutralise the enemy.
Jai Hind!
                                            </p>
                                            <p class="event-details">Date & Time - 10-04-2024, 8:00 AM</p>
                                            <p class="event-details">Venue - BEG, Roorkee</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Events;