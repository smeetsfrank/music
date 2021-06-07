import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import classes from './Card.module.scss';
import fallbackImage from '../../assets/images/emily-morter-unsplash.jpg';

import { cardVariants, cardHover } from '../../utils/framer/Card';

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
    <motion.div
      className={classes.card}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={cardHover}
    >
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
    </motion.div>
  );
};

export default Card;
