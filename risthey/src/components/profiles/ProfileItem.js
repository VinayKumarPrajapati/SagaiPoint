import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import "./profile.css";
class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <>
        <div className="row gutters-sm">
          <div className="card" style={{ marginLeft: "100px" }}>
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={profile.user.avatar}
                  alt="user image"
                  className="rounded-circle"
                  width="150"
                />
                <div className="mt-3">
                  <h4>{profile.user.name}</h4>
                  <p className="text-secondary mb-1">
                    {profile.status}
                    {isEmpty(profile.company) ? null : (
                      <span>at {profile.company}</span>
                    )}
                  </p>
                  <p className="text-muted font-size-sm">
                    {isEmpty(profile.location) ? null : (
                      <span>{profile.location}</span>
                    )}
                  </p>
                  <Link
                    to={`/profile/${profile.handle}`}
                    className="btn btn-primary"
                  >
                    View Profile
                  </Link>
                  <p>Date of Marriage (शादी की तारीख)</p>
                  <button className="btn btn-outline-primary">Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
