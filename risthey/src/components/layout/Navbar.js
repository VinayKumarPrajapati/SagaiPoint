import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import { clearCurrentMatch } from "../../actions/matchActions";
import logo from "./sagai-logo.png";
import "./Navbar.css";
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
          <Link className="nav-link" to="/gallery">
            गैलरी
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
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px" }}
              title="You must have a Gravatar connected to your email to display an image"
            />
            &nbsp; &nbsp; Logout (लॉग आउट)
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
        {/* <div ClassName="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                सगाई पॉइंट
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/profiles" data-target="mobile-nav">
                    सभी मैच
                  </Link>
                </li>
                {isAuthenticated ? authLinks : guestLinks}
              </ul>
            </div>
          </nav>
        </div> */}
        {/* <nav className="navbar navbar-expand-lg navbar-dark teal mb-4">
          <Link className="navbar-brand" to="/">
            सगाई पॉइंट
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link className="nav-link" to="/profiles">
                  सभी मैच
                </Link>
              </li>
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </nav> */}
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
          <li>{isAuthenticated ? authLinks : guestLinks}</li>
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
