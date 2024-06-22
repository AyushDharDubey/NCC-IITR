import React from 'react';

function Activity() {
  return (
    <div class="container-fluid">
      <div class="section-heading text-center d-flex align-items-center justify-content-around py-3">
        <div class="line"></div>
        <p class="heading">ACTIVITES</p>
        <div class="line"></div>
      </div>

      {/* Carousel  */}
      <div class="container">
        <div id="activityCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#activityCarousel" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#activityCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#activityCarousel" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#activityCarousel" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#activityCarousel" data-bs-slide-to="4"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="activity d-flex justify-content-between align-items-center">
                <img src="./images/blogs/general.jpg" style={{ borderRadius: '10px' }} />
                <div class="activity-content">
                  <h4 class="activity-heading py-2">General</h4>
                  <ul>
                    <li class="activity-description">
                      Parades are regularly held to train the cadets in foot drill and command, weapon training, field
                      craft, civil defence, map reading etc.
                    </li>
                    <li class="activity-description">
                      Guard of Honour is given on 26th January and 15th August to commemorate the Republic Day and
                      Independence Day of India.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="activity d-flex justify-content-between align-items-center">
                <img src="./images/aboutus/camp.jpg" style={{ borderRadius: '10px' }} />
                <div class="activity-content">
                  <h4 class="activity-heading py-2">Camp</h4>
                  <ul>
                    <li class="activity-description">
                      An Annual Training Camp is held to further enhance and inculcate a feeling of independence in the
                      cadets.
                    </li>
                    <li class="activity-description">
                      Extensive knowledge about devices used in the Army like mines, bridges, nuclear and biological
                      weapons etc. is imparted.
                    </li>
                    <li class="activity-description">
                      Self-defence training is also given.
                    </li>
                    <li class="activity-description">
                      Rigorous physical training is provided in the camp with a view to increasing the physical
                      endurance of the cadets.
                    </li>
                    <li class="activity-description">
                      Military training with rifles is also provided.
                    </li>
                    <li class="activity-description">
                      Cultural programmes are also held with a view to improving the cultural and social outlook of the
                      cadets.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="activity d-flex justify-content-between align-items-center">
                <img src="./images/aboutus/social.JPG" style={{ borderRadius: '10px' }} />
                <div class="activity-content">
                  <h4 class="activity-heading py-2">Social</h4>
                  <ul>
                    <li class="activity-description">
                      Various social activities are also organized to encourage the feeling of
                      belonging
                      to the
                      society like awareness campaigns, nukkad-nataks and cycle rallies.
                    </li>
                    <li class="activity-description">
                      Under 'Swach Bharat Mission,' Swachta Pakhwada event, various activities like
                      clean
                      village
                      drives, cycle rallies, awareness campaigns are organized.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="activity d-flex justify-content-between align-items-center">
                <img src="./images/aboutus/cultural.jpg" style={{ borderRadius: '10px' }} />
                <div class="activity-content">
                  <h4 class="activity-heading py-2">Cultural</h4>
                  <ul>
                    <li class="activity-description">
                      Various Cultural activities like Debates, Nukkad Natak, Article Writing Competitions, Painting
                      competitions, Poster Making competitions are conducted among the cadets.
                    </li>
                    <li class="activity-description">
                      Cadets get the opportunity to participate and represent NCC IIT Roorkee in national level cultural
                      events like Ek Bharat Shrestha Bharat.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="activity d-flex justify-content-between align-items-center">
                <img src="./images/aboutus/activity.png" style={{ borderRadius: '10px' }} />
                <div class="activity-content">
                  <h4 class="activity-heading py-2">Sports &amp; Other Activities</h4>
                  <ul>
                    <li class="activity-description">
                      Drills, Marathons, Fitness sessions, Sports Day, etc. are organized.
                    </li>
                    <li class="activity-description">
                      Both Indoor &amp; Outdoor Sports events are conducted for the cadets.
                    </li>
                    <li class="activity-description">
                      Quizzes, Visits to BEG Roorkee, Webinars &amp; Seminars by Indian Army Officers, and many other
                      eminent personalities inspire &amp; inform the cadets about The Great Indian Armed Forces.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="arrow">
            <button class="carousel-control-prev" type="button" data-bs-target="#activityCarousel" data-bs-slide="prev">
              <i class="fa fa-chevron-left"></i>
            </button>
          </div>
          <div class="arrow">
            <button class="carousel-control-next" type="button" data-bs-target="#activityCarousel" data-bs-slide="next">
              <i class="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div >
    </div>
  );
}

export default Activity;