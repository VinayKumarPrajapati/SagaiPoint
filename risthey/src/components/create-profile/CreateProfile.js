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
const abc = Math.random().toString(36).substring(9).toString();

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      gender: "",
      phone2: "",
      gotra: "",
      gotra2: "",
      status: "",
      city: "",
      status1: "",
      bio: "",
      userImage: "",
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
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      gender: this.state.gender,
      phone2: this.state.phone2,
      gotra: this.state.gotra,
      gotra2: this.state.gotra2,
      status: this.state.status,
      city: this.state.city,
      status1: this.state.status1,
      bio: this.state.bio,
      userImage: this.state.userImage,

      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      photos: this.state.photos,
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
                <form onSubmit={this.onSubmit} enctype="multipart/form-data">
                  <div className="white-text">
                    <TextFieldGroup
                      placeholder="Profile Handle (प्रोफाइल )"
                      name="handle"
                      value={this.state.handle}
                      type="text"
                      onChange={this.onChange}
                    />
                    {errors.handle != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.handle}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <p className="white-text">Gender (पुरुष / महिला)</p>
                    <label>
                      <input
                        name="gender"
                        type="radio"
                        value="male"
                        onChange={this.onChange}
                      />
                      <span className="white-text">Male (पुरुष)</span>
                    </label>
                    &nbsp; &nbsp; &nbsp;
                    <label>
                      <input
                        name="gender"
                        type="radio"
                        value="female"
                        onChange={this.onChange}
                      />
                      <span className="white-text">Female (महिला)</span>
                    </label>
                    <br />
                    <br />
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
                    <p>Gotra (गोत्र)</p>
                    <select
                      className="browser-default black-text"
                      style={{ maxWidth: "300px" }}
                      name="gotra"
                      onChange={this.onChange}
                    >
                      <option value="" disabled selected>
                        Choose your option (अपना विकल्प चुनें)
                      </option>
                      <option value="1">मारु</option>
                      <option value="2">हींकण</option>
                      <option value="3">खीटण</option>
                      <option value="4">मालविया</option>
                      <option value="5">खटटिया</option>
                      <option value="6">टाक</option>
                      <option value="7">खुदवइया</option>
                      <option value="8">सावलेचा</option>
                      <option value="9">मेडतिया</option>
                      <option value="10">चांदोरा</option>
                      <option value="11">नानेचा</option>
                      <option value="12">सरस्वा</option>
                      <option value="13">गोला/गोयल</option>
                      <option value="14">धोडावत</option>
                      <option value="15">काचा</option>
                      <option value="16">ओस्तवाल</option>
                      <option value="17">रामीणा</option>
                      <option value="18">गुजरीया</option>
                      <option value="19">कालोर</option>
                      <option value="20">सांगर</option>
                      <option value="21">गुगोमण</option>
                      <option value="22">जोजावर</option>
                      <option value="23">तिलायचा</option>
                      <option value="24">बागरेचा</option>
                      <option value="25">मेवाड़ा</option>
                      <option value="26">बागरी</option>
                      <option value="27">पाडेवा</option>
                      <option value="28">जालोरा</option>
                      <option value="29">मुलेवा</option>
                      <option value="30">रोटागणा</option>
                      <option value="31">वावदरा</option>
                      <option value="32">कोदालिया</option>
                      <option value="33">डिंगवा</option>
                      <option value="34">भीनमाला</option>
                      <option value="35">मंडोरा</option>
                      <option value="36">नारला</option>
                      <option value="37">बडवाल</option>
                      <option value="38">गुज़र</option>
                      <option value="39">देवड़ा</option>
                      <option value="40">परडिया</option>
                      <option value="41">बोरावड़</option>
                      <option value="42">फाटिया</option>
                      <option value="43">जोकरवाला</option>
                      <option value="44">सावलेचा</option>
                      <option value="45">बोईसा</option>
                      <option value="46">खरनालीया</option>
                      <option value="47">पाणेचा</option>
                      <option value="48">धनारिया</option>
                      <option value="49">डाबी</option>
                      <option value="50">सालेचा</option>
                      <option value="51">पेवा</option>
                      <option value="52">झोगरा</option>
                      <option value="53">परिघर</option>
                      <option value="54">दहिया</option>
                      <option value="55">भाटून्दरा</option>
                      <option value="56">धुमरिया</option>
                      <option value="57">परमार</option>
                      <option value="58">सोलंकी</option>
                      <option value="59">सणवेचा</option>
                      <option value="60">जेसातर</option>
                      <option value="61">परिहार</option>
                      <option value="62">सुदवेचा</option>
                      <option value="63">रोइवाल</option>
                    </select>
                    {errors.company != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.company}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <br />
                    <p className="white-text">
                      Write Gotra if it is not in list. (गोत्र यदि सूची में नहीं
                      है तो यहाँ लिखे।)
                    </p>
                    <TextFieldGroup
                      placeholder="Write Gotra if it is not in list. (गोत्र यदि सूची में नहीं है तो यहाँ 
                        लिखे।)"
                      name="gotra2"
                      value={this.state.gotra2}
                      onChange={this.onChange}
                    />
                    <SelectListGroup
                      placeholder="Status (स्थिति)"
                      name="status"
                      value={this.state.status}
                      onChange={this.onChange}
                      options={options}
                      error={errors.status}
                    />
                    {errors.status != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.status}
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
                      <input
                        name="status1"
                        type="radio"
                        value="job"
                        onChange={this.onChange}
                      />
                      <span className="white-text">Job (नौकरी)</span>
                    </label>
                    &nbsp; &nbsp; &nbsp;
                    <label>
                      <input
                        name="status1"
                        type="radio"
                        value="business"
                        onChange={this.onChange}
                      />
                      <span className="white-text">Business (व्यापार)</span>
                    </label>
                    &nbsp; &nbsp; &nbsp;
                    <label>
                      <input
                        name="status1"
                        type="radio"
                        value="study"
                        onChange={this.onChange}
                      />
                      <span className="white-text">Study (अध्ययन)</span>
                    </label>
                    <br />
                    <br />
                    <p className="white-text">
                      Please upload a photo by clicking on choose file. (कृपया
                      choose file पर क्लिक करके एक तस्वीर अपलोड करें। )
                    </p>
                    <input type="file" onChange={this.onFileChange} />
                    <br />
                    <br />
                    <p>अगर आपसे जुड़ी कोई जानकारी आप देना चाहते हैं।</p>
                    <TextAreaFieldGroup
                      placeholder="Please write it here. (कृपया उसे यहां लिखें।)"
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
                      <span className="white-text">
                        &nbsp; Optional (वैकल्पिक)
                      </span>
                    </div>
                    <br />
                    {socialInputs}
                    <center>
                      <input
                        type="submit"
                        value="Submit"
                        className="btn btn-info btn-block mt-4"
                        style={{ marginBottom: "10px" }}
                      />
                    </center>
                  </div>
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
