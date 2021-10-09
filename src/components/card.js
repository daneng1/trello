import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { deleteCard, moveCard } from '../store/card.js';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function BasicCard(props) {
  const [moveButtons, setMoveButtons] = useState()

  // const dragStart = e => {
  //   const target = e.target;

  //   e.dataTransfer.setData('card_id', target.id);

  //   setTimeout(() => {
  //     target.style.display = 'none';
  //   }, 0)
  // }

  // const dragOver = e => {
  //   e.stopPropagation();
  // }

  const removeCard = (id) => {
    props.deleteCard(id)
  }

  const modifyCard = (direction) => {
    console.log(direction);
    let columnIds = props.data.map((column) => column._id);
    let index = columnIds.indexOf(props.column_id);
    if(direction === 'right') props.moveCard([props.id, columnIds[index + 1]]);
    else props.moveCard([props.id, columnIds[index - 1]]);
  }

  const loadButtons = () => {
    let columnIds = props.data.map((column) => column._id);
    let index = columnIds.indexOf(props.column_id);
    if (columnIds.length === 1) return setMoveButtons(null);
    if (index === 0 && columnIds.length > 1) return setMoveButtons('0');
    if (index === columnIds.length -1 ) return setMoveButtons('1');
    else setMoveButtons('2');
    console.log(columnIds, index);
  }

  useEffect(() => {
    loadButtons();
  }, )

  return (
    <Card 
      // draggable='true' 
      sx={{ minWidth: 275, margin: 2 }}
      id={props.id}
      // onDragStart={dragStart}
      // onDragOver={dragOver}
      >
      <CardContent>
        <Button onClick={() => {removeCard(props.id)}}size="small">X</Button>
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
        {moveButtons === '1' ? <> <Button onClick={() => modifyCard('left')}size="small"><ArrowBackIosNewIcon/></Button> </> : null}
        {moveButtons === '0' ? <> <Button onClick={() => modifyCard('right')}size="small"><ArrowForwardIosIcon/></Button> </> : null}
        {moveButtons === '2' ? 
          <>
            <Button onClick={() => modifyCard('left')}size="small"><ArrowBackIosNewIcon/></Button>
            <Button onClick={() => modifyCard('right')}size="small"><ArrowForwardIosIcon/></Button> 
          </>
          : null}
      </CardActions>
    </Card>
  );
}

const mapDispatchToProps = dispatch => ({
  moveCard: (item) => dispatch(moveCard(item)),
  deleteCard: (item) => dispatch(deleteCard(item)),
});

const mapStateToProps = state => ({
  tasks: state.cardReducer.items,
  data: state.columnReducer.items
})

export default connect(mapStateToProps, mapDispatchToProps)(BasicCard);