import React from 'react';
import Card from '../components/UI/Card';

type Props = {
  playlists: any;
};

const Playlist: React.FC<Props> = ({ playlists }) => {
  console.log(playlists);
  return (
    <>
      {playlists.map((playlist: any) => (
        <Card
          key={playlist.id}
          name={playlist.name}
          url={playlist.images[0]?.url}
          externalUrl={playlist.external_urls?.spotify}
        />
      ))}
    </>
  );
};

export default Playlist;
