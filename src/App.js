import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import Profile from "components/Profile";
import Navbar from "components/Navbar";
import EventsList from "components/EventsList";
import EventDetails from "components/EventDetails";

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#222"
    },
    secondary: {
      main: "#ffffff"
    }
  }
});

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={EventsList} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/events/:id" component={EventDetails} />

            <Route path="*" component={EventsList} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
