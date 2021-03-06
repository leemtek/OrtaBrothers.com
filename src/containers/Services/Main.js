import React from "react";
import {Helmet} from "react-helmet";

const services = () => {
  let seoAuthor = "Orta Brothers";
  let seoTitle = "Orta Brothers Carpet Cleaning";
  let seoDescription = "Orta Brothers is a family owned business, serving residents and commercial clients alike since 2002. Our customers have rated us the 'best carpet cleaning company in town' and our commercial clients have year after year continued to us our efficient no time waiting techniques.";

  return (
    <div>
        <Helmet>
          <title>{seoTitle} - Orta Brothers</title>
          <meta name="author" content={seoAuthor} />
          <meta name="description" content={seoDescription} />
          <meta name="keywords" content="carpet cleaning, san francisco, east bay, residential, commercial" />
          <link rel="canonical" href="https://www.ortabrothers.com/software-engineers" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={seoTitle + " - Orta Brothers"} />
          <meta property="og:description" content={seoDescription} />
          <meta property="og:url" content="https://ortabrothers.com/" />
          <meta property="og:site_name" content="Orta Brothers" />
          <meta property="og:image" content="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/logo-black.jpg" />
          <meta property="og:image:secure_url" content="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/logo-black.jpg" />
          <meta property="og:image:width" content="2037" />
          <meta property="og:image:height" content="1639" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content={seoDescription} />
          <meta name="twitter:title" content={seoTitle + " - Orta Brothers"} />
          <meta name="twitter:image" content="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/logo-black.jpg" />
        </Helmet>
        
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
                            <a href="/services/commercial"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/clean-interior-360x200.jpg" alt="Clean Interior" /></a>
                        </div>
                        <a href="/services/commercial" className="alt-font margin-5px-bottom display-block text-extra-dark-gray font-weight-600 text-uppercase text-small">Commercial Services</a>
                        <p className="width-95 sm-width-100">Whether it’s a large building, restaurant or a boutique shop, our technicians have the experience and tools to provide you with a service beyond your expectations.</p>
                        <div className="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
                        <a href="/services/commercial" className="text-uppercase alt-font text-extra-dark-gray font-weight-600 text-extra-small">View Commercial Services <i className="fa fa-long-arrow-right margin-5px-left text-deep-pink text-medium position-relative top-2" aria-hidden="true"></i></a>
                    </div>
                    
                    {/* start feature box item */}
                    <div className="col-md-4 col-sm-4 col-md-push-2 col-sm-push-2 col-xs-12 xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin xs-text-center" data-wow-delay="0.2s">
                        <div className="margin-ten-bottom overflow-hidden image-hover-style-1 sm-margin-20px-bottom">
                            <a href="/services/residential"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/orta-brothers-cleaning-rugs-360x200.jpg" alt="Orta Brothers Cleaning Rugs" /></a>
                        </div>
                        <a href="/services/residential" className="alt-font margin-5px-bottom display-block text-extra-dark-gray font-weight-600 text-uppercase text-small">Residential Services</a>
                        <p className="width-95 sm-width-100">Orta Brothers is a well-known company for our professional, residential carpet cleaning and reputation as the best carpet cleaners in town.</p>
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
