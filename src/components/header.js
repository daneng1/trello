import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Container, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "75ch",
    },
  },
  container: {
    width: "90vw",
    height: "10vh",
    backgroundColor: "green",
  },

}));

export default function Board() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <TextField>Hello</TextField>
    </Container>
  )
}
