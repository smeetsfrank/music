import React from 'react';
import ArtistCard from '../components/Artists/ArtistCard';

type Props = {
  artists: any;
};

const Artist: React.FC<Props> = ({ artists }) => {
  console.log(artists);
  return (
    <>
      <h2>Artists</h2>
      {artists.map((artist: any) => (
        <ArtistCard
          key={artist.id}
          artist={artist.name}
          image={artist.images[0]?.url}
        />
      ))}
    </>
  );
};

export default Artist;
