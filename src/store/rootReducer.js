const initState = {
  events: [],
  searchBy: ""
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
    case "sort-in-ASC-order": {
      const copy = state.events.slice();
      const sorted = copy.sort((a, b) => a.price - b.price);
      return {
        ...state,
        events: [...sorted]
      };
    }
    case "sort-in-DES-order": {
      const copy = state.events.slice();
      const sorted = copy.sort((a, b) => b.price - a.price);
      return {
        ...state,
        events: [...sorted]
      };
    }
    case "check-on": {
      const filtered = state.events.map(event => {
        if (event.type === action.state) {
          return { ...event, visible: true };
        }

        return event;
      });
      return {
        ...state,
        events: [...filtered]
      };
    }
    case "check-off": {
      const filtered = state.events.map(event => {
        if (event.type === action.state) {
          return { ...event, visible: false };
        }

        return event;
      });
      return {
        ...state,
        events: [...filtered]
      };
    }
    case "search": {
      return {
        ...state,
        searchBy: action.value
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
