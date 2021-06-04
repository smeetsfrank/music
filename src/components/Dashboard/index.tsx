/* eslint-disable operator-linebreak */
import React from 'react';
import { useSelector } from 'react-redux';
import classes from './index.module.scss';
import Navigation from '../Navigation';

import { RootState } from '../../store/store';

import AlbumCard from '../Albums/AlbumCard';
import ArtistCard from '../Artists/ArtistCard';
import PlaylistCard from '../Playlists/PlaylistCard';

const Dashboard: React.FC = () => {
  const appState = useSelector((state: RootState) => state);
  return (
    <>
      {(appState.album.albums.length ||
        appState.artist.artists.length ||
        appState.playlist.playlists.length) !== 0 && <Navigation />}
      <div className={classes.wrapper}>
        {appState.album.albums &&
          appState.album.albums.map((album: any) => (
            <AlbumCard
              key={album.id}
              artists={album.artists}
              album={album.name}
              image={album.images[0]?.url}
              externalUrl={album.external_urls?.spotify}
            />
          ))}
        {/* {appState.artist.artists &&
          appState.artist.artists.map((artist: any) => (
            <ArtistCard
              key={artist.id}
              artist={artist.name}
              image={artist.images[0]?.url}
            />
          ))}
        {appState.playlist.playlists &&
          appState.playlist.playlists.map((playlist: any) => (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist.name}
              image={playlist.images[0]?.url}
            />
          ))} */}
      </div>
    </>
  );
};

export default Dashboard;
