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
          {/* <div className="main-content">
            {/* <div
              className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
              style={{{{
          }}      minHeight: "600px",
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
          {/* <ProfileHeader profile={profile} />
            <div className="container-fluid mt--7">
              <ProfileAbout profile={profile} />
            </div>
          </div> */}
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
        {/* <ProfileHeader profile={profile} /> */}
        <div className="row">
          <div className="col s12 m5">
            <div className="card">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <center>
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Admin"
                        className="rounded-circle"
                        width="150"
                      />
                    </center>
                    <br />
                    <div className="mt-3">
                      <center>
                        <h4>Vinaykumar Prajapati</h4>
                        <p className="text-secondary mb-1 black-text">
                          Full Stack Developer
                        </p>
                        <p className="text-muted font-size-sm">
                          Ahmedabad, India
                        </p>
                      </center>
                      <br />
                      <button className="btn btn-primary">Follow</button>
                      <button
                        className="btn btn-outline-primary"
                        style={{ marginLeft: "50px" }}
                      >
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m7">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0" style={{ marginLeft: "20px" }}>
                      Full Name (पूरा नाम)
                    </h6>
                  </div>
                  <div
                    className="col-sm-9 text-secondary"
                    style={{ marginLeft: "20px" }}
                  >
                    Vinaykumar Prajapati
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0" style={{ marginLeft: "20px" }}>
                      Email (ईमेल)
                    </h6>
                  </div>
                  <div
                    className="col-sm-9 text-secondary"
                    style={{ marginLeft: "20px" }}
                  >
                    vinay.prajapati@sagaipoint.com
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0" style={{ marginLeft: "20px" }}>
                      Phone (संपर्क नंबर)
                    </h6>
                  </div>
                  <div
                    className="col-sm-9 text-secondary"
                    style={{ marginLeft: "20px" }}
                  >
                    +91 6239009974
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0" style={{ marginLeft: "20px" }}>
                      Phone 2 (संपर्क नंबर - 2)
                    </h6>
                  </div>
                  <div
                    className="col-sm-9 text-secondary"
                    style={{ marginLeft: "20px" }}
                  >
                    +91 6239009974
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0" style={{ marginLeft: "20px" }}>
                      Current City / Villege (वर्तमान शहर / गाँव)
                    </h6>
                  </div>
                  <div
                    className="col-sm-9 text-secondary"
                    style={{ marginLeft: "20px" }}
                  >
                    Ahmedabad, India
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0" style={{ marginLeft: "20px" }}>
                      Address (पता)
                    </h6>
                  </div>
                  <div
                    className="col-sm-9 text-secondary"
                    style={{ marginLeft: "20px" }}
                  >
                    Ahmedabad, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <br />
              <center>
                <h6 className="d-flex align-items-center mb-3">
                  Other Information (अन्य जानकारी)
                </h6>
              </center>
              <small>
                Other Details Related to Family (परिवार से संबंधित अन्य जानकारी)
              </small>
              <div className="progress mb-3" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small>Do You Wear Specs (क्या आप चश्मा पहनते हैं?)</small>
              <div className="progress mb-3" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "72%" }}
                  aria-valuenow="72"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small>Height / Weight (ऊंचाई / वजन)</small>
              <div className="progress mb-3" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "89%" }}
                  aria-valuenow="89"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small>Vehicle-related information (वाहन संबंधी जानकारी) </small>
              <div className="progress mb-3" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "55%" }}
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small>
                Current Status Job/Business/Education (वर्तमान स्थिति नौकरी /
                व्यवसाय /अध्ययन)
              </small>
              <div className="progress mb-3" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "55%" }}
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small>Do You Wear Specs (क्या आप चश्मा पहनते हैं?)</small>
              <div className="progress mb-3" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "66%" }}
                  aria-valuenow="66"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
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
