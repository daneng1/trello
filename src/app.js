import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Board from './components/board/js';

function App(props) {

  return (
    <>
      <Header />
      <Board />
      <Footer />
    </>
  )
}

export default App;