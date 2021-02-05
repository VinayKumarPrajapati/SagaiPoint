import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import isEmpty from "../../validation/is-empty";
import { Alert } from "@material-ui/lab";
class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      gender: "",
      phone: "",
      profileImg: "",
      phone2: "",
      gotra: "",
      userImage: "",
      gotra2: "",
      status: "",
      city: "",
      status1: "",
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
    this.onFileChange = this.onFileChange.bind(this);
  }
  onFileChange(e) {
    this.setState({ userImage: e.target.files[0] });
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
      // const skillsCSV = profile.skills.join(",");

      // If profile field doesnt exist, make empty string
      profile.gender = !isEmpty(profile.gender) ? profile.gender : "";
      profile.phone = !isEmpty(profile.phone) ? profile.phone : "";
      profile.phone2 = !isEmpty(profile.phone2) ? profile.phone2 : "";
      profile.gotra = !isEmpty(profile.gotra) ? profile.gotra : "";
      profile.gotra2 = !isEmpty(profile.gotra2) ? profile.gotra2 : "";
      profile.userImage = !isEmpty(profile.userImage) ? profile.userImage : "";
      profile.status = !isEmpty(profile.status) ? profile.status : "";
      profile.city = !isEmpty(profile.city) ? profile.city : "";
      profile.status1 = !isEmpty(profile.status1) ? profile.status1 : "";
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
        gender: profile.gender,
        phone: profile.phone,
        phone2: profile.phone2,
        gotra: profile.gotra,
        gotra2: profile.gotra2,
        // skills: skillsCSV,
        status: profile.status,
        city: profile.city,
        status1: profile.status1,
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

    const profileData = {
      handle: this.state.handle,
      gender: this.state.gender,
      phone: this.state.phone,
      phone2: this.state.phone2,
      gotra: this.state.gotra,
      gotra2: this.state.gotra2,
      userImage: this.state.userImage,
      // skills: this.state.skills,
      status: this.state.status,
      city: this.state.city,
      status1: this.state.status1,
      bio: this.state.bio,

      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram,
    };

    const formData = new FormData();
    formData.append("userImage", this.state.userImage);

    this.props.createProfile(profileData, formData, this.props.history);
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
                  <Link
                    to="/dashboard"
                    className="btn btn-primary"
                    style={{ marginTop: "20px" }}
                  >
                    Go Back
                  </Link>
                  <h2 className="display-4 text-center white-text">
                    Edit Profile (प्रोफ़ाइल परिवर्तन करें)
                  </h2>
                  <small className="d-block pb-3">
                    <p className="white-text">* = required fields</p>
                  </small>

                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="Profile Handle (दूसरा संपर्क नंबर)"
                      name="handle"
                      value={this.state.handle}
                      type="hidden"
                      onChange={this.onChange}
                    />
                    {errors.handle != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.handle}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <TextFieldGroup
                      placeholder="Phone Number- 2 (दूसरा संपर्क नंबर)"
                      name="phone2"
                      value={this.state.phone2}
                      onChange={this.onChange}
                    />
                    {errors.phone2 != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.phone2}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <p className="text-warning">
                      कृपया हमें अपने शहर के बारे में जानकारी दें।
                    </p>
                    <TextFieldGroup
                      placeholder="your city name (आपके शहर का नाम)"
                      name="city"
                      value={this.state.city}
                      onChange={this.onChange}
                    />
                    {errors.city != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.city}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <p className="white-text">
                      Current Status (आपकी वर्तमान स्थिति / आप अभी क्या कर रहे
                      हो?)
                    </p>
                    <label>
                      <input name="status" type="radio" />
                      <span className="white-text">Job (नौकरी)</span>
                    </label>
                    &nbsp; &nbsp; &nbsp;
                    <label>
                      <input name="status" type="radio" />
                      <span className="white-text">Business (व्यापार)</span>
                    </label>
                    &nbsp; &nbsp; &nbsp;
                    <label>
                      <input name="status" type="radio" />
                      <span className="white-text">Study (अध्ययन)</span>
                    </label>
                    {errors.status != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.status}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <br />
                    <br />
                    {/* <TextFieldGroup
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
                    )} */}
                    <p className="white-text">
                      Current Status (आपकी वर्तमान स्थिति / आप अभी क्या कर रहे
                      हो?)
                    </p>
                    <label>
                      <input name="status1" type="radio" />
                      <span className="white-text">Job (नौकरी)</span>
                    </label>
                    &nbsp; &nbsp; &nbsp;
                    <label>
                      <input name="status1" type="radio" />
                      <span className="white-text">Business (व्यापार)</span>
                    </label>
                    &nbsp; &nbsp; &nbsp;
                    <label>
                      <input name="status1" type="radio" />
                      <span className="white-text">Study (अध्ययन)</span>
                    </label>
                    <br />
                    <br />
                    <input type="file" onChange={this.onFileChange} />
                    <br />
                    <br />
                    <p>अगर आपसे जुड़ी कोई जानकारी आप देना चाहते हैं।</p>
                    <TextAreaFieldGroup
                      placeholder="Please write it here. (कृपया उसे यहां लिखें।)"
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
                      <span className="text-muted">
                        &nbsp;&nbsp;&nbsp; Optional
                      </span>
                    </div>
                    {socialInputs}
                    <center>
                      <input
                        type="submit"
                        value="Submit"
                        className="btn btn-info btn-block mt-4 "
                        style={{ marginBottom: "20px" }}
                      />
                    </center>
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
