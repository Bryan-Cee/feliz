import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      fontSize: "14px",
      fontWeight: "900 !important",
    },
    dateTimePicker: {
      fontSize: "14px !important",
    },
  })
);

export default useStyles;
