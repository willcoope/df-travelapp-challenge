import {  afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

window.URL.createObjectURL = function() {};

afterEach(() => {
  cleanup();
});