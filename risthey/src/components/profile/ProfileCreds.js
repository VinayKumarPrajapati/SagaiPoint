import React, { Component } from "react";

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    const expItems = experience.map((exp, i = 0) => (
      <>
        <p hidden>
          {(exp.to = new Date(exp.to).toLocaleDateString())}
          {(exp.from = new Date(exp.from).toLocaleDateString())}
        </p>

        <div className="card h-100">
          <div className="card-body">
            <h6 className="d-flex align-items-center mb-3">
              <i className="material-icons text-info mr-2">assignment</i>
              Job/Business Details {++i}
            </h6>
            <hr />
            <big>{"Current Bysiness/Job Name"}</big>
            <hr />
            <p className="text-primary">{exp.company}</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <big>Business/Job title</big>
            <hr />
            <p className="text-primary">{exp.title}</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-valuenow="72"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <big>Business/Job Location</big>
            <p className="text-primary">{exp.location}</p>

            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-valuenow="89"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <big>Business/Job Description</big>
            <p className="text-primary">{exp.description}</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-valuenow="55"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <big>Year From</big>
            <p className="text-primary">{exp.from}</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-valuenow="66"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <big>Year To</big>
            <p className="text-primary">{exp.to}</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-valuenow="66"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </>
    ));

    const eduItems = education.map((edu, i = 0) => (
      <>
        <p hidden>
          {(edu.to = new Date(edu.to).toLocaleDateString())}
          {(edu.from = new Date(edu.from).toLocaleDateString())}
        </p>
        <div className="card h-100">
          <div className="card-body">
            <h6 className="d-flex align-items-center mb-3">
              <i className="material-icons text-info mr-2">assignment</i>
              Education Details {++i}
            </h6>
            <big>School/University Name</big>
            <hr />
            <p className="text-primary">{edu.school}</p>

            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <big>Degree/Certificate Details</big>
            <hr />
            <p className="text-primary">{edu.degree}</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-valuenow="72"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <big>Field of Study</big>
            <hr />
            <p className="text-primary">{edu.fieldofstudy}</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-valuenow="89"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <big>School/University Description</big>
            <hr />
            <p className="text-primary">{edu.description}</p>

            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-valuenow="55"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <big>Year to</big>
            <hr />
            <p className="text-primary">{edu.to}</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-valuenow="66"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <big>Year from</big>
            <hr />
            <p className="text-primary">{edu.from}</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-valuenow="66"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </>
    ));
    return (
      <>
        <div className="card card-body bg-light mb-3">
          <h3 className="text-center text-info">Education</h3>
        </div>

        {eduItems.length > 0 ? (
          <ul className="list-group">{eduItems}</ul>
        ) : (
          <p className="text-center text-primary">
            No Education Related Info Available Please Add
          </p>
        )}
        <div className="row">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">Experience</h3>
          </div>
        </div>
        {expItems.length > 0 ? (
          <ul className="list-group">{expItems}</ul>
        ) : (
          <p className="text-center text-primary">
            No Job/Business Related Info Available Please Add
          </p>
        )}
        {/* </div> */}
      </>
    );
  }
}

export default ProfileCreds;
