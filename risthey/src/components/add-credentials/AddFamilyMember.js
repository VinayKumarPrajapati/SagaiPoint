import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Alert } from "@material-ui/lab";
import { addFamilyMember } from "../../actions/profileActions";

class AddFamilyMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberName: "",
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
      memberName: this.state.memberName,
    };

    this.props.addFamilyMember(expData, this.props.history);
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
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="card blue-grey darken-1 col s12">
              <div className="col-md-8 m-auto">
                <Link to="/dashboard" className="btn btn-primary">
                  Go Back
                </Link>
                <h1 className="display-4 text-center text-white">
                  Add Family Member
                </h1>
                <p className="lead text-center text-white">
                  Add Basic Details of your family member
                </p>
                <small className="d-block pb-3">* = required fields</small>
                <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="* परिवार का सदस्य का नाम"
                    name="memberName"
                    value={this.state.memberName}
                    onChange={this.onChange}
                  />
                  {errors.memberName != null ? (
                    <Alert variant="filled" severity="error">
                      {errors.memberName}
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
    );
  }
}

AddFamilyMember.propTypes = {
  addFamilyMember: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { addFamilyMember })(
  withRouter(AddFamilyMember)
);
