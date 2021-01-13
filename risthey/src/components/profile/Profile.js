import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import Spinner from "../common/Spinner";
import { getProfileByHandle } from "../../actions/profileActions";

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
          {" "}
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <ProfileHeader profile={profile} />
            </div>
            <div className="col-md-8">
              <ProfileAbout profile={profile} />

              <ProfileCreds
                education={profile.education}
                experience={profile.experience}
                family={profile.family}
                // familyMember={profile.familyMember}
              />
            </div>
          </div>
        </>
      );
    }

    return (
      // <div className="profile">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-md-12">{profileContent}</div>
      //     </div>
      //   </div>
      // </div>
      <>
        <div className="container">
          <div className="main-body">{profileContent}</div>
        </div>
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
