import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Alert } from "@material-ui/lab";
import { addEducation } from "../../actions/profileActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      degree: "",
      fieldofstudy: "",
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
  notify = () => toast("Education Details has been successfully Added");

  onSubmit(e) {
    e.preventDefault();
    this.notify();

    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description,
    };

    this.props.addEducation(eduData, this.props.history);
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
        {" "}
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="create-profile">
          <div className="container">
            <div className="row">
              <div className="card blue-grey darken-1 col s12">
                <div className="col-md-8 m-auto">
                  <Link to="/dashboard" className="btn btn-primary">
                    Go Back
                  </Link>
                  <h1 className="display-4 text-center text-white">
                    शिक्षा जोड़ें
                  </h1>
                  <p className="lead text-center text-white">
                    किसी भी स्कूल, बूटकैंप, आदि को जोड़ें
                  </p>
                  <ToastContainer />

                  <small className="d-block pb-3">* = आवश्यक जानकारी</small>
                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="* स्कूल"
                      name="school"
                      value={this.state.school}
                      onChange={this.onChange}
                    />
                    {errors.school != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.school}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <TextFieldGroup
                      placeholder="* डिग्री या प्रमाणन"
                      name="degree"
                      value={this.state.degree}
                      onChange={this.onChange}
                    />
                    {errors.degree != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.degree}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <TextFieldGroup
                      placeholder="* अध्ययन क्षेत्र (Field of Study)"
                      name="fieldofstudy"
                      value={this.state.fieldofstudy}
                      onChange={this.onChange}
                    />
                    {errors.fieldofstudy != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.fieldofstudy}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <br />
                    <h6 className="text-white">तारीख से (From Date)</h6>
                    <TextFieldGroup
                      name="from"
                      type="date"
                      value={this.state.from}
                      onChange={this.onChange}
                    />
                    {errors.from != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.from}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <br />
                    <h6 className="text-white">तारीख तक (To Date)</h6>
                    <TextFieldGroup
                      name="to"
                      type="date"
                      value={this.state.to}
                      onChange={this.onChange}
                      disabled={this.state.disabled ? "disabled" : ""}
                    />
                    {errors.to != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.to}
                      </Alert>
                    ) : (
                      ""
                    )}
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
                      <label
                        htmlFor="current"
                        className="form-check-label"
                      ></label>
                    </div>
                    <TextAreaFieldGroup
                      placeholder=" उपलब्धि"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                      info="मुझे उपलब्धि या किसी बड़ी बात के बारे में बताएं"
                    />
                    {errors.description != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.description}
                      </Alert>
                    ) : (
                      ""
                    )}
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
        </div>
      </>
    );
  }
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { addEducation })(
  withRouter(AddEducation)
);
