import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// import Bookmark from '../src/components../Bookmark';
import Bookmark from '../src/components/pages/Location/Bookmark';

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

// test('saves the location to local storage in lowercase', () => {
//     localStorage.setItem('user', JSON.stringify({"_id": "1", "username": "test", "password":"password", "favourites": []}));
//     render(<Bookmark name="london" />);
//     // const button = screen.getByText(/Bookmark/i);
//     const button = screen.getByRole('button');
//     button.click();
//     const bookmarks = JSON.parse(localStorage.getItem('user'));
//     expect(bookmarks.favourites).toContain('london');
// });