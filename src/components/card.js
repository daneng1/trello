import React from 'react';
import { connect } from "react-redux";
import { deleteCard, updateCard } from '../store/card.js';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

function BasicCard(props) {

  const removeCard = (id) => {
    console.log(id);
    props.deleteCard(id)
  }

  return (
    <Card draggable='true' sx={{ minWidth: 275, margin: 2 }}>
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
        <Button onClick={() => {removeCard(props.id)}}size="small">Delete</Button>
        <Button size="small">Move</Button>
      </CardActions>
    </Card>
  );
}

const mapDispatchToProps = dispatch => ({
  updateCard: (item) => dispatch(updateCard(item)),
  deleteCard: (item) => dispatch(deleteCard(item)),
});

const mapStateToProps = state => ({
  tasks: state.cardReducer.items,
})

export default connect(mapStateToProps, mapDispatchToProps)(BasicCard);