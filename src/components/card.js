import React from 'react';
import { connect } from "react-redux";
import { deleteCard, modifyCard } from '../store/card.js';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

function BasicCard(props) {
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

const mapDispatchToProps = dispatch => ({
  updateCard: (item) => dispatch(modifyCard(item)),
  deleteCard: (item) => dispatch(deleteCard(item)),
});

const mapStateToProps = state => ({
  tasks: state.cardReducer.items,
})

export default connect(mapStateToProps, mapDispatchToProps)(BasicCard);