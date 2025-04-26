import React from 'react';
import './Footer.css';

// Import app version from package.json
const APP_VERSION = '1.0.0';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Climbing Ace</h3>
          <p>Your ultimate climbing companion app.</p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/routes">Routes</a></li>
            <li><a href="/weather">Weather</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@climbingace.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Climbing Ace. All rights reserved. <span className="version">v{APP_VERSION}</span></p>
      </div>
    </footer>
  );
};

export default Footer; 