import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  container: {
    width: "90vw",
    height: 100,
    backgroundColor: "none",
    margin: "0 auto",
  },
  headerText: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "2vh",
    fontWeight: "bolder",
    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
    fontSize: 50,
    color: "#002766",
  },
}));

export default function Board() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.headerText}>
        Project Board
      </Typography>
    </Container>
  );
}
