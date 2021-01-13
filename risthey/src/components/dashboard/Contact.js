import React, { Component } from "react";
import Card from "@material-ui/core/Card";

class Conatct extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row" style={{ marginTop: "50px" }}>
            <Card className="col m20 offset-m1 s12">
              <h2 className="center-align" style={{ marginTop: "10px" }}>
                Contact US
              </h2>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col m6 s12">
                      <i className="mdi-action-perm-identity prefix"></i>
                      <input id="first_name" type="text" className="validate" />
                      <label for="first_name">First Name</label>
                    </div>
                    <div className="input-field col m6 s12">
                      <i className="mdi-action-perm-identity prefix"></i>
                      <input id="last_name" type="text" className="validate" />
                      <label for="last_name">Last Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col m6 s12">
                      <i className="mdi-content-mail prefix"></i>
                      <input
                        id="email"
                        type="email"
                        className="validate"
                        required
                      />
                      <label for="email">Email</label>
                    </div>
                    <div className="input-field col m6 s12">
                      <i className="mdi-action-perm-contact-cal prefix"></i>
                      <input id="company" type="text" className="validate" />
                      <label for="company">Contact Number</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="mdi-communication-messenger prefix"></i>
                      <textarea
                        id="message"
                        className="materialize-textarea"
                      ></textarea>
                      <label for="message">Message</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <label for="budget">Issues</label>
                      <br />
                    </div>
                    <div className="input-field col s12">
                      <select className="browser-default" id="budget">
                        <option value="" selected disabled>
                          Choose your option
                        </option>
                        <option value="1">Regarding Match</option>
                        <option value="2">Complains</option>
                        <option value="3">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <label>How Did You Find Us?</label>
                      <br />
                    </div>
                    <div className="input-field col m3 s6 center-align">
                      <input name="group1" type="radio" id="WhatsApp" />
                      <label for="WhatsApp">WhatsApp</label>
                    </div>
                    <div className="input-field col m3 s6 center-align">
                      <input name="group1" type="radio" id="otherMember" />
                      <label for="otherMember">Other Member</label>
                    </div>
                    <div className="input-field col m3 s6 center-align">
                      <input name="group1" type="radio" id="store" />
                      <label for="store">Call From US</label>
                    </div>
                    <div className="input-field col m3 s6 center-align">
                      <input name="group1" type="radio" id="other" />
                      <label for="other">Other</label>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="row">
                    <div className="input-field col s12">
                      <label>Communication Preferences</label>
                      <br />
                    </div>
                    <div className="input-field col m4 s12 center-align">
                      <input name="group2" type="checkbox" id="emailComm" />
                      <label for="emailComm">Email</label>
                    </div>
                    <div className="input-field col m4 s12 center-align">
                      <input name="group2" type="checkbox" id="callComm" />
                      <label for="callComm">Call Me</label>
                    </div>
                    <div className="input-field col m4 s12 center-align">
                      <input name="group2" type="checkbox" id="WhatsAppm" />
                      <label for="WhatsAppm">WhatsApp</label>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="row">
                    <div className="col m12">
                      <p className="right-align">
                        <br />
                        <center>
                          <button
                            className="btn btn-large waves-effect waves-light"
                            type="button"
                            name="action"
                            onClick=""
                          >
                            Send Message
                          </button>
                        </center>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Conatct;
