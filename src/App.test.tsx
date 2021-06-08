import React from 'react';
import { render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux';

import App from './App';

jest.mock('react-router-dom', () => ({
  Redirect: jest.fn(({ to }) => `Redirected to ${to}`),
}));

describe('App component', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  const initialState = {
    user: {},
    search: { filter: ['album', 'artist', 'playlist'] },
    album: { albums: [] },
    artist: { artists: [] },
    playlist: { playlists: [] },
  };

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  test('teaser image to exsist', () => {
    useSelectorMock.mockReturnValue(initialState);
    render(<App />);
    const image = screen.getByRole('img', { name: /unsplash/i });
    expect(image).toBeInTheDocument();
  });

  test('app title to exsist', () => {
    useSelectorMock.mockReturnValue(initialState);
    render(<App />);
    const heading = screen.getByRole('heading', { name: /music app/i });
    expect(heading).toBeInTheDocument();
  });

  test('login button to exsist', () => {
    useSelectorMock.mockReturnValue(initialState);
    render(<App />);
    const button = screen.getByRole('button', { name: /login/i });
    expect(button).toBeInTheDocument();
  });
});
