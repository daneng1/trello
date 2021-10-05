import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import  { BrowserRouter } from 'react-router-dom';
import App from 'app.js';


function Entry() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

const root = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Entry />
  </BrowserRouter>,
  root
);
