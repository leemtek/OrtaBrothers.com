import React, { Component } from "react";

// 3rd Party React Components
import Formsy from 'formsy-react';
import ReCAPTCHA from "react-google-recaptcha";

// Orta Brothers UI Components
import ObInput from "../../components/UI/Input/ObInput";
import ObTextArea from "../../components/UI/Input/ObTextArea";

class Contact extends Component {
  render() {
    return (
      <div>
        {/* start page title section */}
        <section className="wow fadeIn bg-light-gray padding-35px-tb page-title-small top-space">
          <div className="container">
              <div className="row equalize xs-equalize-auto">
                  <div className="col-lg-8 col-md-6 col-sm-6 col-xs-12 display-table">
                      <div className="display-table-cell vertical-align-middle text-left xs-text-center">
                      {/* start page title */}
                      <h1 className="alt-font text-extra-dark-gray font-weight-600 no-margin-bottom text-uppercase">Contact Us</h1>
                      {/* end page title */}
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 display-table text-right xs-text-left xs-margin-10px-top">
                      <div className="display-table-cell vertical-align-middle breadcrumb text-small alt-font">
                      {/* start breadcrumb */}
                      <ul className="xs-text-center">
                          <li><a href="/" className="text-dark-gray"><i className="fa fa-home"></i></a></li>
                          <li className="text-dark-gray">Contact Us</li>
                      </ul>
                      {/* end breadcrumb */}
                      </div>
                  </div>
              </div>
          </div>
        </section>
        {/* end page title section */}

        {/* start contact form section */}
        <section className="wow fadeIn" id="section-down">
          <div className="container">
              <div className="row sm-equalize-auto">
                  <div className="col-md-12 space-bottom-40 text-center">
                      <h5 className="alt-font font-weight-700 text-extra-dark-gray text-uppercase">Lorem ipsum dolor sit amet</h5>
                      <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text.</p>
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12 sm-margin-30px-bottom wow fadeInLeft">
                      <div className="padding-fifteen-all bg-light-gray border-radius-6 md-padding-seven-all xs-padding-30px-all height-100">
                          <span className="text-extra-dark-gray alt-font text-large font-weight-600 margin-25px-bottom display-block">Ready to get started?</span> 
                          <Formsy id="contact-form" onValidSubmit={this.handleSubmit} onValid={this.enableButton} onInvalid={this.disableButton}>
                              <div>
                                  <div id="success-contact-form" className="no-margin-lr"></div>
                                  {/* Full Name */}
                                  <ObInput className="border-radius-4 bg-white medium-input" type="text" 
                                      name="strName" 
                                      placeholder="Full Name *" 
                                      title="Name"
                                      required 
                                  />

                                  {/* Email */}
                                  <ObInput className="border-radius-4 bg-white medium-input" type="email" 
                                    name="strEmail"
                                    placeholder="E-mail *" 
                                    title="Email"
                                    validations="isEmail"
                                    validationError="Invalid Email. Required format: username@domain.com"
                                    required
                                  />

                                  {/* Phone */}
                                  <ObInput className="border-radius-4 bg-white medium-input" type="text" 
                                      name="strPhone" 
                                      placeholder="Phone *" 
                                      title="Phone"
                                      required 
                                  />

                                  {/* Message */}
                                  <ObTextArea className="border-radius-4 bg-white medium-textarea" rows="5" type="textarea" 
                                    name="strMessage" 
                                    placeholder="Your Message *"
                                    required 
                                  />

                                  {/* ReCAPTCHA */}
                                  <div style={{paddingBottom: "20px"}}>
                                    <ReCAPTCHA
                                      id="recaptcha"
                                      ref="recaptcha"
                                      sitekey="6Lcn0gMTAAAAAO1xOhqW-qTcYUPtUZ24FggL30Xt"
                                      onChange={this.handleRecaptchaOnChange}
                                    />
                                    <small id="message-required-recaptcha" className="label label-danger" style={{display: "none"}}>Recaptcha Required</small>
                                  </div>

                                  {/* Submit */}
                                  <div id="message-success" className="alert alert-success"><strong>Success!</strong> Your message has been received!</div>
                                  <div id="message-recaptcha-error" className="alert alert-danger"><strong>Oh snap!</strong> Your ReCAPTCHA is incorrect :(</div>
                                  <div><button id="button-send" className="btn btn-small border-radius-4 btn-dark-gray" disabled={!this.state.canSubmit}>send message</button></div>
                              </div>
                          </Formsy>
                      </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12 last-paragraph-no-margin wow fadeInRight">
                      <div className="padding-ten-all bg-light-gray border-radius-6 md-padding-seven-all xs-padding-30px-all height-100 sm-text-center">
                          <img src="images/about-img1.jpg" alt="" className="border-radius-6 margin-35px-bottom xs-margin-30px-bottom" />
                          <span className="text-large font-weight-600 alt-font text-extra-dark-gray margin-5px-bottom display-block">Lorem ipsum dolor sit amet</span>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum has been the standard dummy text.</p>
                          <a href="about-us-modern.html" className="btn btn-dark-gray btn-small text-extra-small border-radius-4 margin-25px-top">About Company</a>
                      </div>
                  </div>
              </div>
          </div>
        </section>
        {/* end contact form section */}
      </div>
    );
  } // render()
  
  isTest = false;
  
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);

    this.state = { 
      canSubmit: false,
      recaptcha: {
        valid: false,
        response: null
      } // recaptcha
    }; // state
  } // constructor

  componentDidMount() {
    // Initially hide the success message.
    document.getElementById("message-success").style.display = "none";
    document.getElementById("message-recaptcha-error").style.display = "none";
  } // componentDidMount()

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  /**
   * Submits to Google Cloud Function
   * @param {string} model - All form values.
   */
  handleSubmit = (model) => {
    // Simulate JSON response.
    if (this.state.recaptcha.valid === true){
      // Add captcha value to model.
      model.googleResponse = this.state.recaptcha.response;
      
      // Output model.
      fetch((this.isTest) ? console.log(model) : "");

      // Submit results to GCF and indicate status.
      fetch((this.isTest) ? "http://localhost:5000/leemtek-secure-forms/us-central1/chateaujudsonville/send" : "https://us-central1-leemtek-secure-forms.cloudfunctions.net/chateaujudsonville/send", {
        method: "post",
        body: JSON.stringify(model), 
        headers: new Headers({"Content-Type": "application/json"})
      })
      .then(response => response.json())
      .then((jsonResult) => {
        if(jsonResult.status === "email sent") {
          // Hide recaptcha and submit button.
          document.getElementById("recaptcha").style.display = "none";
          document.getElementById("message-required-recaptcha").style.display = "none";
          document.getElementById("button-send").style.display = "none";
          
          // Indicate a success message.
          document.getElementById("message-success").style.display = "initial";
          document.getElementById("message-recaptcha-error").style.display = "none";
        } else if(jsonResult.status === "recaptcha failure") {
          // Show recaptcha and submit button.
          document.getElementById("recaptcha").style.display = "initial";
          document.getElementById("message-required-recaptcha").style.display = "initial";
          document.getElementById("button-send").style.display = "initial";
          
          // A recaptcha error occurred.
          document.getElementById("message-success").style.display = "none";
          document.getElementById("message-recaptcha-error").style.display = "initial";
        } else {
          // Show recaptcha and submit button.
          document.getElementById("recaptcha").style.display = "initial";
          document.getElementById("message-required-recaptcha").style.display = "initial";
          document.getElementById("button-send").style.display = "initial";
          
          // A recaptcha error occurred.
          document.getElementById("message-success").style.display = "none";
          document.getElementById("message-recaptcha-error").style.display = "initial";
        }
      });
    } else {
      document.getElementById("message-required-recaptcha").style.display = "initial";
      document.getElementById("button-send").style.display = "initial";
      document.getElementById("message-success").style.display = "none";
      document.getElementById("message-recaptcha-error").style.display = "none";
    } // if
  }

  /**
   * Set recaptcha value.
   * @param {string} value 
   */
  handleRecaptchaOnChange = (value) => {
    if (value != null) {
      this.setState({
        recaptcha: {
          valid: true,
          response: value
        } // recaptcha
      }); // setState
    } else {
      this.setState({
        recaptcha: {
          valid: false,
          response: null
        } // recaptcha
      }); // setState
    } // else
  }
}

export default Contact;