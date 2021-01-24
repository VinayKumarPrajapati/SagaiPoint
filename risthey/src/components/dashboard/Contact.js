import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./contact.css";
class Conatct extends Component {
  render() {
    return (
      <>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="background">
          <div className="container">
            <div className="screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close"></div>
                  <div className="screen-header-button maximize"></div>
                  <div className="screen-header-button minimize"></div>
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                </div>
              </div>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>संपर्क</span>
                    <span>करें</span>
                  </div>
                  <div className="app-contact">CONTACT INFO : +91</div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="NAME (नाम)"
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="EMAIL (ईमेल)"
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="CONTACT NO (संपर्क नंबर)"
                      />
                    </div>
                    <div className="app-form-group message">
                      <input
                        className="app-form-control"
                        placeholder="MESSAGE (संदेश)"
                      />
                    </div>
                    <div className="app-form-group buttons">
                      <button
                        className="app-form-button"
                        style={{ marginRight: "50px" }}
                      >
                        CANCEL
                      </button>
                      <button className="app-form-button">SEND</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="credits">
              Copyright
              <Link
                className="credits-link"
                to="/"
                style={{ marginLeft: "15px" }}
              >
                सगाई पॉइंट
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Conatct;
