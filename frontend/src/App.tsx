import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages (to be created)
import Home from './pages/Home';
import RouteList from './pages/RouteList';
import RouteDetail from './pages/RouteDetail';
import Weather from './pages/Weather';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/routes" element={<RouteList />} />
            <Route path="/routes/:id" element={<RouteDetail />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 