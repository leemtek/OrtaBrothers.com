import React from "react";

const services = () => {
  return (
    <div>
        {/* start page title section */}
        <section className="wow fadeIn bg-light-gray padding-35px-tb page-title-small top-space">
            <div className="container">
                <div className="row equalize xs-equalize-auto">
                    <div className="col-lg-8 col-md-6 col-sm-6 col-xs-12 display-table">
                        <div className="display-table-cell vertical-align-middle text-left xs-text-center">
                            {/* start page title */}
                            <h1 className="alt-font text-extra-dark-gray font-weight-600 no-margin-bottom text-uppercase">Orta Brother Services</h1>
                            {/* end page title */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 display-table text-right xs-text-left xs-margin-10px-top">
                        <div className="display-table-cell vertical-align-middle breadcrumb text-small alt-font">
                            {/* start breadcrumb */}
                            <ul className="xs-text-center">
                                <li><a href="/" className="text-dark-gray">Home</a></li>
                                <li className="text-dark-gray">Services</li>
                            </ul>
                            {/* end breadcrumb */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* start feature box section */}
        <section className="wow fadeIn">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 center-col margin-eight-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
                        <div className="alt-font text-medium-gray margin-10px-bottom text-uppercase text-small">Carpet Cleaning Solutions</div>
                        <h5 className="alt-font text-extra-dark-gray font-weight-600">Providing full carpet cleaning solutions in the San Francisco Bay Area</h5>
                    </div>
                </div>
                <div className="row">
                    {/* start feature box item */}
                    <div className="col-md-4 col-sm-4 col-md-push-2 col-sm-push-2 col-xs-12 xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin xs-text-center">
                        <div className="margin-ten-bottom overflow-hidden image-hover-style-1 sm-margin-20px-bottom">
                            <a href="/services/commercial"><img src="https://placehold.it/360x200" alt=""/></a>
                        </div>
                        <a href="/services/commercial" className="alt-font margin-5px-bottom display-block text-extra-dark-gray font-weight-600 text-uppercase text-small">Commercial Services</a>
                        <p className="width-95 sm-width-100">Lorem Ipsum is simply text the printing and typesetting standard industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        <div className="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
                        <a href="/services/commercial" className="text-uppercase alt-font text-extra-dark-gray font-weight-600 text-extra-small">View Commercial Services <i className="fa fa-long-arrow-right margin-5px-left text-deep-pink text-medium position-relative top-2" aria-hidden="true"></i></a>
                    </div>
                    
                    {/* start feature box item */}
                    <div className="col-md-4 col-sm-4 col-md-push-2 col-sm-push-2 col-xs-12 xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin xs-text-center" data-wow-delay="0.2s">
                        <div className="margin-ten-bottom overflow-hidden image-hover-style-1 sm-margin-20px-bottom">
                            <a href="/services/residential"><img src="https://placehold.it/360x200" alt=""/></a>
                        </div>
                        <a href="/services/residential" className="alt-font margin-5px-bottom display-block text-extra-dark-gray font-weight-600 text-uppercase text-small">Residential Services</a>
                        <p className="width-95 sm-width-100">Lorem Ipsum is simply text the printing and typesetting standard industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        <div className="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
                        <a href="/services/residential" className="text-uppercase alt-font text-extra-dark-gray font-weight-600 text-extra-small">View Residential Services <i className="fa fa-long-arrow-right margin-5px-left text-deep-pink text-medium position-relative top-2" aria-hidden="true"></i></a>
                    </div>
                </div>{/* /row */}
            </div>
        </section>

    </div>
  );
}

export default services;
