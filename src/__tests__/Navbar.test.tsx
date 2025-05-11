import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
  const renderWithRouter = (ui: React.ReactElement) => {
    return render(
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    );
  };

  it('renders the navbar with logo and links', () => {
    renderWithRouter(<Navbar />);
    
    // Check if logo is present
    expect(screen.getByText('Anita Ershadi')).toBeInTheDocument();
    
    // Check if navigation links are present
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Algorithms')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('toggles menu when button is clicked on mobile view', () => {
    renderWithRouter(<Navbar />);
    
    const menuButton = screen.getByLabelText('Toggle navigation menu');
    
    // Initially menu should not be active
    const navMenu = screen.getByRole('list').parentElement;
    expect(navMenu).not.toHaveClass('active');
    
    // Click the menu button
    fireEvent.click(menuButton);
    
    // Menu should now be active
    expect(navMenu).toHaveClass('active');
    
    // Click again to close
    fireEvent.click(menuButton);
    
    // Menu should not be active again
    expect(navMenu).not.toHaveClass('active');
  });

  it('closes menu when a link is clicked', () => {
    renderWithRouter(<Navbar />);
    
    const menuButton = screen.getByLabelText('Toggle navigation menu');
    
    // Open the menu
    fireEvent.click(menuButton);
    
    const navMenu = screen.getByRole('list').parentElement;
    expect(navMenu).toHaveClass('active');
    
    // Click a link
    fireEvent.click(screen.getByText('About'));
    
    // Menu should close
    expect(navMenu).not.toHaveClass('active');
  });

  it('has proper accessibility attributes', () => {
    renderWithRouter(<Navbar />);
    
    // Check for proper ARIA attributes
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Main navigation');
    
    const menuButton = screen.getByLabelText('Toggle navigation menu');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveAttribute('aria-controls', 'navbar-menu');
    
    // When menu is opened, aria-expanded should be true
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  });
});
