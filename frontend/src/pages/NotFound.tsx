import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you are looking for seems to have gone climbing without us.</p>
        <Link to="/" className="home-button">Return to Home</Link>
      </div>
    </div>
  );
};

export default NotFound; 