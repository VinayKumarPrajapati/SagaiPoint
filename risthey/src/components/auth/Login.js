import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import { Alert } from "@material-ui/lab";
import { Link } from "react-router-dom";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div id="login-page" className="row" style={{ marginTop: "20px" }}>
          <div className="col s12 z-depth-6 card-panel">
            <form className="login-form" onSubmit={this.onSubmit}>
              <div className="card-content valign center">
                <div>
                  <br />
                  <div className="card-action teal lighten-1">
                    <h3 className="white-text">अपने अकाउंट में लॉगिन करें</h3>
                  </div>
                </div>
                <br />
                <div className="input-field col s12 black-text">
                  <TextFieldGroup
                    placeholder="(संपर्क नंबर) Phone number"
                    name="phoneNumber"
                    id="phone"
                    value={this.state.phoneNumber}
                    onChange={this.onChange}
                    icon="local_phone"
                  />
                  {errors.phoneNumber != null ? (
                    <Alert variant="filled" severity="error">
                      {errors.phoneNumber}
                    </Alert>
                  ) : (
                    ""
                  )}
                </div>
                <div className="input-field col s12 black-text">
                  <TextFieldGroup
                    placeholder="(पासवर्ड) Password "
                    name="password"
                    type="password"
                    id="pass"
                    value={this.state.password}
                    onChange={this.onChange}
                    icon="lock_outline"
                  />
                  {errors.password != null ? (
                    <Alert variant="filled" severity="error">
                      {errors.password}
                    </Alert>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="center-align">
                <input
                  type="submit"
                  className="waves-effect waves-light btn"
                ></input>
              </div>
              <div className="row">
                <div className="input-field col s6 m6 l6">
                  <p className="margin medium-small">
                    <Link to="/register">अभी रजिस्टर करें!</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
