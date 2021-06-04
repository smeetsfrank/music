import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import classes from './Card.module.scss';
import fallbackImage from '../../assets/images/emily-morter-unsplash.jpg';

type Props = {
  name: string;
  artists?: any;
  url?: string;
  externalUrl?: string;
};

// eslint-disable-next-line object-curly-newline
const Card: React.FC<Props> = ({ url, name, artists, externalUrl }) => {
  const image = url || fallbackImage;
  return (
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
};

export default Card;
