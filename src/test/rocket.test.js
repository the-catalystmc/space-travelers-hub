import React from 'react';
import {
    render, fireEvent, screen,
  } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ReserveBadge, ReserveButton } from '../components/Rocket';

describe('Badge displays correctly based on boolean', () => {
    test('Badge displays Reserved when boolean is true', () => {
      render(<ReserveBadge reserved={true} />);
      expect(screen.getByRole('textbox', { class: /Rocket-Reserve/i })).toHaveTextContent('Reserved');
    })

    test('Badge is hidden when boolean is false', () => {
        render(<ReserveBadge reserved={false} />);
        expect(screen.getByRole('textbox', { class: /Rocket-Cancel/i })).toHaveTextContent('');
    })
});

describe('Correct button is displayed based on boolean', () => {
    test('Button displays Cancel Reservation when boolean is true', () => {
      render(<ReserveButton reserved={true} />);
      expect(screen.getByRole('textbox', { class: /Rocket-Button-Cancel/i })).toHaveTextContent('Cancel Reservations');
    })

    test('Button displays Reserve Rocket when boolean is false', () => {
        render(<ReserveButton reserved={false} />);
        expect(screen.getByRole('textbox', { class: /Rocket-Button/i })).toHaveTextContent('Reserve Rocket');
    })
});