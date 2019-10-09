import React from "react";
import { useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function SortByPriceButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const open = event => {
    setAnchorEl(event.currentTarget);
  };

  const close = () => {
    setAnchorEl(null);
  };

  const sortByPrice = order => {
    dispatch({ type: `sort-in-${order}-order` });

    close();
  };

  return (
    <div>
      <Button
        color="primary"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={open}
      >
        Price
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={close}
      >
        <MenuItem onClick={e => sortByPrice("ASC")}>ASC</MenuItem>
        <MenuItem onClick={e => sortByPrice("DES")}>DES</MenuItem>
      </Menu>
    </div>
  );
}
