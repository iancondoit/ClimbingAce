import React, { useState } from 'react';
import './Weather.css';

const Weather: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('yosemite');

  // Mock data for different climbing locations
  const locations = {
    yosemite: {
      name: 'Yosemite National Park, CA',
      current: {
        temp: 75,
        condition: 'Sunny',
        humidity: 45,
        wind: '5 mph W',
        precipitation: '0%'
      },
      forecast: [
        { day: 'Today', high: 75, low: 55, condition: 'Sunny', precipitation: '0%' },
        { day: 'Tomorrow', high: 72, low: 54, condition: 'Partly Cloudy', precipitation: '10%' },
        { day: 'Wednesday', high: 78, low: 56, condition: 'Clear', precipitation: '0%' },
        { day: 'Thursday', high: 76, low: 57, condition: 'Sunny', precipitation: '0%' },
        { day: 'Friday', high: 70, low: 52, condition: 'Cloudy', precipitation: '30%' }
      ],
      climbing: 'Excellent conditions for climbing. Dry rock with mild temperatures.'
    },
    joshuaTree: {
      name: 'Joshua Tree National Park, CA',
      current: {
        temp: 85,
        condition: 'Sunny',
        humidity: 20,
        wind: '8 mph NE',
        precipitation: '0%'
      },
      forecast: [
        { day: 'Today', high: 85, low: 65, condition: 'Sunny', precipitation: '0%' },
        { day: 'Tomorrow', high: 87, low: 67, condition: 'Clear', precipitation: '0%' },
        { day: 'Wednesday', high: 90, low: 68, condition: 'Sunny', precipitation: '0%' },
        { day: 'Thursday', high: 88, low: 66, condition: 'Clear', precipitation: '0%' },
        { day: 'Friday', high: 86, low: 65, condition: 'Sunny', precipitation: '0%' }
      ],
      climbing: 'Very hot during midday. Early morning and evening climbing recommended.'
    },
    redRiver: {
      name: 'Red River Gorge, KY',
      current: {
        temp: 68,
        condition: 'Partly Cloudy',
        humidity: 65,
        wind: '4 mph SE',
        precipitation: '15%'
      },
      forecast: [
        { day: 'Today', high: 68, low: 50, condition: 'Partly Cloudy', precipitation: '15%' },
        { day: 'Tomorrow', high: 65, low: 48, condition: 'Showers', precipitation: '60%' },
        { day: 'Wednesday', high: 62, low: 47, condition: 'Partly Cloudy', precipitation: '25%' },
        { day: 'Thursday', high: 70, low: 52, condition: 'Sunny', precipitation: '0%' },
        { day: 'Friday', high: 72, low: 54, condition: 'Clear', precipitation: '0%' }
      ],
      climbing: 'Potential rain tomorrow. Thursday and Friday will have ideal conditions.'
    }
  };

  // @ts-ignore
  const selectedData = locations[selectedLocation];

  return (
    <div className="weather-page">
      <h1>Weather & Climbing Conditions</h1>
      
      <div className="location-selector">
        <label>Select Climbing Location:</label>
        <select 
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="yosemite">Yosemite National Park, CA</option>
          <option value="joshuaTree">Joshua Tree National Park, CA</option>
          <option value="redRiver">Red River Gorge, KY</option>
        </select>
      </div>

      <div className="weather-container">
        <div className="current-weather-card">
          <h2>Current Conditions</h2>
          <h3>{selectedData.name}</h3>
          <div className="current-conditions">
            <div className="temperature">{selectedData.current.temp}°F</div>
            <div className="condition">{selectedData.current.condition}</div>
            <div className="details">
              <p><strong>Humidity:</strong> {selectedData.current.humidity}%</p>
              <p><strong>Wind:</strong> {selectedData.current.wind}</p>
              <p><strong>Precipitation:</strong> {selectedData.current.precipitation}</p>
            </div>
          </div>
        </div>

        <div className="forecast-card">
          <h2>5-Day Forecast</h2>
          <div className="forecast-grid">
            {selectedData.forecast.map((day, index) => (
              <div key={index} className="forecast-day">
                <h3>{day.day}</h3>
                <p className="condition">{day.condition}</p>
                <p className="temperature">
                  <span className="high">{day.high}°F</span>
                  <span className="low">{day.low}°F</span>
                </p>
                <p className="precipitation">Precip: {day.precipitation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="climbing-conditions-card">
          <h2>Climbing Conditions</h2>
          <p>{selectedData.climbing}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather; 