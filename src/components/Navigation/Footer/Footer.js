import React from "react";

const obFooter = () => {
  return (
    <footer className="footer-classic-dark bg-extra-dark-gray padding-five-bottom xs-padding-30px-bottom">
      <div className="bg-dark-footer padding-50px-tb xs-padding-30px-tb">
          <div className="container">
              <div className="row equalize xs-equalize-auto">
                  {/* start slogan */}
                  <div className="col-md-4 col-sm-5 col-xs-12 text-center alt-font display-table xs-text-center xs-margin-15px-bottom">
                      <div className="display-table-cell vertical-align-middle">
                          SF East Bay Carpet Cleaning
                      </div>
                  </div>
                  {/* end slogan */}
                  {/* start logo */}
                  <div className="col-md-4 col-sm-2 col-xs-12 text-center display-table xs-margin-10px-bottom">
                      <div className="display-table-cell vertical-align-middle">
                          <a href="index.html">
                            <img className="footer-logo" src="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/logo-black.jpg" data-at2x="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/logo-black.jpg" alt="Orta Brothers" />
                        </a>
                      </div>
                  </div>
                  {/* end logo */}
                  {/* start social media */}
                  <div className="col-md-4 col-sm-5 col-xs-12 col-xs-12 text-center display-table xs-text-center">
                      <div className="display-table-cell vertical-align-middle">
                          <span className="alt-font margin-20px-right">On social networks</span>
                          <div className="social-icon-style-8 display-inline-block vertical-align-middle">
                              <ul className="small-icon no-margin-bottom">
                                  <li><a className="facebook text-white" href="https://www.facebook.com/pages/Orta-Brothers-Carpet-Cleaning/213766405325647" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                  <li><a className="linkedin text-white" href="http://www.linkedin.com/pub/isaias-orta/83/2b7/99" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  {/* end social media */}
              </div>
          </div>
      </div>
      <div className="footer-widget-area padding-five-top padding-30px-bottom xs-padding-30px-top">
          <div className="container">
              <div className="row">
                  {/* start about */}
                  <div className="col-md-3 col-sm-6 col-xs-12 widget sm-margin-30px-bottom xs-text-center">
                      <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-15px-bottom font-weight-600">About Orta Brothers</div>
                      <p className="text-small width-95 xs-width-100 no-margin">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the and typesetting industry. </p>
                  </div>
                  {/* end about */}
                  {/* start blog post */}
                  <div className="col-md-3 col-sm-6 col-xs-12 widget sm-margin-30px-bottom">
                      <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-15px-bottom font-weight-600 xs-text-center">Latest Blog Post</div>
                      <ul className="latest-post position-relative top-3">
                          <li className="border-bottom border-color-medium-dark-gray">
                              <figure>
                                  <a href="blog-post-layout-01.html"><img src="https://placehold.it/700x403" alt="" /></a>
                              </figure>
                              <div className="text-small"><a href="blog-post-layout-01.html">Design is not just what looks...</a> <span className="clearfix"></span>20 April 2017 | by <a href="blog-grid.html">Herman Miller</a></div>
                          </li>
                          <li className="border-bottom border-color-medium-dark-gray">
                              <figure>
                                  <a href="blog-post-layout-02.html"><img src="https://placehold.it/700x403" alt="" /></a>
                              </figure>
                              <div className="text-small"><a href="blog-post-layout-02.html">A lot of care, effort & passion...</a> <span className="clearfix"></span>20 April 2017 | by <a href="blog-grid.html">Herman Miller</a></div>
                          </li>
                          <li>
                              <figure>
                                  <a href="blog-post-layout-03.html"><img src="https://placehold.it/700x403" alt="" /></a>
                              </figure>
                              <div className="text-small"><a href="blog-post-layout-03.html">I love making the stuff, that's...</a> <span className="clearfix"></span>20 April 2017 | by <a href="blog-grid.html">Herman Miller</a></div>
                          </li>
                      </ul>
                  </div>
                  {/* end blog post */}
                  {/* start newsletter */}
                  <div className="col-md-3 col-sm-6 col-xs-12 widget sm-margin-30px-bottom xs-text-center">
                      <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-15px-bottom font-weight-600">Subscribe Newsletter</div>
                      <p className="text-small width-90 xs-width-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <form id="subscribenewsletterform" action="javascript:void(0)" method="post">
                          <div className="position-relative newsletter width-95">
                              <div id="success-subscribe-newsletter" className="no-margin-lr"></div>
                              <input type="text" id="email" name="email" className="bg-transparent text-small no-margin border-color-medium-dark-gray" placeholder="Enter your email..." />
                              <button id="button-subscribe-newsletter" type="submit" className="btn btn-arrow-small position-absolute border-color-medium-dark-gray"><i className="fa fa-caret-right no-margin-left"></i></button>
                          </div>   
                      </form>
                  </div>
                  {/* end newsletter */}
                  {/* start instagram */}
                  <div className="col-md-3 col-sm-6 col-xs-12 widget xs-margin-5px-bottom xs-text-center">
                      <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-20px-bottom font-weight-600">Follow us Instagram</div>
                      <div className="instagram-follow-api">
                          <ul id="instaFeed-footer"></ul>
                      </div>
                  </div>
                  {/* end instagram */}
              </div>
          </div>
      </div>
      <div className="container">
          <div className="footer-bottom border-top border-color-medium-dark-gray padding-30px-top">
              <div className="row">
                  {/* start copyright */}
                  <div className="col-md-6 col-sm-6 col-xs-12 text-left text-small xs-text-center">&copy; 2018 Orta Brothers</div>
                  <div className="col-md-6 col-sm-6 col-xs-12 text-right text-small xs-text-center">Web Development by <a href="https://www.leemtek.com" target="_blank">LeemTek</a></div>
                  {/* end copyright */}
              </div>
          </div>
      </div>
  </footer>
  );
}
export default obFooter;