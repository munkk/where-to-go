import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Event from "components/Event";

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: "center"
  },
  list: {
    maxWidth: "940px",
    margin: "3% auto 0"
  },
  "@media (max-width: 950px)": {
    list: {
      maxWidth: "300px"
    }
  }
}));

export default function Profile() {
  const classes = useStyles();
  const events = useSelector(state => state.events);

  return (
    <div>
      <h1 className={classes.title}>Favorites</h1>
      <Grid container className={classes.list} spacing={2}>
        {events
          .filter(event => event.favorite)
          .map((event, idx) => (
            <Grid key={idx} item xs={12} md={6} lg={4}>
              <Event event={event} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
