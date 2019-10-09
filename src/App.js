import React from "react";
import { useRoutes, setBasepath } from "hookrouter";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import "App.css";
import Profile from "components/Profile";
import Navbar from "components/Navbar";
import Home from "components/Home";
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

setBasepath("/where-to-go");
const routes = {
  "/": () => <Home />,
  "/profile": () => <Profile />,
  "/event/:id": ({ id }) => <EventDetails id={id} />,
  "/*": () => <Home />
};

export default function App() {
  const routeResult = useRoutes(routes);

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Navbar />
        {routeResult}
      </ThemeProvider>
    </>
  );
}
