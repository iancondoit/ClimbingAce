import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  // Mock data for featured climbs
  const featuredClimbs = [
    { id: 1, name: 'El Capitan', location: 'Yosemite, CA', difficulty: '5.13a', type: 'Trad' },
    { id: 2, name: 'Half Dome', location: 'Yosemite, CA', difficulty: '5.12a', type: 'Trad' },
    { id: 3, name: 'The Nose', location: 'Yosemite, CA', difficulty: '5.14a', type: 'Trad' },
    { id: 4, name: 'Midnight Lightning', location: 'Yosemite, CA', difficulty: 'V8', type: 'Boulder' }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Next Climbing Adventure</h1>
          <p>Discover the best climbing routes with real-time weather and traffic insights</p>
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search for climbing sites or routes..." 
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      </section>

      <section className="featured-climbs">
        <h2>Featured Climbs</h2>
        <div className="climbs-grid">
          {featuredClimbs.map(climb => (
            <div key={climb.id} className="climb-card">
              <div className="climb-image-placeholder"></div>
              <div className="climb-info">
                <h3>{climb.name}</h3>
                <p className="climb-location">{climb.location}</p>
                <p className="climb-details">
                  <span className="difficulty">{climb.difficulty}</span>
                  <span className="type">{climb.type}</span>
                </p>
                <Link to={`/routes/${climb.id}`} className="view-button">View Details</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <Link to="/routes" className="view-all-button">View All Routes</Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Climbing Ace?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌤️</div>
            <h3>Real-time Weather Data</h3>
            <p>Get up-to-date weather conditions for your favorite climbing destinations.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚗</div>
            <h3>Traffic Insights</h3>
            <p>Plan your trip with accurate traffic information to avoid delays.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Access</h3>
            <p>Access route details offline with our mobile app.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 