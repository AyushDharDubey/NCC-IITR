// ActivitySlideshow.js

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Import the CSS for styling
import './Activity.css'

const activities = [
  {
    id: 1,
    title: 'Activity 1',
    image: '/path/to/activity1.jpg', // Replace with your image URL
    description: 'Description of Activity 1...',
  },
  {
    id: 2,
    title: 'Activity 2',
    image: '/path/to/activity2.jpg', // Replace with your image URL
    description: 'Description of Activity 2...',
  },
  // Add more activities as needed
];

const ActivitySlideshow = () => {
  return (
    <div className="activity-slideshow">
      <Slide duration={3000} transitionDuration={500}>
        {activities.map((activity, index) => (
          <div key={activity.id} className="activity-card">
            <img src={activity.image} alt={activity.title} />
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
            {/* Show the next activity card if available */}
            {activities[index + 1] && (
              <div className="activity-card">
                <img src={activities[index + 1].image} alt={activities[index + 1].title} />
                <h3>{activities[index + 1].title}</h3>
                <p>{activities[index + 1].description}</p>
              </div>
            )}
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ActivitySlideshow;
