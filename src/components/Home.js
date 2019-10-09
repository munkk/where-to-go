import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import FakeAPI from "services/FakeAPI";
import Event from "components/Event";
import Toolbar from "components/Toolbar/Toolbar";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "940px",
    margin: "3% auto 0"
  },
  "@media (max-width: 950px)": {
    root: {
      maxWidth: "300px"
    }
  }
}));

export default function Home() {
  const classes = useStyles();
  const events = useSelector(state => state.events);
  const searchBy = useSelector(state => state.searchBy);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!events.length) {
      fetchData();
    }
  });

  const fetchData = async () => {
    try {
      await FakeAPI.getEvents().then(data => {
        const events = data.slice().map(event => {
          return { ...event, favorite: false, visible: true };
        });

        dispatch({ type: `initialize-events`, events });
      });
    } catch (error) {
      throw error;
    }
  };

  const filter = event => {
    if (!event.visible) return false;

    if (searchBy) {
      const result = events.filter(event => {
        return event.title.toLowerCase().startsWith(searchBy.toLowerCase());
      });

      return result.indexOf(event) > -1;
    }

    return true;
  };

  return (
    <>
      <Toolbar />
      <Grid container className={classes.root} spacing={2}>
        {events
          .filter(event => filter(event))
          .map((event, idx) => (
            <Grid key={idx} item xs={12} md={6} lg={4}>
              <Event event={event} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
