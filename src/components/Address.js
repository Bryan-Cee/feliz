import React, { useEffect, useState, useReducer } from "react";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import CardHeader from "@material-ui/core/CardHeader";
import useStyles from "./styles";
import useAppContext from "../store";

function localReducer(state, action) {
  return { ...state, [action.type]: action.payload };
}

function Address() {
  const classes = useStyles();
  const { dispatch } = useAppContext();
  const initState = {
    area: null,
    apartment: null,
    doorNumber: null
  };

  const [localState, localDispatch] = useReducer(localReducer, initState);
  const [addressDetailsFilled, setAddressDetailsFilled] = useState(false);
  const [addressDetails, setAddressDetails] = useState({});

  const {
    area,
    apartment,
    doorNumber
  } = localState;

  useEffect(() => {
    setAddressDetailsFilled(true);
    dispatch({ type: "setAddressDetails", payload: {
        area: localState.area,
        apartment: localState.apartment,
        doorNumber: localState.doorNumber,
      }});
  }, [area, apartment, doorNumber]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    localDispatch({ type: name, payload: value });
  };

  return (
    <div className="Contact">
      <CardHeader
        classes={{ title: classes.title }}
        style={{
          backgroundColor: "#DBDBDB",
          color: "#000000",
        }}
        title="Delivery Address"
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="area"
              label="Area"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="apartment"
              label="Apartment/Estate"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="doorNumber"
              label="Door Number"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </CardContent>
    </div>
  );
}

export default Address;
