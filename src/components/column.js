import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { deleteColumn } from "../store/column.js";
import { addCard, moveCard } from "../store/card.js";
import Card from "./card.js";
import Modal from "./modal";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Button, IconButton } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 10,
    width: 250,
    minWidth: 250,
    height: "75vh",
    backgroundColor: "rgba(235,235,235,0.3)",
    flexDirection: "column",
    overflow: "scroll",
    borderRadius: 5,
  },
  deleteButton: {
    display: "block",
    position: "absolute",
    padding: 0,
    top: -20,
    right: -25,
  },
  columnHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 0,
    margin: "auto",
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
    position: "sticky",
    minHeight: 170
  },
  cardContainer: {
    overflow: "scroll",
    padding: 0,
  },
  columnTitle: {
    textAlign: 'center',
    minHeight: 25, 
    fontSize: 20
  },
  columnDescription: {
    textAlign: 'center',
    minHeight: 40, 
    fontSize: 12
  }
}));

function Column(props) {
  const [newCardModalIsOpen, setNewCardModalIsOpen] = useState(false);
  const classes = useStyles();

  const removeColumn = (id) => {
    // find all cards with the column id of the column to delete
    let cards = props.tasks.filter((task) => task.column_id === id);
    // find all the column ids so we determine if the cards should move forward, backward or if there is only one column and the cards will be lost
    let columnIds = props.data.map((column) => column._id);

    // determine where the deleted columns cards should be moved before deleting the column
    if (cards.length !== 0) {
      let index = cards ? columnIds.indexOf(cards[0].column_id) : null;
      if (columnIds.length === 1) {
        let response = prompt(
          "You sure about that? All of your tasks will be lost"
        );
        if (response.toLowerCase() === "no") {
          return;
        }
      } else if (index === columnIds.length - 1) {
        cards.map((item) => {
          item.column_id = columnIds[index - 1];
          props.moveCard(item);
        });
      } else if (index < columnIds.length - 1) {
        cards.map((item) => {
          item.column_id = columnIds[index + 1];
          props.moveCard(item);
        });
      }
    }
    props.deleteColumn(id);
  };

  const handleSubmit = (title, description, priority) => {
    setNewCardModalIsOpen(false);
    // create new card object and send it to the Card Store
    let newCard = {
      _id: uuidv4(),
      title,
      description,
      priority,
      column_id: props.id,
    };
    props.addCard(newCard);
  };

  return (
    <Container className={classes.container}>
      <Container className={classes.columnHeader}>
        <IconButton
          size="small"
          className={classes.deleteButton}
          onClick={() => removeColumn(props.id)}
        >
          <CloseIcon />
        </IconButton>
        <Typography className={classes.columnTitle} component="p">
          {props.title ? props.title : 'no title'}
        </Typography>
        <Typography className={classes.columnDescription} component="p">
          {props.description ? props.description : 'no description'}
        </Typography>
        <Button
          size="medium"
          variant="standard"
          startIcon={<AddIcon />}
          onClick={() => setNewCardModalIsOpen(true)}
        >
          Add Task
        </Button>
      </Container>

      {newCardModalIsOpen ? (
        <Modal
          innerText="Create A New Task"
          handleSubmit={handleSubmit}
          title="Task Name"
          description="Description"
          options={["Low", "Medium", "High"]}
          buttonTitle="Submit"
        />
      ) : null}
      <Container className={classes.cardContainer}>
        {props.tasks
          ? props.tasks
              .filter((item) => item.column_id === props.id)
              .map((filteredTask) => {
                return (
                  <Card
                    draggable="true"
                    key={filteredTask._id}
                    id={filteredTask._id}
                    column_id={filteredTask.column_id}
                    title={filteredTask.title}
                    description={filteredTask.description}
                    priority={filteredTask.priority}
                  />
                );
              })
          : null}
      </Container>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteColumn: (item) => dispatch(deleteColumn(item)),
  addCard: (item) => dispatch(addCard(item)),
  moveCard: (item) => dispatch(moveCard(item)),
});

const mapStateToProps = (state) => ({
  data: state.columnReducer.items,
  tasks: state.cardReducer.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
