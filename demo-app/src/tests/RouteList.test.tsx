import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RouteList from '../pages/RouteList';

describe('RouteList component', () => {
  test('renders the heading', () => {
    render(
      <BrowserRouter>
        <RouteList />
      </BrowserRouter>
    );
    
    const headingElement = screen.getByText(/Climbing Routes/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders filter sections', () => {
    render(
      <BrowserRouter>
        <RouteList />
      </BrowserRouter>
    );
    
    const difficultyFilter = screen.getByText(/Difficulty/i);
    const typeFilter = screen.getByText(/Type/i);
    const locationFilter = screen.getByText(/Location/i);
    
    expect(difficultyFilter).toBeInTheDocument();
    expect(typeFilter).toBeInTheDocument();
    expect(locationFilter).toBeInTheDocument();
  });

  test('renders route cards', () => {
    render(
      <BrowserRouter>
        <RouteList />
      </BrowserRouter>
    );
    
    // Check for one of the mock routes
    const elCapitanRoute = screen.getByText(/El Capitan/i);
    expect(elCapitanRoute).toBeInTheDocument();
    
    // Check for view details buttons
    const viewButtons = screen.getAllByText(/View Details/i);
    expect(viewButtons.length).toBeGreaterThan(0);
  });
}); 