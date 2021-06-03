import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import classes from './AlbumCard.module.scss';

type Props = {
  image: string;
  album: string;
  artists: any;
};

const AlbumCard: React.FC<Props> = ({ image, album, artists }) => (
  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia className={classes.media} image={image} title="Album cover" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {album}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {artists.map((artist: any) => artist.name)}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default AlbumCard;
