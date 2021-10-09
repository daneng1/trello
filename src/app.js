import React from "react";

import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Board from "./components/board.js";
import "./style/app.scss";

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
