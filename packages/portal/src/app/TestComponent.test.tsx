import React from 'react';
import TestComponent from './TestComponent';

import { render, screen } from '@testing-library/react';

describe('Spec component', () => {
  test('renders the component with the provided name', () => {
    render(<TestComponent size="large" label="Test Button" />);
    const helloText = screen.getByText('Test Button');
    expect(helloText).toBeInTheDocument();
  });
});
