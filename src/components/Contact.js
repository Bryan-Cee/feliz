import React, {useEffect, useReducer, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Option from "./Option";
import useStyles from "./styles";
import DateTimePicker from "./DateTimePicker";
import useAppContext from "../store"

function localReducer(state, action) {
  return { ...state, [action.type]: action.payload };
}

function Contact() {
  const classes = useStyles();
  const { state, dispatch } = useAppContext();
  const initState = {
    name: null,
    phone: null,
    email: null
  };
  const [localState, localDispatch] = useReducer(localReducer, initState);
  const [contactDetailsFilled, setContactDetailsFilled] = useState(false);
  const {
    name,
    phone,
    email
  } = localState;

  useEffect(() => {
    setContactDetailsFilled(true);
    dispatch({ type: "setContactDetails", payload: {
        name: localState.name,
        phone: localState.phone,
        email: localState.email
      } });
  }, [name, phone, email]);

  useEffect(() => {

  }, [contactDetailsFilled]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    localDispatch({ type: name, payload: value });
  };

  return state.date && (
    <div className="Contact">
      <CardHeader
        classes={{ title: classes.title }}
        style={{
          backgroundColor: "#DBDBDB",
          color: "#000000",
        }}
        title="Contact Details"
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Name" name="name" variant="outlined" onChange={handleChange}/>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email" name="email" variant="outlined" type="email" onChange={handleChange}/>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Phone Number" name="mobile" variant="outlined" onChange={handleChange}/>
          </Grid>
        </Grid>
      </CardContent>
    </div>
  );
}

export default Contact;
