import React from "react";

const contact = () => {
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
                            <form id="contact-form" action="javascript:void(0)" method="post">
                                <div>
                                    <div id="success-contact-form" className="no-margin-lr"></div>
                                    <input type="text" name="name" id="name" placeholder="Full Name*" className="border-radius-4 bg-white medium-input" />
                                    <input type="text" name="email" id="email" placeholder="E-mail*" className="border-radius-4 bg-white medium-input" />
                                    <input type="text" name="phone" id="phone" placeholder="Phone" className="border-radius-4 bg-white medium-input" />
                                    <textarea name="comment" id="comment" placeholder="Your Message" rows="5" className="border-radius-4 bg-white medium-textarea"></textarea>
                                    {/* INSERT RECAPCHA HERE */}
                                    <button id="contact-us-button" type="submit" className="btn btn-small border-radius-4 btn-dark-gray">send message</button>
                                </div>
                            </form>
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
}

export default contact;