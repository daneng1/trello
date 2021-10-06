import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Container, Button } from "@material-ui/core";
import Column from "./column.js";
import "../style/board.scss";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "90vw",
    height: "80vh",
    backgroundImage: "linear-gradient( #FB5607, #FF006E)",
    overflow: "scroll",
  },
}));

export default function Board() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Column />
      <Column />
      <Column />
      <Button>Add Column</Button>
    </Container>
  );
}
