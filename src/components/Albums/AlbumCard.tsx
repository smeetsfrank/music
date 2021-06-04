import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import classes from './AlbumCard.module.scss';

type Props = {
  image: string;
  album: string;
  artists: any;
  externalUrl?: string;
};

// eslint-disable-next-line object-curly-newline
const AlbumCard: React.FC<Props> = ({ image, album, artists, externalUrl }) => (
  <div className={classes.card}>
    <div className={classes.image}>
      <img src={image} alt="album-cover" />
    </div>
    <div className={classes.info}>
      <span className={classes.title}>{album}</span>
      <span className={classes.artists}>
        {artists.map((artist: any) => artist.name)}
      </span>
      <a
        className={classes.link}
        href={externalUrl}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faHeadphones} color="white" />
      </a>
    </div>
  </div>
);

export default AlbumCard;
