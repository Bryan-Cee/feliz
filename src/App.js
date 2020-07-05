import React, { useReducer } from "react";
import Contact from './components/Contact';
import Address from "./components/Address";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter'
import MasterForm from './components/MasterForm';
import Grid from '@material-ui/core/Grid';
import {
  createMuiTheme,
  ThemeProvider,
  Box,
  Typography,
  Icon
} from "@material-ui/core";
import './App.css'
import { AppContext, reducer, initialState } from "./store";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
  },
});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={value}>
          <Grid className="header" container alignItems="center">
            <Grid item xs={8}>
              <Typography variant="h5" style={{ paddingLeft: "1em" }}>Feliz</Typography>
            </Grid>
            <Grid item xs={4}>
              <Box display="flex" justifyContent="space-evenly">
                <Icon><FacebookIcon /></Icon>
                <Icon><TwitterIcon /></Icon>
              </Box>
            </Grid>
          </Grid>
          <main>
            <div className="jumbotron">
              <div className="main-tagline">Feliz cleaners</div>
              <div className="sub-tagline">laundry today or naked tomorrow</div>
            </div>
            <div className="main">
              <MasterForm>
                <Contact />
                <Address />
              </MasterForm>
            </div>
          </main>
        </AppContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
