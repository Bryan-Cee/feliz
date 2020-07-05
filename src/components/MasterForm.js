import React, { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Option from './Option';
import useStyles from "./styles";
import DateTimePicker from './DateTimePicker';
import useAppContext, { ELaundryService, EBagAvailable } from "../store";

function MasterForm({ children }) {
  const classes = useStyles();
  const { dispatch, state } = useAppContext();

  return (
    <div className="MasterForm">
      <Card variant="outlined">
        <CardHeader
          classes={{ title: classes.title }}
          style={{
            backgroundColor: "#86C9ED",
            color: "white",
          }}
          title="Book a laundry date"
        />
        <CardContent>
          <Box>
            <Typography
              gutterBottom
              style={{ fontWeight: "700", fontSize: "11px" }}
            >
              What kind of laundry service would you like?
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Option
                  text="In-house"
                  selected={state.laundryService === ELaundryService.InHouse}
                  onClick={() =>
                    dispatch({
                      type: "setLaundryService",
                      payload: ELaundryService.InHouse,
                    })
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <Option
                  text="Picked and delivered"
                  selected={state.laundryService === ELaundryService.Delivery}
                  onClick={() =>
                    dispatch({
                      type: "setLaundryService",
                      payload: ELaundryService.Delivery,
                    })
                  }
                />
              </Grid>
            </Grid>
          </Box>
          {state.laundryService !== ELaundryService.Default && (
            <Box mt={2}>
              <Typography
                gutterBottom
                style={{ fontWeight: "700", fontSize: "11px" }}
              >
                Do you need a bag?
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Option
                    text="Yes"
                    selected={state.bagAvailable === EBagAvailable.Yes}
                    onClick={() =>
                      dispatch({
                        type: "setBagAvailable",
                        payload: EBagAvailable.Yes,
                      })
                    }
                    caption="* charges will apply"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Option
                    text="No"
                    selected={state.bagAvailable === EBagAvailable.No}
                    onClick={() =>
                      dispatch({
                        type: "setBagAvailable",
                        payload: EBagAvailable.No,
                      })
                    }
                  />
                </Grid>
              </Grid>
            </Box>
          )}
          {state.bagAvailable !== EBagAvailable.Default && (
            <Box mt={2}>
              <Typography
                gutterBottom
                style={{ fontWeight: "700", fontSize: "11px" }}
              >
                When do you need it done?
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} style={{ cursor: "pointer" }}>
                  <DateTimePicker />
                </Grid>
              </Grid>
            </Box>
          )}
        </CardContent>
        {children}
        <CardActions disableSpacing>
          <Button
            variant="contained"
            disableElevation
            fullWidth
            style={{ backgroundColor: "#86C9ED", color: "#ffffff" }}
            classes={{
              root: classes.title,
            }}
          >
            Complete Booking
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default MasterForm;
