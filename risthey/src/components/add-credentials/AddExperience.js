import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addExperience } from "../../actions/profileActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Alert } from "@material-ui/lab";

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      title: "",
      location: "",
      from: "",
      to: "",
      current: false,
      description: "",
      errors: {},
      disabled: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  notify = () => toast("Experience Details has been successfully Added");

  onSubmit(e) {
    e.preventDefault();
    this.notify();

    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description,
    };

    this.props.addExperience(expData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current,
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="create-profile">
          <div className="container">
            <div className="row">
              <div className="card blue-grey darken-1 col s12">
                <div className="col-md-8 m-auto">
                  <Link
                    to="/dashboard"
                    className="btn btn-primary"
                    style={{ marginTop: "10px" }}
                  >
                    Go Back
                  </Link>
                  <h1 className="display-4 text-center white-text">
                    Add Experience
                  </h1>
                  <p className="lead text-center white-text">
                    Add any job or position that you have had in the past or
                    current
                  </p>
                  <ToastContainer />
                  <small className="d-block pb-3">* = required fields</small>
                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="* company (कंपनी)"
                      name="company"
                      value={this.state.company}
                      onChange={this.onChange}
                    />
                    {errors.company != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.company}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <TextFieldGroup
                      placeholder="* Job Title (जॉब शीर्षक)"
                      name="title"
                      value={this.state.title}
                      onChange={this.onChange}
                      error={errors.title}
                    />
                    <TextFieldGroup
                      placeholder="Location (स्थान)"
                      name="location"
                      value={this.state.location}
                      onChange={this.onChange}
                      error={errors.location}
                    />
                    <h6 className="white-text">From Date</h6>
                    <TextFieldGroup
                      name="from"
                      type="date"
                      value={this.state.from}
                      onChange={this.onChange}
                      error={errors.from}
                    />
                    <h6 className="white-text">To Date</h6>
                    <TextFieldGroup
                      name="to"
                      type="date"
                      value={this.state.to}
                      onChange={this.onChange}
                      error={errors.to}
                      disabled={this.state.disabled ? "disabled" : ""}
                    />
                    <div className="form-check mb-4">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="current"
                        value={this.state.current}
                        checked={this.state.current}
                        onChange={this.onCheck}
                        id="current"
                      />
                      <label htmlFor="current" className="form-check-label">
                        Current Job
                      </label>
                    </div>
                    <TextAreaFieldGroup
                      placeholder="Job Description (नौकरी से संबंधित जानकारी)"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                      error={errors.description}
                      className="white-text"
                      info="Tell us about the the position (हमें स्थिति के बारे में बताएं)"
                    />

                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-info btn-block mt-4"
                      style={{ marginBottom: "20px", marginLeft: "250px" }}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { addExperience })(
  withRouter(AddExperience)
);
