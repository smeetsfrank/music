import React from 'react';

import Card from '../components/UI/Card';

type Props = {
  albums: any;
};

const Albums: React.FC<Props> = ({ albums }) => (
  <>
    {albums.map((album: any) => (
      <Card
        key={album.id}
        artists={album.artists}
        name={album.name}
        url={album.images[0]?.url}
        externalUrl={album.external_urls?.spotify}
      />
    ))}
  </>
);

export default Albums;
