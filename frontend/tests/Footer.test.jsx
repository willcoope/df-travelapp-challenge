import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';
import { test } from 'vitest';

test(`Footer contains the correct text`, () => {
  render(<Footer />);
  const expectedText = `©️ 2024 DFCorp`;
  expect(screen.getByText(expectedText)).toBeInTheDocument();
});