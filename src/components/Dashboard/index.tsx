/* eslint-disable operator-linebreak */
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import classes from './index.module.scss';
import Navigation from '../Navigation';

import { RootState } from '../../store/store';

import Card from '../UI/Card';

const Dashboard: React.FC = () => {
  const appState = useSelector((state: RootState) => state);
  let renderedAlbums;
  let renderedArtists;
  let renderedPlaylists;
  if (
    appState.search.filter.includes('album') &&
    appState.search.filter.includes('artist') &&
    appState.search.filter.includes('playlist')
  ) {
    if (appState.album.albums) {
      renderedAlbums = appState.album.albums.map((album: any) => (
        <Card
          key={album.id}
          artists={album.artists}
          name={album.name}
          url={album.images[0]?.url}
          externalUrl={album.external_urls?.spotify}
        />
      ));
    }
    if (appState.artist.artists) {
      renderedArtists = appState.artist.artists.map((artist: any) => (
        <Card
          key={artist.id}
          name={artist.name}
          url={artist.images[0]?.url}
          externalUrl={artist.external_urls?.spotify}
        />
      ));
    }
    if (appState.playlist.playlists) {
      renderedPlaylists = appState.playlist.playlists.map((playlist: any) => (
        <Card
          key={playlist.id}
          name={playlist.name}
          url={playlist.images[0]?.url}
          externalUrl={playlist.external_urls?.spotify}
        />
      ));
    }
  }
  return (
    <>
      <div className={classes.wrapper}>
        <Router>
          <Navigation />
        </Router>
        {renderedAlbums && renderedAlbums}
        {renderedArtists && renderedArtists}
        {renderedPlaylists && renderedPlaylists}
      </div>
    </>
  );
};

export default Dashboard;
