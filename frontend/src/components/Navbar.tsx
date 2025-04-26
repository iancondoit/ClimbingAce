import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className={`font-heading text-xl md:text-2xl font-bold transition-colors ${
            isScrolled || location.pathname !== '/' ? 'text-primary' : 'text-white'
          }`}>
            Climbing Ace
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" label="Home" isScrolled={isScrolled} />
          <NavLink to="/routes" label="Routes" isScrolled={isScrolled} />
          <NavLink to="/favorites" label="Favorites" isScrolled={isScrolled} />
          <NavLink to="/profile" label="Profile" isScrolled={isScrolled} />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <svg 
            className={`w-6 h-6 ${
              isScrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'
            }`} 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" label="Home" />
            <MobileNavLink to="/routes" label="Routes" />
            <MobileNavLink to="/favorites" label="Favorites" />
            <MobileNavLink to="/profile" label="Profile" />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

// NavLink Component for desktop
interface NavLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isScrolled }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const isHome = location.pathname === '/';

  return (
    <Link 
      to={to} 
      className={`relative font-medium transition-colors ${
        isActive 
          ? 'text-primary' 
          : isScrolled || !isHome
            ? 'text-gray-800 hover:text-primary'
            : 'text-white hover:text-gray-200'
      }`}
    >
      {label}
      {isActive && (
        <motion.div 
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  );
};

// Mobile NavLink Component
const MobileNavLink: React.FC<{to: string; label: string}> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`block py-2 px-4 rounded-md ${
        isActive 
          ? 'bg-primary-light/20 text-primary font-medium' 
          : 'text-gray-800 hover:bg-gray-100'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar; 