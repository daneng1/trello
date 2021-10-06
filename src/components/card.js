import * as React from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <MoreHorizIcon sx={{ fontSize: 20 }}/>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Task Title
        </Typography>
        <Typography variant="h5" component="div">
          benevolent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

// TODO: icons not appearing, look into formatting