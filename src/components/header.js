import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Button } from "@material-ui/core";
import { fontWeight } from "@mui/system";

const useStyles = makeStyles((theme) => ({

  container: {
    width: "90vw",
    height: "10vh",
    backgroundColor: "none",
    margin: "0 auto",
  },
  headerText: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "2vh",
    fontWeight: "bolder",
    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
    fontSize: "4vw",
    color: "#002766",
  },
}));

export default function Board() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.headerText}>
        Dan's Trello Clone
      </Typography>
    </Container>
  );
}
