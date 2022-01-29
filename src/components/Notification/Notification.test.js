import React from 'react';
import Notification from './';
import { render, screen } from '@testing-library/react';

describe('test notification component', () => {
  it('return message from prop', () => {
    render(<Notification message="title" />);
    screen.debug();
    expect(screen.getByText('title')).toBeInTheDocument;
    screen.debug();
  });
});
