import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home component', () => {
  test('renders main heading', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    const headingElement = screen.getByText(/Find Your Next Climbing Adventure/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders search input', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    const searchInput = screen.getByPlaceholderText(/Search for climbing sites or routes/i);
    expect(searchInput).toBeInTheDocument();
  });

  test('renders featured climbs section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    const featuredSection = screen.getByText(/Featured Climbs/i);
    expect(featuredSection).toBeInTheDocument();
  });
}); 