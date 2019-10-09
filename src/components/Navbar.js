import React from "react";
import { A } from "hookrouter";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles({
  logo: {
    width: "154px",
    cursor: "pointer"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    margin: "0 auto",
    "& a": {
      textDecoration: "none",
      color: "white"
    }
  }
});

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <A href="/">
          <img
            alt="logo"
            className={classes.logo}
            src="https://static-6441fa1c.kudago.com/img/logo-white.svg"
          />
        </A>
        <A href="/profile">Profile</A>
      </Toolbar>
    </AppBar>
  );
}
