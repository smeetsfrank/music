import React from 'react';
import Card from '../components/UI/Card';

type Props = {
  artists: any;
};

const Artist: React.FC<Props> = ({ artists }) => (
  <>
    {artists.map((artist: any) => (
      <Card
        key={artist.id}
        name={artist.name}
        url={artist.images[0]?.url}
        externalUrl={artist.external_urls?.spotify}
      />
    ))}
  </>
);

export default Artist;
