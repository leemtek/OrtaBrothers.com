import React from "react";
import {Helmet} from "react-helmet";

import SinglePerson from "./SinglePerson";
import './SoftwareEngineers.css';

const softwareengineers = () => {
  let seoAuthor = "Duane Leem";
  let seoTitle = "Software Engineers";
  let seoDescription = "Meet our Software Engineering team who helped build our React web application.";

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
              <h1 className="alt-font text-extra-dark-gray font-weight-600 no-margin-bottom text-uppercase">Software Engineers</h1>
              {/* end page title */}
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 display-table text-right xs-text-left xs-margin-10px-top">
            <div className="display-table-cell vertical-align-middle breadcrumb text-small alt-font">
              {/* start breadcrumb */}
              <ul className="xs-text-center">
                <li><a href="/" className="text-dark-gray"><i className="fa fa-home"></i></a></li>
                <li className="text-dark-gray">Software Engineers</li>
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
              <h5 className="alt-font font-weight-700 text-extra-dark-gray text-uppercase">Our <strong>Software Engineering Team</strong></h5>
              <p className="lead">Meet our Software Engineering team who helped build our React web application.</p>
            </div>
          </div>
          <div className="row">
            <SinglePerson 
              name="Isaiah Orta"
              title="Chief Executive Officer"
              imgURL="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/software-engineers-isaiah-orta.jpg"
              socialURL_linkedin="https://www.linkedin.com/in/isaias-orta-0992b783/"
              socialURL_portfolio="https://www.ortabrothers.com"
            >
              Isaiah is responsible for the the growth, stability, direction and daily operation of Orta Brothers.
            </SinglePerson>
            <SinglePerson 
              name="Duane Leem"
              title="Project Manager"
              imgURL="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/images/profile-duaneleem.jpg"
              socialURL_facebook="https://www.facebook.com/duaneleem"
              socialURL_linkedin="https://www.linkedin.com/in/duaneleem"
              socialURL_portfolio="https://duaneleem.com/"
            >
              With extensive knowledge in the IT Field and Project Management Duane is able to lead his team to complete quality work and designs for his clients, Duane is a veteran in the field. While using web development to solve problems and in turn creating solutions. Duane is an avid consumer of knowledge while passing his passion to his Children and those around him.
            </SinglePerson>
            <SinglePerson 
              name="Gabe Tumbaga"
              title="React Engineer"
              imgURL="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/images/profile-gabetumbaga.jpg"
              socialURL_facebook="https://facebook.com/gtumbaga"
              socialURL_linkedin="https://www.linkedin.com/in/gtumbaga/"
              socialURL_portfolio="https://omga.be/"
            >
              With experience from multiple aspects in the field Gabe has been apart of a lot. whether its upkeep on ecommerce, React or the many other programming languages he knows. when he's not with his kids or family, you can find him modding Minecraft and tweaking his other favorite games.
            </SinglePerson>
            <SinglePerson 
              name="Derrick Leem"
              title="Front-End Engineer"
              imgURL="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/images/profile-derrickleem.jpg"
              socialURL_linkedin="https://www.linkedin.com/in/derrick-leem/"
            >
              Derrick while doing web development is also currently in school pursuing a degree in computer science. While applying the skills he already had coupled with the new skills through study has propelled him to his current skill level.
            </SinglePerson>
            <SinglePerson 
              name="Carlo Anthony"
              title="React Engineer"
              imgURL="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/profile-carlo-antonio-antonio-bilbao.jpg"
              socialURL_linkedin="https://www.linkedin.com/in/carlo-bilbao/"
            >
              I am both a software developer and biotech professional based in the San Francisco Bay Area. I'm passionate about using current and emerging technologies to help solve old problems. Specifically, problems that plague those that are less fortunate, marginalized, or in situations where they are not able to fix their predicament. It’s these problems and the avenues that new technology creates, that motivates me to learn and develop new skills and technologies.
            </SinglePerson>
            <SinglePerson 
              name="Will Carpio"
              title="SEO Analyst"
              imgURL="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/images/profile-willcarpio.jpg"
              socialURL_facebook="https://www.facebook.com/people/Will-Carpio/100008976306275"
              socialURL_linkedin="https://www.linkedin.com/in/will-carpio-821b1815a/"
              socialURL_twitter="https://twitter.com/Humble_Gatsby"
            >
              New to the development team but on the fast track to becoming on par with his peers, Will is versed and knowledgeable in a few languages and on the way to mastering more. When not down working on new project you can usually find him with his dog Bart.
            </SinglePerson>
          </div>
        </div>
      </section>
      {/* end contact form section */}
    </div>
  );
}

export default softwareengineers;
