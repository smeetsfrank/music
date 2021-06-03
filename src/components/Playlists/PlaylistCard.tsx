import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import classes from './PlaylistCard.module.scss';

type Props = {
  image?: string;
  playlist: string;
};

const PlaylistCard: React.FC<Props> = ({ image, playlist }) => (
  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia className={classes.media} image={image} title="Album cover" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {playlist}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default PlaylistCard;
