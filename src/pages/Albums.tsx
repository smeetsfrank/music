import React from 'react';
import AlbumCard from '../components/Albums/AlbumCard';

type Props = {
  albums: any;
};

const Albums: React.FC<Props> = ({ albums }) => (
  <>
    <h2>Albums</h2>
    {albums.map((album: any) => (
      <AlbumCard
        key={album.id}
        artists={album.artists}
        album={album.name}
        image={album.images[0]?.url}
      />
    ))}
  </>
);

export default Albums;
