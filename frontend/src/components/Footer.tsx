import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4">Climbing Ace</h3>
            <p className="text-gray-300">Your ultimate climbing companion app.</p>
          </div>
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/routes" className="text-gray-300 hover:text-white transition-colors">Routes</Link></li>
              <li><Link to="/favorites" className="text-gray-300 hover:text-white transition-colors">Favorites</Link></li>
              <li><Link to="/profile" className="text-gray-300 hover:text-white transition-colors">Profile</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Email: info@climbingace.com</p>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <div className="flex justify-center space-x-4 mb-4">
            <Link to="/about" className="hover:text-white transition-colors">About Climbing Ace</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Climbing Ace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 