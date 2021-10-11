import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addColumn } from "../../store/column.js";
import Column from "../column/column.js";
import Modal from "../modal/modal.js";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "90vw",
    height: "80vh",
    backgroundColor: "rgba(255,0,255,0.2)",
    overflow: "scroll",
  },
}));

function Board(props) {
  const [modalIsActive, setModalIsActive] = useState(false);
  const classes = useStyles();

  const handleSubmit = (title, description) => {
    setModalIsActive(false);
    // create a new column for the users input and send to the Store
    let newColumn = {
      _id: uuidv4(),
      title,
      description,
    };
    props.addColumn(newColumn);
  };

  return (
    <Container className={classes.container}>
      {modalIsActive ? (
        <Modal
          innerText="New Column"
          handleSubmit={handleSubmit}
          title="Column Name"
          description="Description"
          buttonTitle="Submit"
          />
      ) : null}
      {props.data
        ? props.data.map((item) => {
            return (
              <Column
                key={item._id}
                id={item._id}
                title={item.title}
                description={item.description}
              />
            );
          })
        : null}
      <Button title='addColumnBtn' size="small" onClick={() => setModalIsActive(true)}>
        Add Column
      </Button>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addColumn: (item) => dispatch(addColumn(item)),
});

const mapStateToProps = (state) => ({
  data: state.columnReducer.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
