import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import SortByPrice from "components/Toolbar/SortByPrice";
import Search from "components/Toolbar/Search";
import FilterEvents from "components/Toolbar/FilterEvents";

const useStyles = makeStyles(theme => ({
  options: {
    display: "flex",
    justifyContent: "space-around",
    margin: "20px 0"
  }
}));

export default function Toolbar() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.options}>
        <SortByPrice />
        <Search />
        <FilterEvents />
      </div>
    </div>
  );
}
