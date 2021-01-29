import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfileByHandle } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import ProfileAbout from "./ProfileAbout";
import ProfileHeader from "./ProfileHeader";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push("/not-found");
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <>
          {/* <div className="row">
            <div className="col s12 m6">
              <ProfileHeader profile={profile} />
            </div>
            <div className="col s12 m6">
              <ProfileAbout profile={profile} />
              <ProfileCreds
                education={profile.education}
                experience={profile.experience}
                family={profile.family}
                // familyMember={profile.familyMember}
              />
            </div>
          </div> */}
          <div className="main-content">
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
                    <h1 className="display-2 text-white">Hello Jesse</h1>
                    <p className="text-white mt-0 mb-5">
                      This is your profile page. You can see the progress you've
                      made with your work and manage your projects or assigned
                      tasks
                    </p>
                    <Link to="#!" className="btn btn-info">
                      Edit profile
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
            <ProfileHeader profile={profile} />
            <div className="container-fluid mt--7">
              <ProfileAbout profile={profile} />
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        {/* <div className="container">
          <div className="main-body">{profileContent}</div>
        </div> */}
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <ProfileHeader profile={profile} />
      </>
    );
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);
