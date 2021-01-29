import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import ProfileActions from "./ProfileActions";
import Experience from "./Experience";
import Education from "./Education";
import Family from "./Family";
// import FamilyMember from "./FamilyMember";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div className="row">
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <img src={profile.user.photo} />
            <br />
            <hr />
            <br />
            <h4 className="white-text">
              स्वागत हे आपका
              <Link
                to={`/profile/${profile.handle}`}
                style={{ marginLeft: "10px" }}
                className="light-green accent-3"
              >
                {user.name}
              </Link>
            </h4>
            <br />
            <div>
              <ProfileActions />
            </div>

            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <Family family={profile.family} />
            <div className="center-align" style={{ marginTop: "10px" }}>
              <button
                type="button"
                onClick={this.onDeleteClick.bind(this)}
                className="btn btn-success center-align"
              >
                मेरा एकाउंट हटा दो
              </button>
            </div>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <br />
            <div className="row">
              <div className="col s12 m6">
                <div className="card teal darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">
                      स्वागत हे आपका {user.name}
                    </span>
                    <br />
                    <p className="white-text">
                      आपने अभी तक प्रोफ़ाइल सेटअप नहीं किया है, कृपया कुछ
                      जानकारी जोड़ें
                    </p>
                    <br />
                    <br />
                    <Link
                      className="btn btn-lg white-text"
                      to="/create-profile"
                    >
                      जानकारी जोड़ें
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    return (
      <>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="dashboard text-center">
          <h2 className="white-text">पधारो महारे प्लेटफार्म</h2>
          <div className="row">{dashboardContent}</div>
        </div>
      </>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
