import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from "react-redux";
import { addColumn, updateColumn, deleteColumn } from '../store/column.js';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Container, Button } from '@material-ui/core';
import Column from './column.js';
import Modal from './modal.js';
import '../style/board.scss';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '90vw',
    height: '80vh',
    backgroundImage: 'linear-gradient( #FB5607, #FF006E)',
    overflow: 'scroll',
  },
}));

function Board(props) {
  const [addColumn, setAddColumn] = useState();
  const [modalIsActive, setModalIsActive] = useState(false);
  const classes = useStyles();

  const handleSubmit = (title, description, priority) => {
    setModalIsActive(false);
    let newColumn = {
      id: uuidv4(), title, description, priority
    }
    console.log('new column', newColumn);
    props.addColumn(newColumn);
  }

  const fetchData = (e) => {
    e && e.preventDefault();
    props.get();
  }
  
  function Data() {
    useEffect(() => {
      fetchData();
    }, []);
  }

  return (
    <Container className={classes.container}>
      {modalIsActive ? 
        <Modal 
        innerText='New Column' 
        handleSubmit={handleSubmit}
        title='Column Name'
        description='Description'
        buttonTitle='Submit'
        options={['low', 'normal', 'high']}
        />
      : null}

      {props.data ? 
        props.data.map((item) => {
          return (
          <Column 
            key={item.id}
            title={item.title}
            description={item.description}
          />
        )})
      :null}
      <Button onClick={() => setModalIsActive(true)}>Add Column</Button>
    </Container>
  );
}

const mapDispatchToProps = dispatch => ({
  addColumn: (item) => dispatch(addColumn(item)),
  deleteColumn: (item) => dispatch(deleteColumn(item)),
  updateColumn: (item) => dispatch(updateColumn(item)),
  get: () => dispatch(getColumns()),
});

const mapStateToProps = state => ({
  data: state.columnReducer.items
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);
