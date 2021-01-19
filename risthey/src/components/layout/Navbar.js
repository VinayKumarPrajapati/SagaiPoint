import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import { clearCurrentMatch } from "../../actions/matchActions";
import "./Navbar.css";
class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.clearCurrentMatch();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <>
        <li>
          <Link to="/home">होम</Link>
        </li>
        <li>
          <Link to="/search">सर्च</Link>
        </li>
        <li>
          <Link to="/gallery">गैलरी</Link>
        </li>
        <li>
          <Link to="/contact">कांटेक्ट</Link>
        </li>
        <li>
          <Link to="/dashboard">डैशबोर्ड</Link>
        </li>
        <li>
          <Link to="/your-match">आपके मैच</Link>
        </li>
        <li>
          <Link
            to=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a Gravatar connected to your email to display an image"
            />
            Logout (लॉग आउट)
          </Link>
        </li>
      </>
    );

    const guestLinks = (
      <>
        <li>
          <Link to="/register" className="float-right">
            रजिस्टर करें
          </Link>
        </li>
        <li>
          <Link to="/login">लॉग इन करें</Link>
        </li>
      </>
    );

    return (
      <>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              सगाई पॉइंट
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/profiles">सभी मैच</Link>
              </li>
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  logoutUser,
  clearCurrentProfile,
  clearCurrentMatch,
})(Navbar);
