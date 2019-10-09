import React from "react";
import { useSelector } from "react-redux";

export default function EventDetails({ id }) {
  const events = useSelector(state => state.events);
  const event = events.find(event => event.id === +id);

  return (
    <>
      {event && (
        <div>
          <p>{event.title}</p>
          <p>Цена: {event.price}</p>
          <p>{event.description}</p>
        </div>
      )}
    </>
  );
}
