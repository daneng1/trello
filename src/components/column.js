import React, { useState } from 'react';
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { updateColumn, deleteColumn } from '../store/column.js';
import { addCard, deleteCard, modifyCard } from '../store/card.js';
import Card from './card.js';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Container, Button } from "@material-ui/core";
import Modal from './modal';
import BasicMenu from './menu.js';


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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const classes = useStyles()

  const removeColumn = (id) => {
    props.deleteColumn(id);
  }

  // const updateColumn = (title, description) => {
  //   let newColumn = {
  //     _id: props.id, title, description
  //   }
  //   props.updateColumn(newColumn);
  // }

  const handleSubmit = (title, description, priority) => {
    setModalIsOpen(false);
    let newCard = {
      _id: uuidv4(), title, description, priority, column_id: props.id
    }
    props.addCard(newCard);
  }

  return (
    <Container className={classes.container}>
      {modalIsOpen ? 
        <Modal 
          innerText='Update Column' 
          handleSubmit={addCard}
          title='Column Name'
          description='Description'
          buttonTitle='Submit'
        />
      : null}
      <Button onClick={() => removeColumn(props.id)}>X</Button>
      {/* <Button onClick={() => setModalIsOpen(true)}>Update</Button> */}
      <Button onClick={() => setModalIsOpen(true)}>Add Task</Button>
      {/* <BasicMenu 
      className={classes.menu}
      delete={deleteColumn(props.id)}
      update={updateColumn}
      /> */}
      <Typography variant="h3" gutterBottom component="div">{props.title}</Typography>
      <Typography  gutterBottom component="p">{props.description}</Typography>
      <Typography  gutterBottom component="p">{props.id}</Typography>

      {modalIsOpen ? 
        <Modal 
        innerText='New Task' 
        handleSubmit={handleSubmit}
        title='Task Name'
        description='Description'
        priority={['High', 'Low', 'Medium', 'High']}
        buttonTitle='Submit'
        />
      : null}

      {props.data ? 
        props.tasks.filter((item) => {
          item.column_id === props.id}).map((filteredTask) => {
          <Card
            key={filteredTask._id}
            id={filteredTask._id}
            title={filteredTask.title}
            description={filteredTask.description}
            priority={filteredTask.priority}
          />
        })
      :null}

    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteColumn: (item) => dispatch(deleteColumn(item)),
  updateColumn: (item) => dispatch(updateColumn(item)),
  addCard: (item) => dispatch(addCard(item)),
  updateCard: (item) => dispatch(modifyCard(item)),
  deleteCard: (item) => dispatch(deleteCard(item)),
});

const mapStateToProps = state => ({
  data: state.columnReducer.items,
  tasks: state.cardReducer.items,
})

export default connect(mapStateToProps, mapDispatchToProps)(Column);
