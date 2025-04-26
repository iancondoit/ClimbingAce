import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile: React.FC = () => {
  // Mock user data
  const [user] = useState({
    name: 'Alex Honnold',
    email: 'alex@climbingace.com',
    location: 'Las Vegas, NV',
    bio: 'Professional rock climber known for free-soloing El Capitan in Yosemite National Park.',
    climbingLevel: 'Advanced',
    preferredTypes: ['Trad', 'Free Solo', 'Sport']
  });

  // Mock favorite routes
  const [favoriteRoutes] = useState([
    { id: 1, name: 'El Capitan - Free Rider', location: 'Yosemite, CA', difficulty: '5.13a' },
    { id: 3, name: 'The Nose', location: 'Yosemite, CA', difficulty: '5.14a' },
    { id: 5, name: 'Moonlight Buttress', location: 'Zion, UT', difficulty: '5.12+' }
  ]);

  // Mock trip plans
  const [tripPlans] = useState([
    { 
      id: 1, 
      name: 'Yosemite Fall Trip', 
      startDate: '2023-10-15', 
      endDate: '2023-10-22',
      routes: ['El Capitan', 'Half Dome']
    },
    { 
      id: 2, 
      name: 'Red River Gorge Weekend', 
      startDate: '2023-11-03', 
      endDate: '2023-11-05',
      routes: ['Military Wall', 'Bruise Brothers']
    }
  ]);

  // Mock state for active tab
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">
          {/* This would be an avatar image in a real app */}
          <div className="avatar-placeholder">AH</div>
        </div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p className="location">{user.location}</p>
          <p className="climbing-level">{user.climbingLevel} Climber</p>
          <div className="climbing-types">
            {user.preferredTypes.map((type, index) => (
              <span key={index} className="type-badge">{type}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <button 
          className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button 
          className={`tab-button ${activeTab === 'favorites' ? 'active' : ''}`}
          onClick={() => setActiveTab('favorites')}
        >
          Favorite Routes
        </button>
        <button 
          className={`tab-button ${activeTab === 'trips' ? 'active' : ''}`}
          onClick={() => setActiveTab('trips')}
        >
          Trip Plans
        </button>
      </div>

      <div className="profile-content">
        {activeTab === 'profile' && (
          <div className="profile-details">
            <div className="info-section">
              <h2>About Me</h2>
              <p>{user.bio}</p>
            </div>
            
            <div className="info-section">
              <h2>Contact Information</h2>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Location:</strong> {user.location}</p>
            </div>

            <div className="info-section">
              <h2>Account Settings</h2>
              <button className="edit-button">Edit Profile</button>
              <button className="change-password-button">Change Password</button>
            </div>
          </div>
        )}

        {activeTab === 'favorites' && (
          <div className="favorites-list">
            <h2>My Favorite Routes</h2>
            {favoriteRoutes.length > 0 ? (
              <div className="routes-grid">
                {favoriteRoutes.map(route => (
                  <div key={route.id} className="route-card">
                    <div className="route-image-placeholder"></div>
                    <div className="route-info">
                      <h3>{route.name}</h3>
                      <p>{route.location}</p>
                      <p><strong>Difficulty:</strong> {route.difficulty}</p>
                      <Link to={`/routes/${route.id}`} className="view-button">View Details</Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-data-message">You haven't added any favorite routes yet.</p>
            )}
          </div>
        )}

        {activeTab === 'trips' && (
          <div className="trips-list">
            <h2>My Trip Plans</h2>
            <button className="add-trip-button">+ New Trip Plan</button>
            
            {tripPlans.length > 0 ? (
              <div className="trips-grid">
                {tripPlans.map(trip => (
                  <div key={trip.id} className="trip-card">
                    <div className="trip-header">
                      <h3>{trip.name}</h3>
                      <div className="trip-dates">
                        <span>{new Date(trip.startDate).toLocaleDateString()}</span>
                        <span> - </span>
                        <span>{new Date(trip.endDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="trip-routes">
                      <h4>Planned Routes:</h4>
                      <ul>
                        {trip.routes.map((route, index) => (
                          <li key={index}>{route}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="trip-actions">
                      <button className="edit-trip-button">Edit</button>
                      <button className="delete-trip-button">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-data-message">You haven't created any trip plans yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile; 