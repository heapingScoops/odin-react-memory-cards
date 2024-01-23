import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard( {card} ) {
  return (
    <Card sx={{ width: 245 }} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="245"
          image={card.cardImageUrl}
        />
        <CardContent>
          <Typography role="card-name" gutterBottom variant="h5" component="div">
            {card.cardName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
