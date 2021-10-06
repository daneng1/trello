import * as React from 'react';
import Card from './card.js';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Container, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "75ch",
    },
  },
  container: {
    width: "20vw",
    height: "80vh",
    backgroundColor: "red",
    flexDirection: "column"
  },

}));

export default function Column() {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Typography variant="h3" gutterBottom component="div">Column Title</Typography>
      <Card />
      <Card />
    </Container>
  )
}
