import React, { Component } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  logo: {
    width: "154px",
    cursor: "pointer"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    margin: "0 auto"
  }
});

class Navbar extends Component {
  goToHome = () => {
    this.props.history.push("/");
  };

  goToProfile = () => {
    this.props.history.push("/profile");
  };

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <img
            alt="logo"
            onClick={this.goToHome}
            className={classes.logo}
            src="https://static-6441fa1c.kudago.com/img/logo-white.svg"
          />
          <Button color="inherit" onClick={this.goToProfile}>
            Профиль
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default compose(
  withStyles(styles),
  withRouter
)(Navbar);
