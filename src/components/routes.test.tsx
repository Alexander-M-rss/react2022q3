import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import RoutesComponent from './routes';
import { render, screen } from '@testing-library/react';

describe('Router', () => {
  it('renders Main page on route "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <RoutesComponent />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: 'Main Page' })).toBeInTheDocument();
  });
  it('renders About Us page on route "/about"', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <RoutesComponent />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument();
  });
  it('renders 404 page on route "/404"', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <RoutesComponent />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: 'Not Found' })).toBeInTheDocument();
  });
  it('renders 404 page on route "/wrong-route"', () => {
    render(
      <MemoryRouter initialEntries={['/wrong-route']}>
        <RoutesComponent />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: 'Not Found' })).toBeInTheDocument();
  });
});
