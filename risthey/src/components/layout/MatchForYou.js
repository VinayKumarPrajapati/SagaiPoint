import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./MatchForYou.css";
class MatchForYou extends Component {
  render() {
    return (
      <>
        <div className="container emp-profile">
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt=""
                  />
                  <div className="file btn btn-lg btn-primary">
                    Image 1{/* <input type="file" name="file" /> */}
                  </div>
                </div>
                <div className="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt=""
                  />
                  <div className="file btn btn-lg btn-primary">
                    Image 2{/* <input type="file" name="file" /> */}
                  </div>
                </div>
                <div className="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt=""
                  />
                  <div className="file btn btn-lg btn-primary">
                    Image 3{/* <input type="file" name="file" /> */}
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="profile-head">
                  <h5>Batman Ironman</h5>
                  <h6>Title</h6>
                  <p className="proile-rating">
                    Requirements Matched : <span>8/10</span>
                  </p>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        to="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        id="edu-tab"
                        data-toggle="tab"
                        to="#edu"
                        role="tab"
                        aria-controls="edu"
                        aria-selected="false"
                      >
                        Education Related Details
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        id="exp-tab"
                        data-toggle="tab"
                        to="#exp"
                        role="tab"
                        aria-controls="exp"
                        aria-selected="false"
                      >
                        Experience Related Details
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        id="basic-tab"
                        data-toggle="tab"
                        to="#basic"
                        role="tab"
                        aria-controls="basic"
                        aria-selected="false"
                      >
                        Basic Details
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        id="family-tab"
                        data-toggle="tab"
                        to="#family"
                        role="tab"
                        aria-controls="family"
                        aria-selected="false"
                      >
                        Family Details
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        to="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Requirements
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2">{}</div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>LINK of social media</p>
                  <Link to="">Website Link</Link>
                  <br />
                  <Link to="">facebook</Link>
                  <br />
                  <Link to="">instagram</Link>
                  <p>SKILLS</p>
                  <Link to="">skill 1</Link>
                  <br />
                  <Link to="">skill 2</Link>
                  <br />
                  <Link to="">skill 3</Link>
                  <br />
                  <Link to="">skill 4</Link>
                  <br />
                  <Link to="">skill 5</Link>
                  <br />
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>Superman</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Age</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Surname</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Gotra</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Height / Weight</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Specs</label>
                      </div>
                      <div className="col-md-6">
                        <p></p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Specially Abled</label>
                      </div>
                      <div className="col-md-6">
                        <p></p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="edu"
                    role="tabpanel"
                    aria-labelledby="edu-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Last Education / Degree</label>
                      </div>
                      <div className="col-md-6">
                        <p>B. Tech</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>College / University Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Informal Education Details</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Extra Courses</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Achievements</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="exp"
                    role="tabpanel"
                    aria-labelledby="exp-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Current Company / Business name</label>
                      </div>
                      <div className="col-md-6">
                        <p>Google</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Job title</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Privious Company / Business</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Field of Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Achievements</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Any Gap in between</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Years of Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="basic"
                    role="tabpanel"
                    aria-labelledby="basic-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>City / Village</label>
                      </div>
                      <div className="col-md-6">
                        <p>New York</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>House / Flat Related Info</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Vehicle Related Info</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Income / Salary Info</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Achievements</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="family"
                    role="tabpanel"
                    aria-labelledby="family-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Total Family Member in your house</label>
                      </div>
                      <div className="col-md-6">
                        <p>5</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Siblings</label>
                      </div>
                      <div className="col-md-6">
                        <p>3</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Mother's Gotra</label>
                      </div>
                      <div className="col-md-6">
                        <p></p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Staying with Parents</label>
                      </div>
                      <div className="col-md-6">
                        <p>Yes</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Parents staying place city/village</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Education</label>
                      </div>
                      <div className="col-md-6">
                        <p>B. Tech</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>Company Name</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Family Member</label>
                      </div>
                      <div className="col-md-6">
                        <p>5</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Vehicle</label>
                      </div>
                      <div className="col-md-6">
                        <p>4 Wheeler</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>House</label>
                      </div>
                      <div className="col-md-6">
                        <p>4 BHK</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label>Her Bio</label>
                        <p>Her basic detail description</p>
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn btn-primary">
                    Request Contact Details
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default MatchForYou;
