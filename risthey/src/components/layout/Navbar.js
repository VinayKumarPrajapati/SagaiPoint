import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import { clearCurrentMatch } from "../../actions/matchActions";
import logo from "./sagai-logo.png";
import "./NavbarJS.js";

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
          <Link className="nav-link" to="/search">
            आवश्यकताएं जोड़ें
          </Link>
        </li>

        <li>
          <Link className="nav-link" to="/contact">
            कांटेक्ट
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/dashboard">
            डैशबोर्ड
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/your-match">
            आपके मैच
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="nav-link"
            onClick={this.onLogoutClick.bind(this)}
          >
            {user.name}
            &nbsp; &nbsp; Logout
          </Link>
        </li>
      </>
    );

    const guestLinks = (
      <>
        <li>
          <Link to="/register" className="nav-link">
            रजिस्टर करें
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">
            लॉग इन करें
          </Link>
        </li>
      </>
    );

    return (
      <>
        <div className="navbar-fixed">
          <nav className="teal">
            <div className="container">
              <div className="nav-wrapper text-white white-text">
                <Link to="/" className="brand-logo">
                  <img
                    className="rounded-circle"
                    src={logo}
                    alt="सगाई पॉइंट"
                    style={{ width: "80px", marginTop: "-30px" }}
                  />
                </Link>
                <Link
                  to="#"
                  data-target="mobile-demo"
                  className="sidenav-trigger"
                >
                  <i className="material-icons">menu</i>
                </Link>
                <ul className="right hide-on-med-and-down">
                  {/* <li>
                    <Link to="/profiles"> सभी मैच</Link>
                  </li> */}
                  {isAuthenticated ? authLinks : guestLinks}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <ul className="sidenav" id="mobile-demo">
          {/* <li>
            <Link to="/profiles"> सभी मैच</Link>
          </li> */}
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
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
