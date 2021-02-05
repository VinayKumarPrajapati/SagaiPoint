import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import "../../css/materialize.min.css";
class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <>
        {/* <div>
          <div
            className="card-body"
            style={{
              backgroundColor: "cornsilk",
              maxWidth: "180px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "spaceBetween",
            }}
          >
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
                View
              </Link>
              <p>Date of Marriage (शादी की तारीख)</p>
              <button className="btn btn-outline-primary">Message</button>
            </div>
          </div>
        </div> */}

        <div className="row">
          <div className="col-lg-4">
            <div className="text-center card-box">
              <div className="member-card pt-2 pb-2">
                <div className="thumb-lg member-thumb mx-auto">
                  <img
                    src={profile.user.avatar}
                    className="rounded-circle img-thumbnail"
                    alt="profile-image"
                  />
                </div>
                <div className="">
                  <h4>{profile.user.name}</h4>
                  <p className="text-muted">
                    {profile.status} <span>| </span>
                    <span>
                      <Link to="/" className="text-pink">
                        {isEmpty(profile.company) ? (
                          ""
                        ) : (
                          <span>at {profile.company}</span>
                        )}
                      </Link>
                    </span>
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                >
                  Send best wishes (शुभकामनाएँ भेजें)
                </button>
                <div className="mt-4">
                  <div className="row">
                    <div className="col-4">
                      <div className="mt-3">
                        <p className="mb-0 text-muted">Engagment at</p>
                        <h4>
                          {profile.engagment == null
                            ? "Information is not available (जानकारी उपलब्ध नहीं है)"
                            : profile.engagment}
                        </h4>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="mt-3">
                        <p className="mb-0 text-muted">Registered Date</p>

                        <h4>
                          {new Date(profile.date).toLocaleString(undefined, {
                            timeZone: "Asia/Kolkata",
                          })}
                        </h4>
                      </div>
                    </div>
                  </div>
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
