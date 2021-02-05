import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addExperience } from "../../actions/profileActions";
import { Alert } from "@material-ui/lab";

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workPlace: "",
      jobTitle: "",
      cityWorkplace: "",
      companyAddress: "",
      salary: "",
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

    const expData = {
      workPlace: this.state.workPlace,
      jobTitle: this.state.jobTitle,
      cityWorkplace: this.state.cityWorkplace,
      companyAddress: this.state.companyAddress,
      salary: this.state.salary,
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
                  <br />
                  <h3 className="display-4 text-center white-text">
                    Add Experience (अनुभव जोड़ें)
                  </h3>
                  <p className="lead text-center white-text">
                    Add if you have any job or position that you have currently.
                    <br />
                    (यदि आपके पास वर्तमान में कोई नौकरी या पद है तो उसे जोड़ें।)
                  </p>
                  <small className="d-block pb-3 white-text">
                    * = required fields
                  </small>
                  <br />
                  <br />
                  <form onSubmit={this.onSubmit}>
                    <p className="white-text">
                      कार्यस्थल का नाम (Workplace Name)
                    </p>
                    <TextFieldGroup
                      placeholder="* कार्यस्थल का नाम (Workplace Name)"
                      name="workPlace"
                      value={this.state.workPlace}
                      onChange={this.onChange}
                    />
                    {errors.workPlace != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.workPlace}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <p className="white-text">जॉब शीर्षक (Job jobTitle)</p>
                    <TextFieldGroup
                      placeholder="* जॉब शीर्षक (Job Title)"
                      name="jobTitle"
                      value={this.state.jobTitle}
                      onChange={this.onChange}
                      error={errors.jobTitle}
                    />
                    <p className="white-text">
                      कार्यस्थल शहर (City of Workplace)
                    </p>
                    <TextFieldGroup
                      placeholder="* कार्यस्थल शहर (City of Workplace)"
                      name="cityWorkplace"
                      value={this.state.cityWorkplace}
                      onChange={this.onChange}
                      error={errors.cityWorkplace}
                    />
                    <p className="white-text">
                      कंपनी का पता (Address of workPlace)
                    </p>
                    <TextFieldGroup
                      placeholder="* कंपनी का पता (Address of workPlace)"
                      name="address"
                      value={this.state.address}
                      onChange={this.onChange}
                      error={errors.address}
                    />
                    <p className="white-text">
                      Salary Per Annum (प्रति वर्ष वेतन)
                    </p>
                    <select
                      className="browser-default black-text"
                      style={{ maxWidth: "300px" }}
                      name="salary"
                      onChange={this.onChange}
                    >
                      <option value="" disabled selected>
                        Choose your Salary (अपना वेतन चुनें)
                      </option>
                      <option value="2">
                        less than 2 LPA (2 लाख से कम प्रतिवर्ष )
                      </option>
                      <option value="3">
                        3 to 4 LPA (3 से 4 लाख प्रतिवर्ष )
                      </option>
                      <option value="4">
                        4 to 5 LPA (4 से 5 लाख प्रतिवर्ष )
                      </option>
                      <option value="5">
                        5 to 6 LPA (5 से 6 लाख प्रतिवर्ष )
                      </option>
                      <option value="6">
                        6 to 7 LPA (6 से 7 लाख प्रतिवर्ष )
                      </option>
                      <option value="7">
                        7 to 8 LPA (7 से 8 लाख प्रतिवर्ष )
                      </option>
                      <option value="8">
                        8 to 9 LPA (8 से 9 लाख प्रतिवर्ष )
                      </option>
                      <option value="9">
                        9 to 10 LPA (9 से 10 लाख प्रतिवर्ष )
                      </option>
                      <option value="10">
                        10 to 11 LPA (10 से 11 लाख प्रतिवर्ष)
                      </option>
                      <option value="11">
                        11 to 12 LPA (11 से 12 लाख प्रतिवर्ष)
                      </option>
                      <option value="12">
                        12 to 15 LPA (12 से 15 लाख प्रतिवर्ष)
                      </option>
                      <option value="15">
                        15 to 20 LPA (15 से 20 लाख प्रतिवर्ष)
                      </option>
                      <option value="20">
                        More than 20 LPA (20 लाख से अधिक प्रतिवर्ष)
                      </option>
                    </select>
                    <br />
                    <br />
                    <TextAreaFieldGroup
                      placeholder="Job Description (नौकरी से संबंधित जानकारी)"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                      error={errors.description}
                      className="white-text"
                      info="Tell us about the the position (हमें स्थिति के बारे में बताएं)"
                    />
                    <br />
                    <center>
                      <input
                        type="submit"
                        value="Submit"
                        className="btn btn-info btn-block mt-4"
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
