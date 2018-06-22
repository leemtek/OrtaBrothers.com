import React from "react";
import SinglePerson from "./SinglePerson";


const softwareengineers = () => {
  return (
  <div>
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
            name="Duane Leem"
            imgURL="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/images/profile-duaneleem.jpg"
          >
            With extensive knowledge in the IT Field and Project Management Duane is able to lead his team to complete quality work and designs for his clients, Duane is a veteran in the field. While using web development to solve problems and in turn creating solutions. Duane is an avid consumer of knowledge while passing his passion to his Children and those around him.
          </SinglePerson>
        </div>
      </div>
    </section>
    {/* end contact form section */}
  </div>
  );
}

export default softwareengineers;
