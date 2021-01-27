import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "./landing.css";
class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="landing">
          <br />

          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4 white-text">सगाई पॉइंट</h1>
                  <p className="lead">
                    <div className="card-panel indigo accent-4 white-text center-align">
                      <h4 className="white-text center-align">
                        एक प्रोफ़ाइल / पोर्टफोलियो बनाएं, मेटरमोनियल रिज्यूमे
                        साझा करें और अपने भविष्य के जीवन-साथी के साथ जुड़ें
                      </h4>
                    </div>
                  </p>
                  <hr />

                  {/* <div className="row">
                    <div className="col s12 m6 l4">
                      <div className="card">
                        <div className="card-content">
                          <p>
                            I am a very simple card. I am good at containing
                            small bits of information. I am convenient because I
                            require little markup to use effectively.
                          </p>
                        </div>
                        <div className="card-tabs">
                          <ul className="tabs tabs-fixed-width">
                            <li className="tab">
                              <Link href="#test4">Test 1</Link>
                            </li>
                            <li className="tab">
                              <Link className="active" href="#test5">
                                Test 2
                              </Link>
                            </li>
                            <li className="tab">
                              <Link href="#test6">Test 3</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="card-content grey lighten-4">
                          <div id="test4">Test 1</div>
                          <div id="test5">Test 2</div>
                          <div id="test6">Test 3</div>
                        </div>
                      </div>
                    </div>

                    <div className="col s12 m6 l4">
                      
                      <div className="card">
                        <div className="card-content">
                          <p>
                            I am a very simple card. I am good at containing
                            small bits of information. I am convenient because I
                            require little markup to use effectively.
                          </p>
                        </div>
                        <div className="card-tabs">
                          <ul className="tabs tabs-fixed-width">
                            <li className="tab">
                              <Link href="#test4">Test 1</Link>
                            </li>
                            <li className="tab">
                              <Link className="active" href="#test5">
                                Test 2
                              </Link>
                            </li>
                            <li className="tab">
                              <Link href="#test6">Test 3</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="card-content grey lighten-4">
                          <div id="test4">Test 1</div>
                          <div id="test5">Test 2</div>
                          <div id="test6">Test 3</div>
                        </div>
                      </div>
                    </div>

                    <div className="col s12 m6 l4">
                      
                      <div className="card">
                        <div className="card-content">
                          <p>
                            I am a very simple card. I am good at containing
                            small bits of information. I am convenient because I
                            require little markup to use effectively.
                          </p>
                        </div>
                        <div className="card-tabs">
                          <ul className="tabs tabs-fixed-width">
                            <li className="tab">
                              <Link href="#test4">Test 1</Link>
                            </li>
                            <li className="tab">
                              <Link className="active" href="#test5">
                                Test 2
                              </Link>
                            </li>
                            <li className="tab">
                              <Link href="#test6">Test 3</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="card-content grey lighten-4">
                          <div id="test4">Test 1</div>
                          <div id="test5">Test 2</div>
                          <div id="test6">Test 3</div>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <Link
                    to="/register"
                    className="btn btn-primary text-white"
                    style={{ marginTop: "20px" }}
                  >
                    रजिस्टर करें
                  </Link>
                  <Link
                    to="/login"
                    className="btn btn-primary text-white"
                    style={{ marginLeft: "20px", marginTop: "20px" }}
                  >
                    लॉग इन करें
                  </Link>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="navbar navbar-invers menu-wrap">
          <div className="navbar-header text-center">
            <Link className="navbar-brand logo-right" to="javascript:void(0)">
              <i className="mdi-image-timelapse"></i>सगाई पॉइंट
            </Link>
          </div>
          <ul className="nav navbar-nav main-navigation">
            <li className="active">
              <Link to="#home">Home</Link>
            </li>
            <li>
              <Link to="#features">Features</Link>
            </li>
            <li>
              <Link to="#why">why</Link>
            </li>
            <li>
              <Link to="#screenshot">Screenshots</Link>
            </li>
            <li>
              <Link to="#testimonial">Testimonial</Link>
            </li>
            <li>
              <Link to="#clients">contract</Link>
            </li>
          </ul>
          <button className="close-button" id="close-button">
            Close Menu
          </button>
        </div>

        <div className="content-wrap"> */}
        <div className="container service">
          <div className="card-panel indigo accent-4">
            <h4 className=" white-text center-align">
              सगाई पॉइंट में रजिस्टर क्यों करना चाहिए?
            </h4>
          </div>
          <div className="row">
            <div className="col s12 m4 center-align">
              <div className="card">
                <div className="card-content">
                  <i className="material-icons large">emoji_people</i>
                  <h5>चुने हुए लोग और सभी से बेहतरीन सेवा।</h5>
                  <br />
                  <p>इस वेबसाइट पर किसी बाहरी व्यक्ति की पहुंच नहीं होगी।</p>
                  <br />
                  <p>सभी के लिए अविभाजित ध्यान।</p>
                  <br />
                  <p>
                    केवल चुने हुए लोगों को ही सदस्यता मिलेगी, सभी के लिए नहीं।
                  </p>
                </div>
              </div>
            </div>

            <div className="col s12 m4 center-align">
              <div className="card">
                <div className="card-content">
                  <i className="material-icons large">add_task</i>
                  <h5>आपके लिए सब कुछ तैयार है।</h5>
                  <p>हम आपके लिए सबसे अच्छा मैच खोजेंगे और आपको सूचित करेगा।</p>
                  <br />
                  <p>
                    बस रजिस्टर करें और आराम करें। हम हर चीज का ध्यान रखेंगे।
                  </p>
                  <br />
                  <p>
                    बहुत ही प्रतिभाशाली / कुशल टीम को आपके अनुष्ठानों से संबंधित
                    सभी विवरण मिलेंगे।
                  </p>
                </div>
              </div>
            </div>

            <div className="col s12 m4 center-align">
              <div className="card">
                <div className="card-content">
                  <i className="material-icons large">favorite</i>
                  <h5>हम अपने काम से प्रेम करते हैं।</h5> <br />
                  <p>अपने संदेह और समस्या के साथ आओ। हम इसे हल करेंगे।</p>
                  <br />
                  <p>हम नई विकसित तकनीक का उपयोग करते हैं।</p>
                  <br />
                  <p>
                    हमारे व्यवसाय में केवल मकसद लोगों के जीवन को आसान बनाना है।
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m4 center-align">
              <div className="card">
                <div className="card-content">
                  <i className="material-icons large">security</i>
                  <h5>किसी को पता नहीं होगा। आपने रजिस्टर किया है।</h5>
                  <br />
                  <p>
                    किसी और को आपकी जानकारी नहीं होगी। <br />
                    <br />
                    एकमात्र मैच के पास में आपकी जानकारी होगी।
                  </p>
                  <br />
                  <p>कोई नकली खाता / उपयोगकर्ता नहीं।</p>
                  <br />
                  <p>आपकी गोपनीयता के साथ कोई समझौता नहीं।</p>
                </div>
              </div>
            </div>

            <div className="col s12 m4 center-align">
              <div className="card">
                <div className="card-content">
                  <i className="material-icons large">free_breakfast</i>
                  <h5>प्रयोग करने में आसान।</h5>
                  <p>
                    बहुत ही प्रतिभाशाली / कुशल टीम को आपके अनुष्ठानों से संबंधित
                    सभी विवरण मिलेंगे।
                  </p>
                  <br />
                  <p>
                    यदि आप किसी भी उपयोग करते समय पाएंगे तो हम समस्या का समाधान
                    करेंगे।
                  </p>
                  <br />
                  <p>
                    सरल कोई जटिल संरचना नहीं। <br />
                    केवल महत्वपूर्ण विकल्प और हिंदी भाषा में, जो हर कोई समझ सकता
                    है।
                  </p>
                </div>
              </div>
            </div>

            <div className="col s12 m4 center-align">
              <div className="card">
                <div className="card-content">
                  <i className="material-icons large">favorite</i>
                  <h5>अपनी आवश्यकताओं के आधार पर एक मैच खोजें।</h5>
                  <br />
                  <p>अपनी आवश्यकताओं पर कोई समझौता नहीं।</p>
                  <br />
                  <p>
                    अपने समाज मे से मैच खोजें जो देश के विभिन्न राज्यों/ शहर मे
                    रहते हैं।
                  </p>
                  <br />
                  <p>अपने समाज में मैच खोजने के लिए कोई सीमा नहीं।</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
