import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import classes from './Card.module.scss';

type Props = {
  name: string;
  artists?: any;
  image?: string;
  externalUrl?: string;
};

// eslint-disable-next-line object-curly-newline
const Card: React.FC<Props> = ({ image, name, artists, externalUrl }) => (
  <div className={classes.card}>
    <div className={classes.image}>
      <img src={image} alt="cover" />
    </div>
    <div className={classes.info}>
      <span className={classes.title}>{name}</span>
      {artists && (
        <span className={classes.artists}>
          {artists.map((artist: any) => artist.name)}
        </span>
      )}
      {externalUrl && (
        <a
          className={classes.link}
          href={externalUrl}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faHeadphones} color="white" />
        </a>
      )}
    </div>
  </div>
);

export default Card;
