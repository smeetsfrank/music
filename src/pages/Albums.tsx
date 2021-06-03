import React from 'react';

type Props = {
  albums: any;
};

const Albums: React.FC<Props> = ({ albums }) => (
  <>
    <h2>Albums</h2>
    {albums.map((album: any) => (
      <>
        <img
          src={album.images[1].url}
          height={album.images[1].height}
          width={album.images[1].width}
          alt="album-cover"
        />
      </>
    ))}
  </>
);

export default Albums;
