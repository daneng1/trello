import React, { useState } from "react";

import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

export default function AlertDialog(props) {
  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [priority, setPriority] = useState();

  const handleClose = () => {
    setOpen(false);
    props.handleSubmit(title, description, priority);
    setTitle();
    setDescription();
    setPriority();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.innerText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <TextField
            data-testId='inputName'
            required='true'
            placeholder={props.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            data-testId='inputDesc'
            required='true'
            placeholder={props.description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {props.options ? (
            <>
              <InputLabel id="demo-simple-select-standard-label">
                Priority
              </InputLabel>
            <FormControl size="medium" variant="standard" sx={{ m: 1, minWidth: 300 }}>
              <Select
                required
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={(e) => setPriority(e.target.value)}
                label="Priority"
              >
                <MenuItem value={props.options[0]}>{props.options[0]}</MenuItem>
                <MenuItem value={props.options[1]}>{props.options[1]}</MenuItem>
                <MenuItem value={props.options[2]}>{props.options[2]}</MenuItem>
              </Select>
            </FormControl>
            </>
          ) : null}
          <Button onClick={handleClose} color="primary" autoFocus>
            {props.buttonTitle}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
