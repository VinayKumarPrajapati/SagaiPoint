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
      <div className="register">
        <div className="row">
          <div className="col s6">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text text-center">
                  <h1 className="display-4 text-center white-text">
                    रजिस्टर करें
                  </h1>
                  <p className="lead text-center">
                    अपना सगाई पॉइंट अकाउंट बनाएं
                  </p>
                  <form noValidate onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="Name (नाम)"
                      name="name"
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
                    <TextFieldGroup
                      placeholder="Phone Number (संपर्क नंबर)"
                      name="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={this.onChange}
                      info="This site uses Gravatar so if you want a profile image, use a Gravatar phoneNumber"
                    />
                    {errors.phoneNumber != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.phoneNumber}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <TextFieldGroup
                      placeholder="Password (पासवर्ड)"
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
                    <TextFieldGroup
                      placeholder="Confirm Password (पासवर्ड की पुष्टि कीजिये)"
                      name="password2"
                      type="password"
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

                    <input
                      type="submit"
                      className="waves-effect waves-light btn"
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
