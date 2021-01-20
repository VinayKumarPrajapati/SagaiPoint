import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import isEmpty from "../../validation/is-empty";
import { Alert } from "@material-ui/lab";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class CreateProfile extends Component {
  notify = () => toast("Profile information is successfully updated");

  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // Bring skills array back to CSV
      const skillsCSV = profile.skills.join(",");

      // If profile field doesnt exist, make empty string
      profile.company = !isEmpty(profile.company) ? profile.company : "";
      profile.website = !isEmpty(profile.website) ? profile.website : "";
      profile.location = !isEmpty(profile.location) ? profile.location : "";

      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.twitter = !isEmpty(profile.social.twitter)
        ? profile.social.twitter
        : "";
      profile.facebook = !isEmpty(profile.social.facebook)
        ? profile.social.facebook
        : "";
      profile.linkedin = !isEmpty(profile.social.linkedin)
        ? profile.social.linkedin
        : "";
      profile.youtube = !isEmpty(profile.social.youtube)
        ? profile.social.youtube
        : "";
      profile.instagram = !isEmpty(profile.social.instagram)
        ? profile.social.instagram
        : "";

      // Set component fields state
      this.setState({
        handle: profile.handle,
        company: profile.company,
        website: profile.website,
        location: profile.location,
        status: profile.status,
        skills: skillsCSV,
        bio: profile.bio,
        twitter: profile.twitter,
        facebook: profile.facebook,
        linkedin: profile.linkedin,
        youtube: profile.youtube,
        instagram: profile.instagram,
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.notify();

    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram,
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
          />
          {errors.twitter != null ? (
            <Alert variant="filled" severity="error">
              {errors.twitter}
            </Alert>
          ) : (
            ""
          )}
          <InputGroup
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
          />
          {errors.facebook != null ? (
            <Alert variant="filled" severity="error">
              {errors.facebook}
            </Alert>
          ) : (
            ""
          )}
          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
          />
          {errors.linkedin != null ? (
            <Alert variant="filled" severity="error">
              {errors.linkedin}
            </Alert>
          ) : (
            ""
          )}
          <InputGroup
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
          />
          {errors.youtube != null ? (
            <Alert variant="filled" severity="error">
              {errors.youtube}
            </Alert>
          ) : (
            ""
          )}
          <InputGroup
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
          />
          {errors.instagram != null ? (
            <Alert variant="filled" severity="error">
              {errors.instagram}
            </Alert>
          ) : (
            ""
          )}
        </div>
      );
    }

    // Select options for status
    const options = [
      { label: "* Select Professional Status", value: 0 },
      { label: "Developer", value: "Developer" },
      { label: "Junior Developer", value: "Junior Developer" },
      { label: "Senior Developer", value: "Senior Developer" },
      { label: "Manager", value: "Manager" },
      { label: "Student or Learning", value: "Student or Learning" },
      { label: "Instructor or Teacher", value: "Instructor or Teacher" },
      { label: "Intern", value: "Intern" },
      { label: "Other", value: "Other" },
    ];

    return (
      <>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="create-profile">
          <div className="container">
            <div className="row">
              <div className="card blue-grey darken-1 col s12">
                <div className="col-md-8 m-auto white-text">
                  <Link to="/dashboard" className="btn btn-primary">
                    Go Back
                  </Link>
                  <h1 className="display-4 text-center white-text">
                    Edit Profile (प्रोफ़ाइल परिवर्तन करें)
                  </h1>
                  <small className="d-block pb-3">* = required fields</small>
                  <ToastContainer />
                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="* Profile Handle"
                      name="handle"
                      value={this.state.handle}
                      onChange={this.onChange}
                      info="A unique handle for your profile URL. Your full name, company name, nickname"
                    />
                    {errors.handle != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.handle}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <SelectListGroup
                      placeholder="Status"
                      name="status"
                      value={this.state.status}
                      onChange={this.onChange}
                      options={options}
                      info="Give us an idea about your job or businesss"
                    />
                    {errors.status != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.status}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <TextFieldGroup
                      placeholder="Company"
                      name="company"
                      value={this.state.company}
                      onChange={this.onChange}
                      info="Could be your own company or one you work for"
                    />
                    {errors.company != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.company}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <TextFieldGroup
                      placeholder="Website"
                      name="website"
                      value={this.state.website}
                      onChange={this.onChange}
                      info="Could be your own website or a company one"
                    />
                    {errors.website != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.website}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <TextFieldGroup
                      placeholder="Location"
                      name="location"
                      value={this.state.location}
                      onChange={this.onChange}
                      error={errors.location}
                      info="City or city & state suggested (eg. Boston, MA)"
                    />
                    <TextFieldGroup
                      placeholder="* Skills"
                      name="skills"
                      value={this.state.skills}
                      onChange={this.onChange}
                      error={errors.skills}
                      info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP"
                    />

                    <TextAreaFieldGroup
                      placeholder="Short Bio"
                      name="bio"
                      value={this.state.bio}
                      onChange={this.onChange}
                      error={errors.bio}
                      info="Tell us a little about yourself"
                    />

                    <div className="mb-3">
                      <button
                        type="button"
                        style={{ marginBottom: "20px" }}
                        onClick={() => {
                          this.setState((prevState) => ({
                            displaySocialInputs: !prevState.displaySocialInputs,
                          }));
                        }}
                        className="btn btn-primary"
                      >
                        Add Social Network Links
                      </button>
                      <span className="text-muted">Optional</span>
                    </div>
                    {socialInputs}
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-info btn-block mt-4"
                      style={{
                        marginBottom: "20px",
                        textAlign: "center",
                      }}
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

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);
