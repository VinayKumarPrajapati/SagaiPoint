import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import { clearCurrentMatch } from "../../actions/matchActions";
import { Menu } from "antd";
import {
  LogoutOutlined,
  AppstoreOutlined,
  DashboardOutlined,
  MessageOutlined,
  ContactsOutlined,
  FileSearchOutlined,
  HeartOutlined,
  FileImageOutlined,
  HomeOutlined,
} from "@ant-design/icons";

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
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="search" icon={<FileSearchOutlined />}>
          <Link to="/search">Search</Link>
        </Menu.Item>

        <Menu.Item key="gallery" icon={<FileImageOutlined />}>
          <Link to="/gallery">Gallery</Link>
        </Menu.Item>
        <Menu.Item key="contact" icon={<ContactsOutlined />}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="feed" icon={<MessageOutlined />}>
          <Link to="/feed">Post Feed</Link>
        </Menu.Item>
        <Menu.Item key="yourMatch" icon={<HeartOutlined />}>
          <Link to="/your-match">Matches for You</Link>
        </Menu.Item>
        <Menu.Item key="logout" className="float-right">
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
            Logout <LogoutOutlined />
          </Link>
        </Menu.Item>
      </>
    );
    // <></>

    const guestLinks = (
      <>
        <Menu.Item
          key="register"
          icon={<AppstoreOutlined />}
          className="float-right"
        >
          <Link to="/register">Sign Up</Link>
        </Menu.Item>
        <Menu.Item
          key="login"
          icon={<AppstoreOutlined />}
          className="float-right"
        >
          <Link to="/login">Login</Link>
        </Menu.Item>
      </>
    );

    return (
      <>
        <Menu mode="horizontal">
          <Menu.Item key="symbol">
            <Link to="/" className="h3">
              <img src={require("./sagai.jpg")} alt="sagaiPoint" />
            </Link>
          </Menu.Item>

          <Menu.Item key="match" icon={<AppstoreOutlined />}>
            <Link to="/profiles">सभी मैच</Link>
          </Menu.Item>
          {isAuthenticated ? authLinks : guestLinks}
        </Menu>
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
