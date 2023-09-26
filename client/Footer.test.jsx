// Tests for the footer content
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './src/components/Footer';

describe('Footer Component', () => {
  it('renders a link', () => {
    // Render the Footer component
    render(<Footer />);

    // Find the link element by its role
    const linkElement = screen.getByRole('link');

    // Assertions
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://chadhindsight.github.io');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noreferrer');
    expect(linkElement.textContent).toBe('Chad Hinds');
  });
});
