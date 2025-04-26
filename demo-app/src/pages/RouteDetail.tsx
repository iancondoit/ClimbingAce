import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './RouteDetail.css';

const RouteDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock data - in a real app, this would be fetched from the API
  const route = {
    id: Number(id),
    name: 'El Capitan',
    location: 'Yosemite, CA',
    difficulty: '5.13a',
    type: 'Trad',
    description: 'El Capitan is a vertical rock formation in Yosemite National Park, located on the north side of Yosemite Valley. The granite monolith is about 3,000 feet (914 m) from base to summit along its tallest face and is a popular objective for rock climbers.',
    length: '3,000 ft',
    firstAscent: 'Warren Harding, Wayne Merry, and George Whitmore (1958)',
    approach: 'The approach to El Capitan is relatively straightforward. From El Capitan Meadow, follow the trail to the base of the wall. It takes approximately 30-45 minutes.',
    weather: {
      current: 'Sunny, 75°F',
      forecast: [
        { day: 'Today', condition: 'Sunny', high: '75°F', low: '55°F' },
        { day: 'Tomorrow', condition: 'Partly Cloudy', high: '72°F', low: '54°F' },
        { day: 'Wednesday', condition: 'Clear', high: '78°F', low: '56°F' }
      ]
    },
    traffic: 'Moderate traffic expected. Best to climb on weekdays.'
  };

  return (
    <div className="route-detail">
      <div className="route-header">
        <div className="header-content">
          <Link to="/routes" className="back-button">← Back to Routes</Link>
          <h1>{route.name}</h1>
          <div className="route-meta">
            <span className="location">{route.location}</span>
            <span className="badge difficulty">{route.difficulty}</span>
            <span className="badge type">{route.type}</span>
          </div>
        </div>
      </div>

      <div className="route-body">
        <div className="route-info-card">
          <h2>Route Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <h3>Length</h3>
              <p>{route.length}</p>
            </div>
            <div className="info-item">
              <h3>First Ascent</h3>
              <p>{route.firstAscent}</p>
            </div>
            <div className="info-item">
              <h3>Type</h3>
              <p>{route.type}</p>
            </div>
            <div className="info-item">
              <h3>Difficulty</h3>
              <p>{route.difficulty}</p>
            </div>
          </div>

          <h3>Description</h3>
          <p>{route.description}</p>

          <h3>Approach</h3>
          <p>{route.approach}</p>
        </div>

        <div className="route-conditions">
          <div className="weather-card">
            <h2>Weather Conditions</h2>
            <div className="current-weather">
              <p className="current">{route.weather.current}</p>
            </div>
            <div className="forecast">
              {route.weather.forecast.map((day, index) => (
                <div key={index} className="forecast-day">
                  <h4>{day.day}</h4>
                  <p>{day.condition}</p>
                  <p>High: {day.high}</p>
                  <p>Low: {day.low}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="traffic-card">
            <h2>Traffic Insights</h2>
            <p>{route.traffic}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteDetail; 