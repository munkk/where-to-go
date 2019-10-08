const initState = {
  events: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "initialize-events": {
      return {
        ...state,
        events: [...action.events]
      };
    }
    case "like": {
      const newEvents = state.events.map(event => {
        if (event === action.event) {
          event.favorite = true;
        }

        return event;
      });
      return {
        ...state,
        events: [...newEvents]
      };
    }
    case "dislike": {
      const newEvents = state.events.map(event => {
        if (event === action.event) {
          event.favorite = false;
        }

        return event;
      });
      return {
        ...state,
        events: [...newEvents]
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
