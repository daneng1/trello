import React, { useState } from 'react';
import { connect } from "react-redux";
import { updateColumn, deleteColumn } from '../store/column.js';
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

  const updateColumn = (title, description) => {
    let newColumn = {
      _id: props.id, title, description
    }
    props.updateColumn(newColumn);
  }

  const handleSubmit = (title, description) => {
    setModalIsActive(false);
    let newColumn = {
      _id: uuidv4(), title, description
    }
    props.addColumn(newColumn);
  }

  return (
    <Container className={classes.container}>
      {modalIsOpen ? 
        <Modal 
          innerText='Update Column' 
          handleSubmit={updateColumn}
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

      {modalIsActive ? 
        <Modal 
        innerText='New Column' 
        handleSubmit={handleSubmit}
        title='Column Name'
        description='Description'
        buttonTitle='Submit'
        />
      : null}

      {props.data ? 
        props.data.map((item) => {
          // console.log('inside map', item._id);
          return (
          <Card
            key={item._id}
            id={item._id}
            title={item.title}
            description={item.description}
          />
        )})
      :null}

    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteColumn: (item) => dispatch(deleteColumn(item)),
  updateColumn: (item) => dispatch(updateColumn(item)),
});

const mapStateToProps = state => ({
  data: state.columnReducer.items,
  tasks: state.cardReducer.items,
})

export default connect(mapStateToProps, mapDispatchToProps)(Column);
