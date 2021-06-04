/* eslint-disable operator-linebreak */
import React from 'react';
import { useSelector } from 'react-redux';
import classes from './index.module.scss';
import Navigation from '../Navigation';

import { RootState } from '../../store/store';

import Card from '../UI/Card';

const Dashboard: React.FC = () => {
  const appState = useSelector((state: RootState) => state);
  return (
    <>
      <div className={classes.wrapper}>
        {(appState.album.albums.length ||
          appState.artist.artists.length ||
          appState.playlist.playlists.length) !== 0 && <Navigation />}

        {appState.search.filter.includes('album') &&
          appState.album.albums &&
          appState.album.albums.map((album: any) => (
            <Card
              key={album.id}
              artists={album.artists}
              name={album.name}
              url={album.images[0]?.url}
              externalUrl={album.external_urls?.spotify}
            />
          ))}
        {appState.search.filter.includes('artist') &&
          appState.artist.artists &&
          appState.artist.artists.map((artist: any) => (
            <Card
              key={artist.id}
              name={artist.name}
              url={artist.images[0]?.url}
              externalUrl={artist.external_urls?.spotify}
            />
          ))}
        {appState.search.filter.includes('playlist') &&
          appState.playlist.playlists &&
          appState.playlist.playlists.map((playlist: any) => (
            <Card
              key={playlist.id}
              name={playlist.name}
              url={playlist.images[0]?.url}
              externalUrl={playlist.external_urls?.spotify}
            />
          ))}
      </div>
    </>
  );
};

export default Dashboard;
