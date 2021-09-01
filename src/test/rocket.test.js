import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { ReserveBadge, ReserveButton } from '../components/Rocket';

describe('Badge displays correctly based on boolean', () => {
  test('Badge displays Reserved when boolean is true', () => {
    render(<ReserveBadge reserved />);
    expect(screen.getByRole('textbox', { class: /Rocket-Reserve/i })).toHaveTextContent('Reserved');
  });
});

describe('Correct button is displayed based on boolean', () => {
  test('Button displays Cancel Reservation when boolean is true', () => {
    render(<ReserveButton reserved />);
    expect(screen.getByRole('textbox', { class: /Rocket-Button-Cancel/i })).toHaveTextContent('Cancel Reservations');
  });

  test('Button displays Reserve Rocket when boolean is false', () => {
    render(<ReserveButton reserved={false} />);
    expect(screen.getByRole('textbox', { class: /Rocket-Button/i })).toHaveTextContent('Reserve Rocket');
  });
});
