/* eslint-disable operator-linebreak */
import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation';

import { RootState } from '../../store/store';

import AlbumCard from '../Albums/AlbumCard';
import ArtistCard from '../Artists/ArtistCard';

const Dashboard: React.FC = () => {
  const appState = useSelector((state: RootState) => state);
  return (
    <>
      <h2>Dashboard</h2>
      <Navigation />
      {appState.album.albums &&
        appState.album.albums.map((album: any) => (
          <AlbumCard
            key={album.id}
            artists={album.artists}
            album={album.name}
            image={album.images[0]?.url}
          />
        ))}
      {appState.artist.artists &&
        appState.artist.artists.map((artist: any) => (
          <ArtistCard
            key={artist.id}
            artist={artist.name}
            image={artist.images[0]?.url}
          />
        ))}
    </>
  );
};

export default Dashboard;
