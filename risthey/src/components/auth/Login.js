import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
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
      email: this.state.email,
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
      <div class="container">
        <div class="forms-container">
          <div class="signin-signup">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <form action="#" class="sign-in-form">
                  <h2 class="title">कृपया लॉगिन करें</h2>

                  <div class="input-field">
                    <i class="fas fa-user-lock"></i>
                    <input
                      type="text"
                      placeholder="उपयोगकर्ता नाम (Username)"
                    />
                  </div>
                  <div class="input-field">
                    <i class="fas fa-user-lock"></i>
                    <input type="text" placeholder="पासवर्ड (Password)" />
                  </div>

                  <input type="submit" value="लॉग इन करें" class="btn solid" />
                  <p class="social-text">
                    या सामाजिक प्लेटफार्मों के साथ साइन इन करें (Or Sign in with
                    social platforms)
                  </p>
                  <div class="social-media">
                    <a href="#" class="social-icon">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="social-icon">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="social-icon">
                      <i class="fab fa-google"></i>
                    </a>
                    <a href="#" class="social-icon">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      // <div className="login">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-md-8 m-auto">
      //         <h1 className="display-4 text-center">Log In</h1>
      //         <p className="lead text-center">
      //           Sign in to your DevConnector account
      //         </p>
      //         <form onSubmit={this.onSubmit}>
      //           <TextFieldGroup
      //             placeholder="Email Address"
      //             name="email"
      //             type="email"
      //             value={this.state.email}
      //             onChange={this.onChange}
      //             error={errors.email}
      //           />

      //           <TextFieldGroup
      //             placeholder="Password"
      //             name="password"
      //             type="password"
      //             value={this.state.password}
      //             onChange={this.onChange}
      //             error={errors.password}
      //           />
      //           <input type="submit" className="btn btn-info btn-block mt-4" />
      //         </form>
      //       </div>
      //     </div>
      //   </div>
      // </div>
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
