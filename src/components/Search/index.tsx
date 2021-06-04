import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AppDispatch, RootState } from '../../store/store';
import { albumAction } from '../../store/albumSlice';
import { artistAction } from '../../store/artistSlice';
import { playlistAction } from '../../store/playlistSlice';

import { fetchSpotifyData } from '../../api/spotify';

import classes from './index.module.scss';

const Search: React.FC = () => {
  const appState = useSelector((state: RootState) => state);
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();

  const searchHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current?.value) {
      alert('please enter a valid value');
      return;
    }
    const searchTerm = inputRef.current.value;
    const response = await fetchSpotifyData(appState.user.token!, searchTerm);
    const { albums, artists, playlists } = response;

    dispatch(albumAction.setAlbums(albums));
    dispatch(artistAction.setArtists(artists));
    dispatch(playlistAction.setPlaylists(playlists));
  };

  return (
    <form className={classes.search} onSubmit={searchHandler}>
      <input type="search" ref={inputRef} />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} color="white" />
      </button>
    </form>
  );
};
export default Search;
