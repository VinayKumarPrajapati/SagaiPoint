import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "./landingjs";
import wedImg from "../../img/wedding-1.jpg";
import wedImg1 from "../../img/wedding-2.jpg";
import wedImg2 from "../../img/wedding-3.jpg";
class Landing extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //     errors: {},
  //   };

  //   this.onChange = this.onChange.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);
  // }

  // onChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  // onSubmit(e) {
  //   e.preventDefault();

  //   const newUser = {
  //     name: this.state.name,
  //     email: this.state.email,
  //     phone: this.state.phone,
  //     message: this.state.message,
  //   };

  //   this.props.registerUser(newUser, this.props.history);
  // }

  render() {
    return (
      <>
        <section className="slider pink lighten-3">
          <div className="carousel">
            <Link className="carousel-item" to="">
              <img src={wedImg} alt="wedding image" />
            </Link>
            <Link className="carousel-item" to="">
              <img src={wedImg1} alt="wedding image" />
            </Link>
            <Link className="carousel-item" to="">
              <img src={wedImg2} alt="wedding image" />
            </Link>
          </div>
        </section>
        <section className="section section-search teal darken-1 white-text center scrollspy">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h5 className="white-text">
                  हम समाज को साथ लाते हैं। आप देश भर में रहने वाले मारु कुम्हार
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
                      हम आपके लिए सबसे अच्छा मैच खोजेंगे और आपको सूचित करेंगे।
                    </p>
                    <br />
                    <p>
                      बस रजिस्टर करें और आराम करें। हम हर चीज का ध्यान रखेंगे।
                    </p>
                    <br />
                    <p>
                      बहुत ही प्रतिभाशाली / कुशल टीम आपके अनुष्ठानों से संबंधित
                      सभी जानकारी का ध्यान रखेगी।
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
                      {/* बहुत ही प्रतिभाशाली / कुशल टीम को आपके अनुष्ठानों से
                      संबंधित सभी विवरण मिलेंगे। */}
                    </p>
                    <br />
                    <p>
                      यदि आप इस वेबसाइट का उपयोग करते समय समस्या पाते हैं तो हम
                      इस समस्या का समाधान करेंगे।
                    </p>
                    <br />
                    <p>
                      सरल कोई जटिल संरचना नहीं। <br />
                      केवल महत्वपूर्ण विकल्प।
                    </p>
                    <br />
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
                <Link to="/#" className="btn btn-large grey darken-3">
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
                <Link to="https://tinyurl.com/sagaipoint" target="_blank">
                  <h4 className="white-text">
                    आसान फार्म भरने के लिए यहाँ क्लिक करें।
                  </h4>
                </Link>
                <br />
                <h4 className="white-text">
                  सर्वश्रेष्ठ मैच और सर्वश्रेष्ठ सेवा के लिए।
                </h4>
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
                  <div className="collection-header">
                    <h4>Location</h4>
                  </div>
                  <div className="collection-item">अहमदाबाद</div>
                  <div className="collection-item">गुजरात, भारत</div>
                  <div className="collection-item">
                    6239009974 पर संपर्क करें
                  </div>
                </ul>
              </div>
              <div className="col s12 m6">
                <div className="card-panel grey lighten-3">
                  <h5>कृपया इस फॉर्म को भरें। </h5>
                  <form>
                    <div className="input-field">
                      <input type="text" id="name" name="name" />
                      <label htmlFor="name">Name (नाम)</label>
                    </div>
                    <div className="input-field">
                      <input type="email" id="email" name="email" />
                      <label htmlFor="email">Email (ईमेल वैकल्पिक) </label>
                    </div>
                    <div className="input-field">
                      <input type="text" id="phone" name="phone" />
                      <label htmlFor="phone">Phone (फ़ोन)</label>
                    </div>
                    <div className="input-field">
                      <textarea
                        className="materialize-textarea"
                        id="message"
                        name="message"
                      ></textarea>
                      <label htmlFor="message">Message (संदेश)</label>
                    </div>
                    <input
                      type="submit"
                      value="submit"
                      className="waves-effect waves-light btn"
                      style={{ marginBottom: "20px" }}
                    ></input>
                  </form>
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
                    <i className="material-icons small teal-text">home</i>
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

                <input type="text" />

                <br />
                <br />
                <input
                  type="submit"
                  className="waves-effect waves-light btn"
                  style={{ marginBottom: "20px" }}
                  value="भेजें (SEND US)"
                ></input>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container mdl-cell mdl-cell--4-col">
              सगाई पॉइंट प्राइवेट लिमिटेड
              <Link className="grey-text text-lighten-4 right" to="/#">
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
