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
import { Select } from "antd";

const { Option } = Select;

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
      bio: "",
      photos: "",
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
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      photos: this.state.photos,
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
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
        </div>
      );
    }

    // Select options for status
    const options = [
      { label: "* Select Your Profession (अपने पेशे का चयन करें)", value: 0 },
      { label: "grocery Store (किराना स्टोर)", value: "grocery" },
      { label: "Floor Factory (फ्लोर फैक्ट्री)", value: "mill" },
      { label: "Job in MNC", value: "Job in MNC" },
      {
        label: "Accountant (अकाउंटेंट)",
        value: "Accountant",
      },
      {
        label: "Bank Job (बैंक में नौकरी)",
        value: "Bank",
      },
      {
        label: "salesmen",
        value: "salesmen",
      },
      { label: "CA", value: "CA" },

      { label: "Lawyer", value: "Lawyer" },
      { label: "Computer Engineer", value: "Computer Engineer" },
      { label: "Other Job (अन्य नौकरी)", value: "Other Job" },
      { label: "Other Business (अन्य व्यापार)", value: "Other Business" },
    ];

    return (
      <div className="create-profile">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="container">
          <div className="row">
            <div className="card blue-grey darken-1 col s12">
              <div className="col-md-8 m-auto">
                <h1
                  className="display-4 text-center white-text"
                  style={{ marginTop: "20px" }}
                >
                  अपना प्रोफ़ाइल बनाए
                </h1>
                <p className="lead text-center white-text">
                  आइए अपनी प्रोफ़ाइल बनाने के लिए कुछ जानकारी प्राप्त करें
                </p>
                <small className="d-block pb-3 white-text">
                  * =आवश्यक जानकारी
                </small>
                <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="* Profile name (प्रोफ़ाइल नाम) "
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChange}
                    info="you can use anything like spiderman123 etc. but you can not use which is taken by someone already.  आप कुछ भी इस्तेमाल कर सकते हैं जैसे कि स्पाइडरमैन123 आदि। लेकिन आप उपयोग नहीं कर सकते हैं जो पहले से ही किसी के द्वारा लिया गया है।"
                  />
                  {errors.handle != null ? (
                    <Alert variant="filled" severity="error">
                      {errors.handle}
                    </Alert>
                  ) : (
                    ""
                  )}
                  <SelectListGroup
                    placeholder="Status (स्थिति)"
                    name="status"
                    value={this.state.status}
                    onChange={this.onChange}
                    options={options}
                    error={errors.status}
                  />
                  <p className="text-warning">
                    हमें अपनी नौकरी या व्यवसाय के बारे में बताइये
                  </p>
                  {errors.status != null ? (
                    <Alert variant="filled" severity="error">
                      {errors.status}
                    </Alert>
                  ) : (
                    ""
                  )}
                  <TextFieldGroup
                    placeholder="Company (कंपनी)"
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
                    placeholder="Website (वेबसाइट)"
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
                    placeholder="Location (स्थान)"
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
                    placeholder="* Skills (कौशल)"
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
                  <TextAreaFieldGroup
                    placeholder="Your Bio (संक्षिप्त अपने बारे में)"
                    name="bio"
                    className="white-text"
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

                  <div className="file-field input-field">
                    <div className="btn">
                      <p id="align-top"> कृपया फोटो अपलोड करें</p>
                      <input
                        type="file"
                        value={this.state.photos}
                        onChange={this.onChange}
                      />
                      {errors.photos != null ? (
                        <Alert variant="filled" severity="error">
                          {errors.photos}
                        </Alert>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="file-path-wrapper white-text">
                      <input className="file-path validate" type="text" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <button
                      type="button"
                      onClick={() => {
                        this.setState((prevState) => ({
                          displaySocialInputs: !prevState.displaySocialInputs,
                        }));
                      }}
                      className="btn btn-primary white-text"
                    >
                      Add Social Network Links
                    </button>
                    <span className="white-text">Optional (वैकल्पिक)</span>
                  </div>
                  {socialInputs}
                  <center>
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-info btn-block mt-4"
                      style={{ marginBottom: "10px" }}
                    />
                  </center>
                </form>
              </div>
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
