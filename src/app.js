import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Board from './components/board.js';
import './style/app.scss';

function App(props) {

  return (
    <div id='app'>
      <Header />
      <Board id='board'/>
      <Footer />
    </div>
  )
}

export default App;