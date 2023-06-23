import React from 'react';
import {Input} from './Input';

import { render, screen } from '@testing-library/react';

describe('Spec component', () => {
  test('renders the component with the provided name', () => {
    render(<Input />);
    // const helloText = screen.getByText('Test Button');
    // expect(helloText).toBeInTheDocument();
  });
});
