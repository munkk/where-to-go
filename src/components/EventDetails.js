import React, { Component } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class EventDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: props.events.find(event => event.id === +props.match.params.id)
    };
  }

  render() {
    return (
      <>
        {this.state.event && (
          <div>
            <p>{this.state.event.title}</p>
            <p>Цена: {this.state.event.price}</p>
            <p>{this.state.event.description}</p>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    null
  )
)(EventDetails);
