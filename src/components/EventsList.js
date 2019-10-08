import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fade, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

import FakeAPI from "services/FakeAPI";
import Event from "components/Event";

const styles = theme => ({
  root: {
    maxWidth: "940px",
    margin: "3% auto 0"
  },
  options: {
    display: "flex",
    justifyContent: "space-around",
    margin: "20px 0"
  },
  spinnerWrapper: {
    height: "calc(100vh - 100px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#222", 0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    height: "100%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  "@media (max-width: 950px)": {
    root: {
      maxWidth: "300px"
    }
  }
});

const CustomCircularProgress = withStyles({
  root: {
    color: "#63ACE5"
  }
})(CircularProgress);

class EventsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      sortedByPrice: false,
      filterBy: "",
      filterLookup: {},
      canFadeOut: false,
      anchorEl: null
    };
  }

  async componentDidMount() {
    let list;
    if (!this.props.events.length) {
      await FakeAPI.getEvents().then(data => {
        const evnts = data.slice().map(event => {
          return { ...event, favorite: false };
        });
        list = evnts;
        this.props.initializeEvents(list);
      });
    } else {
      list = this.props.events;
    }

    this.setState({
      list,
      filterLookup: list
        .map(ev => ev.type)
        .reduce((curr, acc) => {
          curr[acc] = true;
          return curr;
        }, {}),
      canFadeOut: true
    });
  }

  sortByPrice = order => {
    const copy = this.state.list.slice();

    let sortedList;
    switch (order) {
      case "des": {
        sortedList = copy.sort((a, b) => b.price - a.price);
        break;
      }
      case "asc": {
        sortedList = copy.sort((a, b) => a.price - b.price);
        break;
      }
      default:
        break;
    }

    this.setState({
      list: sortedList
    });

    this.close();
  };

  filter = ({ title, description, type }) => {
    return (
      this.filterBySearch(title, description) && this.filterByEventType(type)
    );
  };

  filterBySearch = (title, description) => {
    if (!this.state.filterBy) return true;

    return (
      title.toLowerCase().startsWith(this.state.filterBy.toLowerCase()) ||
      description.toLowerCase().startsWith(this.state.filterBy.toLowerCase())
    );
  };

  filterByEventType = type => {
    const result = this.state.list.filter(item => {
      return this.state.filterLookup[type];
    });

    return result.length;
  };

  toggleFilterCheckbox = (eventType, checked) => {
    this.setState(state => ({
      filterLookup: { ...state.filterLookup, [eventType]: checked }
    }));
  };

  open = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  close = () => {
    this.setState({
      anchorEl: null
    });
  };

  getFilterOptions = () => {
    let unique = new Set(this.state.list.map(event => event.type));

    return Array.from(unique).sort();
  };

  goToDetails = event => {
    this.props.history.push("" + event.id);
  };

  canRender = () => {
    return this.props.events.length;
  };

  render() {
    const { classes } = this.props;

    if (!this.canRender()) {
      return (
        <div className={classes.spinnerWrapper}>
          <CustomCircularProgress size={150} />;
        </div>
      );
    } else {
      return (
        <Fade in={this.state.canFadeOut}>
          <>
            <div className={classes.options}>
              <div>
                <Button
                  color="primary"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={this.open}
                >
                  Цена
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={this.state.anchorEl}
                  keepMounted
                  open={Boolean(this.state.anchorEl)}
                  onClose={this.close}
                >
                  <MenuItem onClick={e => this.sortByPrice("asc")}>
                    По восходящей
                  </MenuItem>
                  <MenuItem onClick={e => this.sortByPrice("des")}>
                    По нисходящей
                  </MenuItem>
                </Menu>
              </div>

              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  onChange={e => this.setState({ filterBy: e.target.value })}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>

              <div>
                {this.getFilterOptions().map((option, idx) => (
                  <span key={idx}>
                    <span>{option}</span>
                    <Checkbox
                      checked={this.state.filterLookup[option]}
                      value="checkedA"
                      color="primary"
                      onChange={(e, checked) =>
                        this.toggleFilterCheckbox(option, checked)
                      }
                      inputProps={{
                        "aria-label": "primary checkbox"
                      }}
                    />
                  </span>
                ))}
              </div>
            </div>

            <Grid container className={classes.root} spacing={2}>
              {this.state.list
                .filter(event => this.filter(event))
                .map((event, idx) => (
                  <Grid key={idx} item xs={12} md={6} lg={4}>
                    <Event
                      event={event}
                      goToDetails={event => this.goToDetails(event)}
                    />
                  </Grid>
                ))}
            </Grid>
          </>
        </Fade>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initializeEvents: events => dispatch({ type: "initialize-events", events })
  };
};

export default compose(
  withStyles(styles),
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EventsList);
