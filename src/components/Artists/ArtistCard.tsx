import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import classes from './ArtistCard.module.scss';

type Props = {
  image: string;
  artist: string;
};

const ArtistCard: React.FC<Props> = ({ image, artist }) => (
  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia className={classes.media} image={image} title="Album cover" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {artist}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default ArtistCard;
