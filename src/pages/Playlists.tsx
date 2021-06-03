import React from 'react';
import PlaylistCard from '../components/Playlists/PlaylistCard';

type Props = {
  playlists: any;
};

const Playlist: React.FC<Props> = ({ playlists }) => {
  console.log(playlists);
  return (
    <>
      <h2>Playlists</h2>
      {playlists.map((playlist: any) => (
        <PlaylistCard
          key={playlist.id}
          playlist={playlist.name}
          image={playlist.images[0]?.url}
        />
      ))}
    </>
  );
};

export default Playlist;
