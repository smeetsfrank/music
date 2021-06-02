import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { albumAction } from '../../store/albumSlice';

import { fetchSpotifyData } from '../../utils/functions';

const Search: React.FC = () => {
  const searchCtx = useSelector((state: RootState) => state.search);
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();

  const searchHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current?.value) {
      alert('please enter a valid value');
      return;
    }
    const searchTerm = inputRef.current.value;
    const response = await fetchSpotifyData(
      localStorage.getItem('access_token')!,
      searchTerm,
      searchCtx.filter,
    );
    const { albums, artists, playlists } = response;

    dispatch(albumAction.setAlbums(albums));
  };

  return (
    <>
      <form onSubmit={searchHandler}>
        <input type="search" ref={inputRef} />
        <button type="submit">Search</button>
      </form>
      <h2>Results</h2>
    </>
  );
};
export default Search;
