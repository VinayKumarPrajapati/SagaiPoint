import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profileActions";

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const experience = this.props.experience.map((exp) => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div className="row">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <h4 className="mb-4">जानकारी संबंधित नौकरी / व्यवसाय</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>कंपनी (Company)</th>
                  <th>शीर्षक (Title)</th>
                  <th>वर्षों (Years)</th>
                  <th />
                </tr>
                {experience}
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
