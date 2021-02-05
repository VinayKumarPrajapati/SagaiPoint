import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";
class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <>
        {/* <div className="card">
          <Link to="/profiles" className="btn btn-primary mb-3 float-left">
            Back To Profiles
          </Link>
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src={profile.user.avatar}
                alt="User Profile"
                className="rounded-circle"
                width="150"
              />
              <div className="mt-3">
                <h4>{profile.user.name}</h4>
                <p className="text-secondary mb-1">{profile.status}</p>
                <p className="text-muted font-size-sm">
                  {isEmpty(profile.company) ? null : (
                    <span>at {profile.company}</span>
                  )}
                </p>
                <p className="text-muted font-size-sm">
                  {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
                </p>
                <button className="btn btn-outline-primary">Message</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-globe mr-2 icon-inline"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                Website
              </h6>

              {isEmpty(profile.website) ? null : (
                <Link
                  className="text-primary p-2"
                  to={profile.website}
                  target="_blank"
                >
                  {profile.website}
                  <i className="fas fa-globe fa-2x" />
                </Link>
              )}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-twitter mr-2 icon-inline text-info"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
                Twitter
              </h6>
              <span>
                {isEmpty(profile.social && profile.social.twitter) ? null : (
                  <Link
                    className="text-white p-2"
                    to={profile.social.twitter}
                    target="_blank"
                  >
                    {profile.social.twitter}
                    <i className="fab fa-twitter fa-2x" />
                  </Link>
                )}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-instagram mr-2 icon-inline text-danger"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </h6>
              <span className="text-secondary">
                
                {isEmpty(profile.social && profile.social.instagram) ? null : (
                  <Link
                    className="text-white p-2"
                    to={profile.social.instagram}
                    target="_blank"
                  >
                    {profile.social.instagram}
                    <i className="fab fa-instagram fa-2x" />
                  </Link>
                )}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-facebook mr-2 icon-inline text-primary"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Facebook
              </h6>
              <span>
                {isEmpty(profile.social && profile.social.facebook) ? null : (
                  <Link
                    className="text-white p-2"
                    to={profile.social.facebook}
                    target="_blank"
                  >
                    {profile.social.facebook}
                    <i className="fab fa-facebook fa-2x" />
                  </Link>
                )}
              </span>
            </li>
          </ul>
        </div> */}
        {/* <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "600px",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <span className="mask bg-gradient-default opacity-8"></span>

          <div className="container-fluid d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <h1 className="display-2 text-white">
                  Hello {profile.user.name}
                </h1>
                <p className="text-white mt-0 mb-5">{profile.user.bio} </p>
                <Link to="/edit-profile" className="btn btn-info">
                  Edit profile
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        <div className="card-container" style={{ marginTop: "50px" }}>
          <span className="pro">PRO</span>
          <img className="round" src="" alt="User Photo" />
          <h3 className="white-text"></h3>
          <h6 className="teal">New York</h6>
          <p>
            {/* {isEmpty(profile.bio) ? (
              "Please Add Details in Bio कृपया बायो में जानकारी जोड़ें।"
            ) : (
              <span>at {profile.bio}</span>
            )} */}
            <br />
            front-end developer
            {/* {isEm} */}
          </p>
          <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary ghost" style={{ marginLeft: "50px" }}>
              Following
            </button>
          </div>
          <div className="skills">
            <h6 className="white-text">Gotra (गोत्र) </h6>
            <br />
            <h8 className="white-text">
              Total Family Member (कुल परिवार के सदस्य)
            </h8>
            <br />

            <ul>
              <li>UI / UX</li>
              <li>Front End Development</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileHeader;
