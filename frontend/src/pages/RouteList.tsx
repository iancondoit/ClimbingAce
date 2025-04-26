import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RouteList.css';

const RouteList: React.FC = () => {
  // Mock data for routes
  const [routes] = useState([
    { id: 1, name: 'El Capitan', location: 'Yosemite, CA', difficulty: '5.13a', type: 'Trad' },
    { id: 2, name: 'Half Dome', location: 'Yosemite, CA', difficulty: '5.12a', type: 'Trad' },
    { id: 3, name: 'The Nose', location: 'Yosemite, CA', difficulty: '5.14a', type: 'Trad' },
    { id: 4, name: 'Midnight Lightning', location: 'Yosemite, CA', difficulty: 'V8', type: 'Boulder' },
    { id: 5, name: 'Moonlight Buttress', location: 'Zion, UT', difficulty: '5.12+', type: 'Trad' },
    { id: 6, name: 'The Naked Edge', location: 'Eldorado Canyon, CO', difficulty: '5.11b', type: 'Trad' }
  ]);

  const [filters] = useState({
    difficulty: '',
    type: '',
    location: ''
  });

  return (
    <div className="route-list-page">
      <h1>Climbing Routes</h1>

      <div className="filters">
        <div className="filter-group">
          <label>Difficulty</label>
          <select defaultValue={filters.difficulty}>
            <option value="">All</option>
            <option value="beginner">Beginner (5.0-5.8)</option>
            <option value="intermediate">Intermediate (5.9-5.11)</option>
            <option value="advanced">Advanced (5.12+)</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Type</label>
          <select defaultValue={filters.type}>
            <option value="">All</option>
            <option value="Sport">Sport</option>
            <option value="Trad">Trad</option>
            <option value="Boulder">Boulder</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Location</label>
          <select defaultValue={filters.location}>
            <option value="">All</option>
            <option value="Yosemite, CA">Yosemite, CA</option>
            <option value="Zion, UT">Zion, UT</option>
            <option value="Eldorado Canyon, CO">Eldorado Canyon, CO</option>
          </select>
        </div>
      </div>

      <div className="routes-grid">
        {routes.map(route => (
          <div key={route.id} className="route-card">
            <div className="route-image-placeholder"></div>
            <div className="route-info">
              <h3>{route.name}</h3>
              <p className="route-location">{route.location}</p>
              <p className="route-details">
                <span className="difficulty">{route.difficulty}</span>
                <span className="type">{route.type}</span>
              </p>
              <Link to={`/routes/${route.id}`} className="view-button">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteList; 