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
