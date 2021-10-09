import React, { useState } from 'react';
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { deleteColumn } from '../store/column.js';
import { addCard } from '../store/card.js';
import Card from './card.js';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Container, Button } from "@material-ui/core";
import Modal from './modal';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "75ch",
    },
  },
  container: {
    width: "250px",
    height: "80vh",
    backgroundColor: "red",
    flexDirection: "column"
  },
  menu: {
    position: "absolute",
    right: "15px"
  }
}));

function Column(props) {
  const [newCardModalIsOpen, setNewCardModalIsOpen] = useState(false);
  const classes = useStyles()

  // const drop = e => {
  //   e.preventDefault();
  //   const card_id = e.dataTransfer.getData('_id');
  //   const card = document.getElementById(card_id);
  //   card.style.display = 'block';
  //   e.target.appendChild(card);
  // }

  // const dragOver = e => {
  //   e.preventDefault();
  // }

  const removeColumn = (id) => {
    let cards = props.tasks.filter((task) => task.column_id === id);
    let columnIds = props.data.map((column) => column._id);
    console.log(cards)

    if(cards.length !== 0) {
      let index = cards ? columnIds.indexOf(cards[0].column_id) : null;
      if (columnIds.length === 1) {
        let response = prompt("You sure about that? All of your tasks will be lost");
        if(response.toLowerCase() === 'no') {
          return;
        }
        console.log(response);
      } else if (index === columnIds.length -1) {
        cards.map((item) => {
          item.column_id = columnIds[index - 1];
          props.moveCard(item);
        });
      } else if (index < columnIds.length -1) {
        cards.map((item) => {
          item.column_id = columnIds[index + 1];
          props.moveCard(item);
        });
      }
    }
    props.deleteColumn(id);
  }

  const handleSubmit = (title, description, priority) => {
    setNewCardModalIsOpen(false);
    let newCard = {
      _id: uuidv4(), title, description, priority, column_id: props.id
    }
    props.addCard(newCard);
  }

  return (
    <Container 
      // onDrop={drop}
      // onDragOver={dragOver}
      className={classes.container}
      >
      <Button onClick={() => removeColumn(props.id)}>X</Button>
      <Button onClick={() => setNewCardModalIsOpen(true)}>Add Task</Button>
      <Typography variant="h4" gutterBottom component="div">{props.title}</Typography>
      <Typography  gutterBottom component="p">{props.description}</Typography>

      {newCardModalIsOpen ? 
        <Modal 
        innerText='New Task' 
        handleSubmit={handleSubmit}
        title='Task Name'
        description='Description'
        priority={['High', 'Low', 'Medium', 'High']}
        buttonTitle='Submit'
        />
      : null}

      {props.tasks ? 
        props.tasks.filter((item) => item.column_id === props.id).map((filteredTask) => {
            return (
          <Card
            draggable='true'
            key={filteredTask._id}
            id={filteredTask._id}
            column_id={filteredTask.column_id}
            title={filteredTask.title}
            description={filteredTask.description}
            priority={filteredTask.priority}
          />
        )})
      :null}

    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteColumn: (item) => dispatch(deleteColumn(item)),
  // updateColumn: (item) => dispatch(updateColumn(item)),
  addCard: (item) => dispatch(addCard(item)),
  moveCard: (item) => dispatch(moveCard(item)),
  // deleteCard: (item) => dispatch(deleteCard(item)),
});

const mapStateToProps = state => ({
  data: state.columnReducer.items,
  tasks: state.cardReducer.items,
})

export default connect(mapStateToProps, mapDispatchToProps)(Column);
