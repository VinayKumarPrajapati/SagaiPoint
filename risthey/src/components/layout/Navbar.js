import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
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
            Logout
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <div className="navbar-fixed">
        <nav id="nav_f" className="default_color" role="navigation">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="#" id="logo-container" className="brand-logo">
                Ristehy Jodo
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="#intro">सेवा</Link>
                </li>
                <li>
                  <Link to="#work">Career</Link>
                </li>
                <li>
                  <Link to="#team">हमारी टीम</Link>
                </li>
                <li>
                  <Link to="#contact">सम्पर्क</Link>
                </li>
                <li>
                  <Link to="#contact">हमारे बारे मे</Link>
                </li>
                <li>
                  <Link to="/login">लॉग इन करें</Link>
                </li>
              </ul>
              <Link
                to="#"
                data-activates="nav-mobile"
                className="button-collapse"
              >
                <i className="mdi-navigation-menu"></i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
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

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
