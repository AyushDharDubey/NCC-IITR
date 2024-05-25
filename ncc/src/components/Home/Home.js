import React from 'react'
import './Home.css';

// import Navbar from "../Navbar/navbar.js"

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <div id="carouselIndicators" class="carousel slide carousel-home" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item">
            <img src="./images/home/carousel1.jpg" class="d-block w-100" alt="image-1" style={{ marginTop: '0px' }} />
          </div>
          <div class="carousel-item active">
            <img src="./images/home/carousel2.jpg" class="d-block w-100" alt="image-2" style={{ marginTop: '0px' }} />
          </div>
          <div class="carousel-item">
            <img src="./images/home/carousel3.jpg" class="d-block w-100" alt="image-3" style={{ marginTop: '0px' }} />
          </div>
        </div>
        <button class="carousel-control-prev" data-bs-target="#carouselIndicators" type="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" data-bs-target="#carouselIndicators" type="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="Our_AIM">
        <div class="section-heading text-center d-flex align-items-center justify-content-around py-3">
          <div class="line"></div>
          <p class="heading">Our AIM</p>
          <div class="line"></div>
        </div>
        <div class="flex-container">
          <img class="pics" src="./images/home/Aim.jpg" alt="Flag" style={{ position: 'relative' }} />
          <div class="text" style={{ fontWeight: 400 }}>
            <p>The Aims of the NCC laid out in 1988 have stood the test of time and continue to meet the
              requirements expected of it in the current socio-economic scenario of the country.
            </p><ul>
              <li> To Create a Human Resource of Organized, Trained and Motivated Youth, To Provide Leadership in
                all Walks of life and be Always Available for the Service of the Nation.</li>
              <li>To Provide a Suitable Environment to Motivate the Youth to Take Up a Career in the Armed Forces.
              </li>
              <li>To Develop Character, Comradeship, Discipline, Leadership, Secular Outlook, Spirit of Adventure,
                and Ideals of Selfless Service amongst the Youth of the Country.</li>
            </ul>
            <p></p>
            <div class="reference">
              <p>Source: <a href="http://indiancc.nic.in/aim-of-ncc/">indiancc.nic.in/aim-of-ncc/ </a></p>
            </div>
          </div>
        </div>

      </div>
      <div class="Pledge">
        <div class="section-heading text-center d-flex align-items-center justify-content-around py-3">
          <div class="line"></div>
          <p class="heading">Our Pledge</p>
          <div class="line"></div>
        </div>
        <div class="flex-container">
          <img class="pics" src="./images/home/Pledge.png" alt="Pledge" style={{ position: 'relative' }} />
          <div class="text">
            <p>We the cadets of the National Cadet Corps, do solemnly pledge that we shall always uphold the unity
              of India. We resolve to be disciplined and responsible citizens of our nation. We shall undertake
              positive community service in the spirit of selflessness and concern for our fellow beings.</p>
            <div class="reference">
              <p>Source: <a href="http://indiancc.nic.in/pledge/">indiancc.nic.in/pledge/</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="ncc-song">
        <div class="section-heading text-center d-flex align-items-center justify-content-around py-3">
          <div class="line"></div>
          <p class="heading"><a href="https://www.youtube.com/watch?v=K2faLjlM8iY" target="_blank" style={{ textDecoration: 'none', color: '#212529' }}>
            NCC Song</a></p>
          <div class="line"></div>
        </div>
        <p class="text-center song_text">
          Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain<br /> Apni Manzil Ek Hai,<br /> Ha, Ha, Ha, Ek Hai,<br />
          Ho, Ho, Ho, Ek Hai.<br /> Hum Sab Bharatiya Hain.<br />
          <br /> Kashmir Ki Dharti Rani Hai,<br /> Sartaj Himalaya Hai,<br /> Saadiyon Se Humne Isko Apne Khoon Se
          Pala Hai<br /> Desh Ki Raksha Ki Khatir Hum Shamshir Utha Lenge,<br /> Hum Shamshir Utha Lenge.<br />
          <br /> Bikhre Bikhre Taare Hain Hum Lekin Jhilmil Ek Hai,<br /> Ha, Ha, Ha, Ek Hai<br /> Hum Sab Bharatiya
          Hai.<br /> Mandir Gurudwaare Bhi Hain Yahan<br /> Aur Masjid Bhi Hai Yahan<br /> Girija Ka Hai Ghariyaal
          Kahin<br /> Mullah ki Kahin Hai Ajaan<br />
          <br /> Ek Hee Apna Ram Hain, Ek hi Allah Taala Hai,<br /> Ek Hee Allah Taala Hain, Raang Birange Deepak
          Hain Hum,<br /> lekin Jagmag Ek Hai, Ha Ha Ha Ek Hai, Ho Ho Ho Ek Hai.<br /> Hum Sab Bharatiya Hain, Hum
          Sab Bharatiya Hain.
        </p>
        <div class="reference">
          <p style={{ marginRight: '55px', paddingBottom: '30px' }}>Source: <a href="http://indiancc.nic.in/ncc-song-lyrics/">indiancc.nic.in/ncc-song-lyrics/</a></p>
        </div>
      </div>
    </div>
  )
}
