import React from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {props.title}
        </Typography>
        <Typography component="p">
          {props.description}
        </Typography>
        <Typography component="p">
          Priority: {props.priority}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
        <Button size="small">Move</Button>
      </CardActions>
    </Card>
  );
}
