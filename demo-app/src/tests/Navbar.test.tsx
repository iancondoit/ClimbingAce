import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  test('renders the app name', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    
    const appName = screen.getByText(/Climbing Ace/i);
    expect(appName).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    
    const homeLink = screen.getByText(/Home/i);
    const routesLink = screen.getByText(/Routes/i);
    const weatherLink = screen.getByText(/Weather/i);
    const profileLink = screen.getByText(/Profile/i);
    
    expect(homeLink).toBeInTheDocument();
    expect(routesLink).toBeInTheDocument();
    expect(weatherLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
  });
}); 