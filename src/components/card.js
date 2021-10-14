import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { deleteCard, moveCard } from "../store/card.js";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

function BasicCard(props) {
  const useStyles = makeStyles((theme) => ({
    cardContainer: {
      backgroundColor: "rgba(245,245,245,0.9)",
      margin: 0,
      padding: 0,
      position: "relative",
      marginBottom: 10,
      paddingBottom: 10,
    },
    rightArrow: {
      position: "absolute",
      bottom: 5,
      right: 5,
    },
    leftArrow: {
      position: "absolute",
      bottom: 5,
      left: 5,
    },
    description: {
      overflow: "scroll",
    },
    High: {
      color: "red",
    },
    Medium: {
      color: "orange",
    },
    Low: {
      color: "green",
    },
  }));

  const [moveButtons, setMoveButtons] = useState();
  const classes = useStyles();

  const removeCard = (id) => {
    props.deleteCard(id);
  };

  const modifyCard = (direction) => {
    let columnIds = props.data.map((column) => column._id);
    let index = columnIds.indexOf(props.column_id);
    if (direction === "right") props.moveCard([props.id, columnIds[index + 1]]);
    else props.moveCard([props.id, columnIds[index - 1]]);
  };

  // determine column position on board and set state so that the move arrows can be rendered dynamically
  // if the column is on the left side, this prevents adding a left arrow and same with the right side
  const loadButtons = () => {
    let columnIds = props.data.map((column) => column._id);
    let index = columnIds.indexOf(props.column_id);
    if (columnIds.length === 1) return setMoveButtons(null);
    if (index === 0 && columnIds.length > 1) return setMoveButtons("0");
    if (index === columnIds.length - 1) return setMoveButtons("1");
    else setMoveButtons("2");
  };

  useEffect(() => {
    loadButtons();
  });

  return (
    <Card draggable="true" className={classes.cardContainer} id={props.id}>
      <IconButton
        onClick={() => {
          removeCard(props.id);
        }}
        size="small"
      >
        <CloseIcon />
      </IconButton>
      <CardContent>
        <Typography className={classes[props.priority]} gutterBottom>
          Priority: {props.priority ? props.priority : "none selected"}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {props.title ? props.title : "no title"}
        </Typography>
        <Typography className={classes.description} component="section">
          {props.description ? props.description : "no description"}
        </Typography>
      </CardContent>
      <CardActions>
        {/* render the move buttons based on the moveButtons state. 
        There is probably a more elegant way to do this rather than three separate ternary operators */}
        {moveButtons === "1" ? (
          <>
            <IconButton
              className={classes.leftArrow}
              onClick={() => modifyCard("left")}
              size="small"
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          </>
        ) : null}
        {moveButtons === "0" ? (
          <>
            <IconButton
              className={classes.rightArrow}
              onClick={() => modifyCard("right")}
              size="small"
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </>
        ) : null}
        {moveButtons === "2" ? (
          <>
            <IconButton
              className={classes.leftArrow}
              onClick={() => modifyCard("left")}
              size="small"
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              className={classes.rightArrow}
              onClick={() => modifyCard("right")}
              size="small"
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </>
        ) : null}
      </CardActions>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => ({
  moveCard: (item) => dispatch(moveCard(item)),
  deleteCard: (item) => dispatch(deleteCard(item)),
});

const mapStateToProps = (state) => ({
  tasks: state.cardReducer.items,
  data: state.columnReducer.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicCard);
