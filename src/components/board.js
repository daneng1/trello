import React, { useState } from 'react';
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

export default function Board() {
  const [addColumn, setAddColumn] = useState();
  const [modalIsActive, setModalIsActive] = useState(false);
  const classes = useStyles();

  const handleSubmit = (item) => {
    setModalIsActive(false);
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
      <Column />
      <Column />
      <Button onClick={() => setModalIsActive(true)}>Add Column</Button>
    </Container>
  );
}
