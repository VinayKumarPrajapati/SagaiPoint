import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "./landing.css";
import "./landingjs";
import wedImg from "../../img/wedding-1.jpg";
import wedImg1 from "../../img/wedding-2.jpg";
import wedImg2 from "../../img/wedding-3.jpg";
class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <>
        {/* <div className="bg"></div>
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
                              <Link to="#test4">Test 1</Link>
                            </li>
                            <li className="tab">
                              <Link className="active" to="#test5">
                                Test 2
                              </Link>
                            </li>
                            <li className="tab">
                              <Link to="#test6">Test 3</Link>
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
                              <Link to="#test4">Test 1</Link>
                            </li>
                            <li className="tab">
                              <Link className="active" to="#test5">
                                Test 2
                              </Link>
                            </li>
                            <li className="tab">
                              <Link to="#test6">Test 3</Link>
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
                              <Link to="#test4">Test 1</Link>
                            </li>
                            <li className="tab">
                              <Link className="active" to="#test5">
                                Test 2
                              </Link>
                            </li>
                            <li className="tab">
                              <Link to="#test6">Test 3</Link>
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
        {/* <Link
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
        </div> */}
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
        {/*       <div className="container service">
          <div className="card-panel indigo accent-4">
            <h4 className=" white-text center-align">
              सगाई पॉइंट में रजिस्टर क्यों करना चाहिए?
            </h4>
          </div>

          <div className="row">
            <div className="col s12 m4 center-align"></div>

           </div>
        </div>{" "}
        */}
        <section className="slider">
          <div className="row">
            <div class="col s4">
              <img className="responsive-img" src={wedImg} alt="wedding img" />
            </div>
            <div class="col s4">
              <img className="responsive-img" src={wedImg1} alt="wedding img" />
            </div>
            <div class="col s4">
              <img className="responsive-img" src={wedImg2} alt="wedding img" />
            </div>
          </div>
        </section>
        {/* <ul className="slides">
            <li>
              <img src={wedImg} alt="" />
              <div className="caption center-align">
                <h2></h2>
                <h5 className="light grey-text text-lighten-3 hide-on-small-only"></h5>
                <Link to="#" className="btn btn-large"></Link>
              </div>
            </li>
            <li>
              <img src={require("../../img/wedding-1.jpg")} alt="" />
              <div className="caption left-align">
                <h2></h2>
                <h5 className="light grey-text text-lighten-3 hide-on-small-only"></h5>
                <Link to="#" className="btn btn-large"></Link>
              </div>
            </li>
            <li>
              <img src="https://image.ibb.co/mbCVnH/resort3.jpg" alt="" />
              <div className="caption right-align">
                <h2></h2>
                <h5 className="light grey-text text-lighten-3 hide-on-small-only"></h5>
                <Link to="#" className="btn btn-large"></Link>
              </div>
            </li>
          </ul> */}

        <section className="section section-search teal darken-1 white-text center scrollspy">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h5 className="white-text">
                  हम समाज को साथ लाते हैं। आप देश भर में रहने वाले मारु कुंभार
                  (प्रजापति) समाज के लोगों में से सबसे अच्छा मैच पा सकते हैं।
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-icons grey lighten-4 center">
          <div className="container">
            <div className="row">
              <div className="col s12 m4 center-align">
                <div className="card">
                  <div className="card-content">
                    <i className="material-icons large teal-text">
                      emoji_people
                    </i>
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
                    <i className="material-icons large teal-text">add_task</i>
                    <h5>आपके लिए सब कुछ तैयार है।</h5>
                    <p>
                      हम आपके लिए सबसे अच्छा मैच खोजेंगे और आपको सूचित करेगा।
                    </p>
                    <br />
                    <p>
                      बस रजिस्टर करें और आराम करें। हम हर चीज का ध्यान रखेंगे।
                    </p>
                    <br />
                    <p>
                      बहुत ही प्रतिभाशाली / कुशल टीम को आपके अनुष्ठानों से
                      संबंधित सभी विवरण मिलेंगे।
                    </p>
                  </div>
                </div>
              </div>

              <div className="col s12 m4 center-align">
                <div className="card">
                  <div className="card-content">
                    <i className="material-icons large teal-text">favorite</i>
                    <h5>हम अपने काम से प्रेम करते हैं।</h5> <br />
                    <p>अपने संदेह और समस्या के साथ आओ। हम इसे हल करेंगे।</p>
                    <br />
                    <p>हम नई विकसित तकनीक का उपयोग करते हैं।</p>
                    <br />
                    <p>
                      हमारे व्यवसाय में केवल मकसद लोगों के जीवन को आसान बनाना
                      है।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="popular" className="section section-popular scrollspy">
          <div className="container">
            <div className="row">
              <h4 className="center">
                <span className="teal-text">कुछ और जानकारी।</span>
              </h4>
              <div className="col s12 m4 center-align">
                <div className="card">
                  <div className="card-content">
                    <i className="material-icons large teal-text">
                      free_breakfast
                    </i>
                    <h5>प्रयोग करने में आसान।</h5>
                    <p>
                      बहुत ही प्रतिभाशाली / कुशल टीम को आपके अनुष्ठानों से
                      संबंधित सभी विवरण मिलेंगे।
                    </p>
                    <br />
                    <p>
                      यदि आप किसी भी उपयोग करते समय पाएंगे तो हम समस्या का
                      समाधान करेंगे।
                    </p>
                    <br />
                    <p>
                      सरल कोई जटिल संरचना नहीं। <br />
                      केवल महत्वपूर्ण विकल्प
                    </p>

                    <p>हिंदी भाषा में, जो हर कोई समझ सकता है।</p>
                  </div>
                </div>
              </div>
              <div className="col s12 m4 center-align">
                <div className="card">
                  <div className="card-content">
                    <i className="material-icons large teal-text">favorite</i>
                    <h5>अपनी आवश्यकताओं के आधार पर एक मैच खोजें।</h5>
                    <br />
                    <p>अपनी आवश्यकताओं पर कोई समझौता नहीं।</p>
                    <br />
                    <p>
                      अपने समाज मे से मैच खोजें जो देश के विभिन्न राज्यों/ शहर
                      मे रहते हैं।
                    </p>
                    <br />
                    <p>अपने समाज में मैच खोजने के लिए कोई सीमा नहीं।</p>
                  </div>
                </div>
              </div>
              <div className="col s12 m4 center-align">
                <div className="card">
                  <div className="card-content">
                    <i className="material-icons large teal-text">security</i>
                    <h5>किसी को पता नहीं होगा। आपने रजिस्टर किया है।</h5>
                    <br />
                    <p>किसी और को आपकी जानकारी नहीं होगी।</p>
                    <br />
                    <p>एकमात्र मैच के पास में आपकी जानकारी होगी।</p>
                    <br />
                    <p>कोई नकली खाता / उपयोगकर्ता नहीं।</p>
                    <br />
                    <p> आपकी गोपनीयता के साथ कोई समझौता नहीं।</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 center">
                <Link to="" className="btn btn-large grey darken-3">
                  <i className="material-icons left">phone</i>हमें अभी फ़ोन करें
                  6239009974 पर
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-follow teal darken-2 white-text center">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h4>Follow SagaiPoint</h4>
                <br />
                <br />
                <h4 className="white-text">
                  सर्वश्रेष्ठ मैच और सर्वश्रेष्ठ सेवा के लिए।
                </h4>
                <Link
                  to="htttps://facebook.com"
                  target="_blank"
                  className="white-text"
                >
                  <i className="fab fa-facebook fa-4x"></i>
                </Link>
                <Link
                  to="htttps://twitter.com"
                  target="_blank"
                  className="white-text"
                >
                  <i className="fab fa-twitter fa-4x"></i>
                </Link>
                <Link
                  to="htttps://linkedin.com"
                  target="_blank"
                  className="white-text"
                >
                  <i className="fab fa-linkedin fa-4x"></i>
                </Link>
                <Link
                  to="htttps://googleplus.com"
                  target="_blank"
                  className="white-text"
                >
                  <i className="fab fa-google-plus fa-4x"></i>
                </Link>
                <Link
                  to="htttps://pinterest.com"
                  target="_blank"
                  className="white-text"
                >
                  <i className="fab fa-pinterest fa-4x"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="section section-contact scrollspy">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <div className="card-panel teal white-text center">
                  <i className="material-icons medium">email</i>
                  <h5>रजिस्टर करने के लिए हमसे संपर्क करें।</h5>
                  <p>बेझिझक अपने सवाल संदेश में लिखें।</p>
                </div>
                <ul className="collection with-header">
                  <li className="collection-header">
                    <h4>Location</h4>
                  </li>
                  <li className="collection-item">अहमदाबाद</li>
                  <li className="collection-item">गुजरात, भारत</li>
                  <li className="collection-item">6239009974 पर संपर्क करें</li>
                </ul>
              </div>
              <div className="col s12 m6">
                <div className="card-panel grey lighten-3">
                  <h5>कृपया इस फॉर्म को भरें। </h5>
                  <div className="input-field">
                    <input type="text" id="name" />
                    <label for="name">Name (नाम)</label>
                  </div>
                  <div className="input-field">
                    <input type="email" id="email" />
                    <label for="email">Email (ईमेल)</label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="phone" />
                    <label for="phone">Phone (फ़ोन)</label>
                  </div>
                  <div className="input-field">
                    <textarea
                      className="materialize-textarea"
                      id="message"
                    ></textarea>
                    <label for="message">Message (संदेश)</label>
                  </div>
                  <input type="submit" value="Submit" className="btn" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="page-footer teal darken-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Powered By SagaiPoint Pvt. Ltd.</h5>
                <p className="grey-text text-lighten-4">
                  <span className="valign-wrapper">
                    <i className="material-icons small teal-text">home</i>{" "}
                    &nbsp; Ahmedabad
                  </span>
                </p>
                <p className="grey-text text-lighten-4">
                  <span className="valign-wrapper">
                    <i className="material-icons small teal-text">call</i>&nbsp;
                    +91 &nbsp; 6239009974
                  </span>
                </p>
                <p className="grey-text text-lighten-4">
                  <span className="valign-wrapper">
                    <i className="material-icons small teal-text">mail</i>&nbsp;
                    vinay.prajapati@sagaipoint.com
                  </span>
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">कृपया अपनी ईमेल आईडी यहाँ लिखें।</h5>
                <ul>
                  <li>
                    <input type="text" />
                  </li>
                  <br />
                  <br />
                  <li>
                    <button
                      type="submit"
                      className="waves-effect waves-light btn"
                      style={{ marginLeft: "80px" }}
                    >
                      भेजें
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container mdl-cell mdl-cell--4-col">
              सगाई पॉइंट प्राइवेट लिमिटेड
              <Link className="grey-text text-lighten-4 right" href="#!">
                SagaiPoint Pvt. Ltd.
              </Link>
            </div>
          </div>
        </footer>
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
