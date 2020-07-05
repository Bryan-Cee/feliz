import "date-fns";
import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import EventIcon from '@material-ui/icons/Event';
import { IconButton, InputAdornment } from "@material-ui/core";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import useAppContext from "../store";

export default function MaterialUIPickers() {
  const { dispatch } = useAppContext();
  const [selectedDate, setSelectedDate] = React.useState(null);

  useEffect(() => {
    return () => {
      setSelectedDate(null)
    }
  }, []);
  
  const handleDateChange = (date) => {
    dispatch({ type: "setDate", payload: date });
    setSelectedDate(date);
  };

  const disableWeekends = (date) => {
    return date.getDay() === 0;
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <DateTimePicker
          disablePast
          hideTabs
          ampm={false}
          value={selectedDate}
          onChange={handleDateChange}
          allowKeyboardControl={false}
          helperText="Select the date and time"
          leftArrowIcon={<KeyboardArrowLeftIcon />}
          leftArrowButtonProps={{ "aria-label": "Prev month" }}
          rightArrowButtonProps={{ "aria-label": "Next month" }}
          rightArrowIcon={<KeyboardArrowRightIcon />}
          shouldDisableDate={disableWeekends}
          showTodayButton
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <EventIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
