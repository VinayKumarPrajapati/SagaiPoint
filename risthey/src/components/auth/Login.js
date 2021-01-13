import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import { Alert } from "@material-ui/lab";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const notify = (msg) => toast(msg);

    return (
      <div className="align-items-center">
        <div className="row">
          <div className="col s6">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text text-center">
                  <h1 className="display-4 text-center white-text">
                    लॉग इन करें
                  </h1>
                  <p className="lead text-center">
                    अपने सगई पॉइंट अकाउंट में लॉगिन करें
                  </p>
                  <br />
                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="Phone number (संपर्क नंबर)"
                      name="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={this.onChange}
                    />
                    {errors.phoneNumber != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.phoneNumber}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <TextFieldGroup
                      placeholder="Password  (पासवर्ड)"
                      name="password"
                      type="password"
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

                    <input
                      type="submit"
                      className="waves-effect waves-light btn align-center"
                    ></input>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
