import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllMatch } from "../../actions/matchActions";

class Match extends Component {
  componentDidMount() {
    this.props.getAllMatch();
  }

  render() {
    return (
      <div>
        <h1>Find a Match</h1>
      </div>
    );
  }
}

export default connect(null, { getAllMatch })(Match);
