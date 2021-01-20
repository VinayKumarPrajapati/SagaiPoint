import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Alert } from "@material-ui/lab";
import { addFamily } from "../../actions/profileActions";

class AddFamily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fatherName: "",
      motherName: "",
      siblingsTotal: 0,
      sisterName: {},
      brotherName: {},
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
      fatherName: this.state.fatherName,
      motherName: this.state.motherName,
      siblingsTotal: this.state.siblingsTotal,
      sisterName: this.state.sisterName,
      brotherName: this.state.brotherName,
      description: this.state.description,
    };

    this.props.addFamily(expData, this.props.history);
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
        <div className="create-profile">
          <div className="container">
            <div className="row">
              <div className="card blue-grey darken-1 col s12">
                <div className="col-md-8 m-auto">
                  <Link to="/dashboard" className="btn btn-primary">
                    Go Back
                  </Link>
                  <h1 className="display-4 text-center text-white">
                    Add Family
                  </h1>
                  <p className="lead text-center text-white">
                    Add Basic Details of your family
                  </p>

                  <small className="d-block pb-3">* = required fields</small>
                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="* पिता का नाम"
                      name="fatherName"
                      value={this.state.fatherName}
                      onChange={this.onChange}
                    />
                    {errors.fatherName != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.fatherName}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <TextFieldGroup
                      placeholder="* माता का नाम"
                      name="motherName"
                      value={this.state.motherName}
                      onChange={this.onChange}
                    />
                    {errors.motherName != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.motherName}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <TextFieldGroup
                      placeholder="* भाई बहन की गिनती"
                      name="siblingsTotal"
                      value={this.state.siblingsTotal}
                      onChange={this.onChange}
                    />
                    {errors.siblingsTotal != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.siblingsTotal}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <TextAreaFieldGroup
                      placeholder="पारिवारिक जानकारी जिसे आप साझा करना चाहते हैं"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                      info="हमें आपकी स्थिति के बारे में बताएं"
                    />
                    {errors.description != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.description}
                      </Alert>
                    ) : (
                      ""
                    )}
                    {errors == null ? this.notify() : ""}
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

AddFamily.propTypes = {
  addFamily: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { addFamily })(withRouter(AddFamily));
