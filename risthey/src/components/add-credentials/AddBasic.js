import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Alert } from "@material-ui/lab";
import { addBasic } from "../../actions/profileActions";
class AddBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      engaged: "",
      degree: "",
      totalSiblings: "",
      specialEnable: "",
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

  onSubmit(e) {
    e.preventDefault();

    const eduData = {
      engaged: this.state.engaged,
      degree: this.state.degree,
      totalSiblings: this.state.totalSiblings,
      specialEnable: this.state.specialEnable,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description,
    };

    this.props.addBasic(eduData, this.props.history);
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
                  <br />
                  <br />
                  <h2 className="display-4 text-center white-text">
                    बुनियादी जानकारी जोड़ें
                  </h2>
                  <p className="lead text-center white-text">
                    आपके संबंध में बुनियादी जानकारी।
                  </p>

                  <small className="d-block pb-3 white-text">
                    * = आवश्यक जानकारी
                  </small>
                  <br />

                  <form onSubmit={this.onSubmit}>
                    <p className="white-text">
                      Write height in terms of centimetre. (सेंटीमीटर के संदर्भ
                      में ऊंचाई लिखें।)
                    </p>
                    <select
                      className="browser-default black-text"
                      style={{ maxWidth: "300px" }}
                      name="height"
                      onChange={this.onChange}
                    >
                      <option value="" disabled selected>
                        Choose your Height (अपनी ऊंचाई चुनें)
                      </option>
                      <option value="145">145-150</option>
                      <option value="150">150-155</option>
                      <option value="155">155-160</option>
                      <option value="160">160-165</option>
                      <option value="165">165-170</option>
                      <option value="170">170-175</option>
                      <option value="175">175-180</option>
                      <option value="180">180-185</option>
                      <option value="185">185-190</option>
                      <option value="190">190-195</option>
                      <option value="195">195-200</option>
                      <option value="200">200+</option>
                    </select>
                    <p className="white-text">
                      Write weight in terms of kg. (किलो के हिसाब से वजन लिखिए।)
                    </p>
                    <select
                      className="browser-default black-text"
                      style={{ maxWidth: "300px" }}
                      name="weight"
                      onChange={this.onChange}
                    >
                      <option value="" disabled selected>
                        Choose your Weight (अपना वजन चुनें)
                      </option>
                      <option value="30">30-35</option>
                      <option value="35">35-40</option>
                      <option value="40">40-45</option>
                      <option value="45">45-50</option>
                      <option value="50">50-55</option>
                      <option value="55">55-60</option>
                      <option value="60">60-65</option>
                      <option value="65">65-70</option>
                      <option value="70">70-75</option>
                      <option value="75">75-80</option>
                      <option value="80">80-85</option>
                      <option value="85">85-90</option>
                      <option value="90">90-95</option>
                      <option value="95">95-100</option>
                      <option value="100">100-105</option>
                      <option value="105">105+</option>
                    </select>
                    <br />
                    <br />
                    <p className="white-text">
                      Had engagement? (पहले सगाई की थी?)
                    </p>
                    <label>
                      <input name="engaged" type="radio" value="Yes" />
                      <span className="white-text">Yes </span>
                    </label>
                    &nbsp; &nbsp; &nbsp;
                    <label>
                      <input name="engaged" type="radio" value="No" />
                      <span className="white-text">No </span>
                    </label>
                    {errors.engaged != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.engaged}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <br /> <br />
                    <br />
                    <p className="white-text">
                      Had married? (पहले शादी की थी?)
                    </p>
                    <label>
                      <input name="married" type="radio" value="Yes" />
                      <span className="white-text">Yes </span>
                    </label>
                    &nbsp; &nbsp; &nbsp;
                    <label>
                      <input name="married" type="radio" value="No" />
                      <span className="white-text">No </span>
                    </label>
                    {errors.married != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.married}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <br />
                    <br />
                    <br />
                    <p className="white-text">
                      Are you staying with your parents? (क्या आप अपने माता-पिता
                      के साथ रहते हैं?)
                    </p>
                    <label>
                      <input name="stayWithParents" type="radio" value="Yes" />
                      <span className="white-text">Yes </span>
                    </label>
                    &nbsp; &nbsp; &nbsp;
                    <label>
                      <input name="stayWithParents" type="radio" value="No" />
                      <span className="white-text">No </span>
                    </label>
                    {errors.stayWithParents != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.stayWithParents}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <br /> <br />
                    <br />
                    <p className="white-text">
                      Number of your siblings (आपके भाई बहन की संख्या)
                    </p>
                    <TextFieldGroup
                      placeholder="* कुल भाई बहन
                      (Total Siblings)"
                      name="totalSiblings"
                      value={this.state.totalSiblings}
                      onChange={this.onChange}
                    />
                    {errors.totalSiblings != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.totalSiblings}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <p className="white-text">
                      Other Details Related to Family (परिवार से संबंधित अन्य
                      जानकारी)
                    </p>
                    <TextFieldGroup
                      name="familyInfo"
                      type="text"
                      placeholder="आपके परिवार से संबंधित जानकारी। (info related to your family)"
                      value={this.state.familyInfo}
                      onChange={this.onChange}
                    />
                    {errors.familyInfo != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.familyInfo}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <p className="white-text">
                      Are you specially enabled? (क्या आप विशेष रूप से सक्षम
                      हैं?)
                    </p>
                    <label>
                      <input name="specialEnable" type="radio" value="Yes" />
                      <span className="white-text">Yes </span>
                    </label>
                    &nbsp; &nbsp; &nbsp;
                    <label>
                      <input name="specialEnable" type="radio" value="No" />
                      <span className="white-text">No </span>
                    </label>
                    {errors.specialEnable != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.specialEnable}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <br />
                    <br />
                    <p className="white-text">
                      Do You Wear Specs (क्या आप चश्मा पहनते हैं?)
                    </p>
                    <label>
                      <input name="specs" type="radio" value="Yes" />
                      <span className="white-text">Yes </span>
                    </label>
                    &nbsp; &nbsp; &nbsp;
                    <label>
                      <input name="specs" type="radio" value="No" />
                      <span className="white-text">No </span>
                    </label>
                    {errors.specs != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.specs}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <br />
                    <br />
                    {/* <div className="form-check mb-4">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="current"
                        value={this.state.current}
                        checked={this.state.current}
                        onChange={this.onCheck}
                        id="current"
                      />
                      <label
                        htmlFor="current"
                        className="form-check-label"
                      ></label>
                    </div> */}
                    <TextAreaFieldGroup
                      placeholder=" उपलब्धि"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                      info="हमें उपलब्धि या किसी बड़ी बात के बारे में बताएं"
                    />
                    {errors.description != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.description}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <center>
                      <input
                        type="submit"
                        value="Submit"
                        className="btn btn-info btn-block mt-4 valign-wrapper"
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

AddBasic.propTypes = {
  addBasic: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { addBasic })(withRouter(AddBasic));
