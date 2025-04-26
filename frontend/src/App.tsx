import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Import pages (to be created)
import Home from './pages/Home';
import RouteList from './pages/RouteList';
import RouteDetail from './pages/RouteDetail';
import Weather from './pages/Weather';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

// Separate component to use useLocation hook
function AppContent() {
  const location = useLocation();
  
  return (
    <div className="App">
      <Navbar />
      <AnimatePresence mode="wait">
        <main className="content" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/routes" element={<RouteList />} />
            <Route path="/routes/:id" element={<RouteDetail />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App; 