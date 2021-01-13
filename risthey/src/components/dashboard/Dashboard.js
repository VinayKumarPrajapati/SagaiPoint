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
          <div>
            <br />
            <hr />
            <p className=" text-white">
              स्वागत हे आपका
              <Link
                to={`/profile/${profile.handle}`}
                style={{ marginLeft: "10px" }}
                className="text-light"
              >
                {user.name}
              </Link>
            </p>
            <div>
              <ProfileActions />
            </div>
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <Family family={profile.family} />
            {/* <FamilyMember familyMember={profile.familyMember} /> */}
            <div style={{ marginBottom: "60px" }} className="text-white" />
            <button
              type="button"
              onClick={this.onDeleteClick.bind(this)}
              className="btn"
            >
              मेरा एकाउंट हटा दो
            </button>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <br />

            <p className="text-white">
              स्वागत हे आपका
              <br />
              {user.name}
            </p>
            <p>
              आपने अभी तक प्रोफ़ाइल सेटअप नहीं किया है, कृपया कुछ जानकारी जोड़ें
            </p>

            <Link className="btn btn-lg text-white" to="/create-profile">
              जानकारी जोड़ें
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard text-center">
        <div className="row">
          <div className="card-content card-panel teal lighten-2 text-white text-center">
            पधारो महारे प्लेटफार्म
          </div>

          {dashboardContent}
        </div>
      </div>
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
