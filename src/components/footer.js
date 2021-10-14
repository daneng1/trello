import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";

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
    backgroundColor: "none",
  },
  text: {
    padding: 20,
    size: "30px",
    color: "#002766",
  },
}));

export default function Board() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.text} placeholder="Enter Some Text">
        © Dan Engel, 2021
      </Typography>
    </Container>
  );
}
