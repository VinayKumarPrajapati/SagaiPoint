import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
// import "../layout/landing/css/bootstrap.min.css";
// import "../layout/landing/css/material.min.css";
// import "../layout/landing/css/ripples.min.css";
// import "../layout/landing/css/main.css";
// import "../layout/landing/css/responsive.css";
// import "../layout/landing/css/animate.min.css";
// import "../layout/landing/js/jquery-2.1.4.min.js";
// import "../layout/landing/js/bootstrap.min.js";
// import "../layout/landing/js/ripples.min.js";
// import "../layout/landing/js/material.min.js";
// import "../layout/landing/js/wow.js";
// import "../layout/landing/js/jquery.mmenu.min.all.js";
// import "../layout/landing/js/count-to.js";
// import "../layout/landing/js/jquery.inview.min.js";
// import "../layout/landing/js/main.js";
// import "../layout/landing/js/classie.js";
// import "../layout/landing/js/jquery.nav.js";
// import "../layout/landing/js/smooth-on-scroll.js";
// import "../layout/landing/js/smooth-scroll.js";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4 text-white">सगाई पॉइंट</h1>
                  <p className="lead">
                    <div className="card-panel teal lighten-2">
                      एक प्रोफ़ाइल / पोर्टफोलियो बनाएं, मेटरमोनियल रिज्यूमे साझा
                      करें और अपने भविष्य के जीवन-साथी के साथ जुड़ें
                    </div>
                  </p>
                  <hr />
                  <Link to="/register" className="btn btn-lg btn-info mr-2">
                    रजिस्टर करें
                  </Link>
                  <Link to="/login" className="btn btn-lg btn-info mr-2">
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
