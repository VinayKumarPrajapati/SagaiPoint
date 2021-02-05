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

                  <center>
                    <h4 className="display-4 text-center white-text">
                      Add family related information.
                      <br /> (परिवार संबंधित जोड़ें।)
                    </h4>
                  </center>
                  <small className="d-block pb-3">
                    <p className="white-text">* = required fields</p>
                  </small>
                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="* पिता का नाम (Father's Name)"
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
                      placeholder="* माता का नाम (Mother's Name)"
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
                    <p className="white-text">
                      * क्या आप अपने माता-पिता के साथ रहते हैं? (Staying with
                      your parents?)
                    </p>
                    <p className="white-text">
                      <label>
                        <input name="withFamily" type="radio" />
                        <span>Yes (हां)</span>
                      </label>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <label>
                        <input name="withFamily" type="radio" />
                        <span>No (नहीं)</span>
                      </label>
                    </p>
                    {errors.withFamily != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.withFamily}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <p className="white-text">* भाई बहन की गिनती</p>
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
                    <p className="white-text">* कुल परिवार के सदस्य।</p>
                    <TextFieldGroup
                      placeholder="* कुल परिवार के सदस्य।"
                      name="familyTotalMember"
                      value={this.state.familyTotalMember}
                      onChange={this.onChange}
                    />
                    {errors.familyTotalMember != null ? (
                      <Alert variant="filled" severity="error">
                        {errors.familyTotalMember}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <TextAreaFieldGroup
                      placeholder="पारिवारिक जानकारी जिसे आप साझा करना चाहते हैं (Info related family)"
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
                    <center>
                      <input
                        type="submit"
                        value="Submit"
                        className="btn btn-info btn-block mt-4 valign-wrapper"
                        style={{ marginBottom: "10px" }}
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
