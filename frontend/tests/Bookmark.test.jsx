import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Bookmark from '../src/components/Bookmark';

test('renders the bookmark', () => {
    render(<Bookmark name="london" />);
    const bookmark = screen.getByRole('button');
    expect(bookmark).toBeInTheDocument();
});

test('renders the bookmark with default prop', () => {
    render(<Bookmark />);
    const bookmark = screen.getByRole('button');
    expect(bookmark).toBeInTheDocument();
});

test('renders the bookmark with the name in title case', () => {
    render(<Bookmark name="london" />);
    const title = screen.getByText(/London/i);
    expect(title).toBeInTheDocument();
});

test('saves the location to local storage in lowercase', () => {
    render(<Bookmark name="london" />);
    // const button = screen.getByText(/Bookmark/i);
    const button = screen.getByRole('button');
    button.click();
    const bookmarks = JSON.parse(localStorage.getItem('favouriteLocations'));
    expect(bookmarks).toContain('london');
});

test('does not save the location to local storage if it already exists', () => {
    localStorage.setItem('favouriteLocations', JSON.stringify(['london']));
    render(<Bookmark name="london" />);
    // const button = screen.getByText(/Bookmark/i);
    const button = screen.getByRole('button');
    button.click();
    const bookmarks = JSON.parse(localStorage.getItem('favouriteLocations'));
    expect(bookmarks).toHaveLength(1);
});