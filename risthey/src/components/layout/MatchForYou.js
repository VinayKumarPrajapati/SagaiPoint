import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./MatchForYou.css";
class MatchForYou extends Component {
  render() {
    return (
      <>
        {/* <div className="container emp-profile">
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt=""
                  />
                  <div className="file btn btn-lg btn-primary"></div>
                </div>
                <div className="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt=""
                  />
                  <div className="file btn btn-lg btn-primary"></div>
                </div>
                <div className="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt=""
                  />
                  <div className="file btn btn-lg btn-primary"></div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="profile-head">
                  <h5>Batman Ironman</h5>
                  <h6>Title (शीर्षक)</h6>
                  <p className="proile-rating">
                    Requirements Matched (आवश्यकताओं का मिलान हुआ):
                    <span> 8/10</span>
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
                        About (उसके बारे में)
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
                        Education (शिक्षा)
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
                        Experience (अनुभव)
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
                        Basic Details (मूल विवरण)
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
                        Family (परिवार)
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
                        Requirements (आवश्यकता)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>LINK of social media (सोशल मीडिया लिंक)</p>
                  <Link to="">Website Link</Link>
                  <br /> <br />
                  <Link to="">Facebook</Link>
                  <br />
                  <Link to="">Instagram</Link>
                  <p>SKILLS (कौशल)</p>
                  <Link to="">skill 1 (कौशल 1)</Link>
                  <br />
                  <Link to="">skill 2 (कौशल 2)</Link>
                  <br />
                  <Link to="">skill 3 (कौशल 3)</Link>
                  <br />
                  <Link to="">skill 4 (कौशल 4)</Link>
                  <br />
                  <Link to="">skill 5 (कौशल 5)</Link>
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
                        <label>Profile Id (प्रोफ़ाइल आईडी)</label>
                      </div>
                      <div className="col-md-6">
                        <p>Superman</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name (नाम)</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Age (उम्र)</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Surname (उपनाम)</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Gotra (गोत्र)</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Height / Weight (ऊंचाई / वजन)</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Specs (उपनेत्र)</label>
                      </div>
                      <div className="col-md-6">
                        <p></p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Specially Abled (विशेष रूप से एबल्ड)</label>
                      </div>
                      <div className="col-md-6">
                        <p></p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Profession (व्यवसाय)</label>
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
                        <label>Last Education / Degree (अंतिम शिक्षा)</label>
                      </div>
                      <div className="col-md-6">
                        <p>B. Tech</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>
                          College / University Name (विश्वविद्यालय का नाम)
                        </label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Informal Education (अनौपचारिक शिक्षा)</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Extra Courses (अतिरिक्त पाठ्यक्रम)</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Achievements (उपलब्धियों)</label>
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
                        <label>
                          Current Company / Business (वर्तमान कंपनी / व्यापार)
                        </label>
                      </div> 
                      <div className="col-md-6">
                        <p>Google</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Job title (नौकरी का नाम)</label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>
                          Privious Company / Business (निजी कंपनी / व्यापार)
                        </label>
                      </div>
                      <div className="col-md-6">
                        <p>{}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Field of Experience (अनुभव का क्षेत्र)</label>
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
                  <button type="button" className="btn btn-primary">
                    Request Contact (संपर्क का अनुरोध करें)
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div> */}
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
                    Change Photo
                    <input type="file" name="file" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>Kshiti Ghelani</h5>
                  <h6>Web Developer and Designer</h6>
                  <p className="proile-rating">
                    RANKINGS : <span>8/10</span>
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
                        About (उसके बारे में)
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
                        Education (शिक्षा)
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
                        Experience (अनुभव)
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
                        Basic Details (मूल विवरण)
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
                        Family (परिवार)
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
                        Requirements (आवश्यकता)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Timeline
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>WORK LINK</p>
                  <a href="">Website Link</a>
                  <br />
                  <a href="">Bootsnipp Profile</a>
                  <br />
                  <a href="">Bootply Profile</a>
                  <p>SKILLS</p>
                  <a href="">Web Designer</a>
                  <br />
                  <a href="">Web Developer</a>
                  <br />
                  <a href="">WordPress</a>
                  <br />
                  <a href="">WooCommerce</a>
                  <br />
                  <a href="">PHP, .Net</a>
                  <br />
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div className="col-md-6">
                        <p>10$/hr</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div className="col-md-6">
                        <p>230</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Availability</label>
                      </div>
                      <div className="col-md-6">
                        <p>6 months</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label>Your Bio</label>
                        <br />
                        <p>Your detail description</p>
                      </div>
                    </div>
                  </div>
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
