import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4 white-text">सगाई पॉइंट</h1>
                  <p className="lead">
                    <div className="card-panel teal lighten-2 white-text">
                      एक प्रोफ़ाइल / पोर्टफोलियो बनाएं, मेटरमोनियल रिज्यूमे साझा
                      करें और अपने भविष्य के जीवन-साथी के साथ जुड़ें
                    </div>
                  </p>
                  <hr />

                  <Link
                    to="/register"
                    className="btn btn-primary text-white"
                    style={{ marginTop: "20px" }}
                  >
                    रजिस्टर करें
                  </Link>
                  <Link
                    to="/login"
                    className="btn btn-primary text-white"
                    style={{ marginLeft: "20px", marginTop: "20px" }}
                  >
                    लॉग इन करें
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="navbar navbar-invers menu-wrap">
          <div className="navbar-header text-center">
            <Link className="navbar-brand logo-right" to="javascript:void(0)">
              <i className="mdi-image-timelapse"></i>सगाई पॉइंट
            </Link>
          </div>
          <ul className="nav navbar-nav main-navigation">
            <li className="active">
              <Link to="#home">Home</Link>
            </li>
            <li>
              <Link to="#features">Features</Link>
            </li>
            <li>
              <Link to="#why">why</Link>
            </li>
            <li>
              <Link to="#screenshot">Screenshots</Link>
            </li>
            <li>
              <Link to="#testimonial">Testimonial</Link>
            </li>
            <li>
              <Link to="#clients">contract</Link>
            </li>
          </ul>
          <button className="close-button" id="close-button">
            Close Menu
          </button>
        </div>

        <div className="content-wrap"> */}
      </>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
