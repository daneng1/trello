import React from "react";

import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Board from "./components/board/board.js";

import "./style/app.css";

function App(props) {
  return (
    <div id="app">
      <Header />
      <Board id="board" />
      <Footer />
    </div>
  );
}

export default App;
