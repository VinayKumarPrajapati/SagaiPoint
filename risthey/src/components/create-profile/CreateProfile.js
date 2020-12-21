import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile } from "../../actions/profileActions";
import { Alert } from "@material-ui/lab";

class CreateProfile extends Component {
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
      githubusername: "",
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
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
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">अपना प्रोफ़ाइल बनाए</h1>
              <p className="lead text-center">
                आइए अपनी प्रोफ़ाइल बनाने के लिए कुछ जानकारी प्राप्त करें
              </p>
              <small className="d-block pb-3">* =आवश्यक जानकारी</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* प्रोफ़ाइल नाम"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
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
                  value="{this.state.status}"
                  onChange={this.onChange}
                  options={options}
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
                />
                {errors.location != null ? (
                  <Alert variant="filled" severity="error">
                    {errors.location}
                  </Alert>
                ) : (
                  ""
                )}
                <TextFieldGroup
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                />
                {errors.skills != null ? (
                  <Alert variant="filled" severity="error">
                    {errors.skills}
                  </Alert>
                ) : (
                  ""
                )}
                <TextFieldGroup
                  placeholder="Github Username"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                />
                {errors.githubusername != null ? (
                  <Alert variant="filled" severity="error">
                    {errors.githubusername}
                  </Alert>
                ) : (
                  ""
                )}
                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                />
                {errors.bio != null ? (
                  <Alert variant="filled" severity="error">
                    {errors.bio}
                  </Alert>
                ) : (
                  ""
                )}
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState((prevState) => ({
                        displaySocialInputs: !prevState.displaySocialInputs,
                      }));
                    }}
                    className="btn btn-light"
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
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
