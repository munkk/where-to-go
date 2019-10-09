import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Checkbox from "@material-ui/core/Checkbox";

export default function FilterEvents() {
  const events = useSelector(state => state.events);
  const dispatch = useDispatch();

  const getFilterOptions = () => {
    let unique = new Set(events.map(event => event.type));

    return Array.from(unique).sort();
  };

  const toggleFilterCheckbox = (state, checked) => {
    if (checked) {
      dispatch({ type: "check-on", state });
    } else {
      dispatch({ type: "check-off", state });
    }
  };

  const isChecked = type => {
    return events.find(event => event.type === type).visible;
  };

  return (
    <div>
      {getFilterOptions().map((option, idx) => (
        <span key={idx}>
          <span>{option}</span>
          <Checkbox
            checked={isChecked(option)}
            color="primary"
            onChange={(e, checked) => toggleFilterCheckbox(option, checked)}
          />
        </span>
      ))}
    </div>
  );
}
