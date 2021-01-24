import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import { Alert } from "@material-ui/lab";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phoneNumber: "",
      password: "",
      password2: "",
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
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
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
            <div className="card-content valign center">
              <h5 className="card-title" style={{ marginTop: "20px" }}>
                रजिस्टर करें
              </h5>
              <p className="card-text">अपना सगाई पॉइंट अकाउंट बनाएं</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col s12 black-text">
                  <TextFieldGroup
                    placeholder="Name (नाम)"
                    name="name"
                    icon="person_outline"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name != null ? (
                    <Alert variant="filled" severity="error">
                      {errors.name}
                    </Alert>
                  ) : (
                    ""
                  )}
                </div>
                <div className="input-field col s12 black-text">
                  <TextFieldGroup
                    placeholder="Phone Number (संपर्क नंबर)"
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={this.onChange}
                    icon="local_phone"
                    info="This site uses Gravatar so if you want a profile image, use a Gravatar phoneNumber"
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
                    placeholder="Password (पासवर्ड)"
                    name="password"
                    type="password"
                    icon="lock_outline"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password != null ? (
                    <Alert variant="filled" severity="error">
                      {errors.password}
                    </Alert>
                  ) : (
                    ""
                  )}
                </div>
                <div className="input-field col s12 black-text">
                  <TextFieldGroup
                    placeholder="Confirm Password (पासवर्ड की पुष्टि कीजिये)"
                    name="password2"
                    type="password"
                    icon="lock_outline"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                  {errors.password2 != null ? (
                    <Alert variant="filled" severity="error">
                      {errors.password2}
                    </Alert>
                  ) : (
                    ""
                  )}
                </div>
                <input
                  type="submit"
                  className="waves-effect waves-light btn"
                  style={{ marginBottom: "20px" }}
                ></input>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
