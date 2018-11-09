import React from "react";
import { Link } from "react-router-dom";
import '../../../App.css';
// import "./Header.css";

const obHeader = () => {
  return (
    <header>
      {/* start navigation */}
      <nav className="navbar navbar-default bootsnav bg-white header-light nav-box-width navbar-top on no-full">
          <div className="container nav-header-container">
              <div className="row">
                {/* start logo */}
                <div className="col-md-2 col-xs-5">
                    <a href="/" className="logo">
                        <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/logo-white.png" data-at2x="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/logo-white.png" className="logo-dark" alt="Orta Brothers" />
                        <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/logo-white.png" data-at2x="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/logo-white.png" alt="Orta Brothers" className="logo-light default" />
                    </a>

                    <a className="btn btn-primary btn-sm navbar-btn pull-right hidden-md hidden-lg"
                        href="https://housecallpro.com/book/Orta-Brothers-Inc/5bc65b2f0284499ab53b2ac217e1cbae" target="_blank">
                        Book Online
                    </a>
                </div>
                {/* end logo */}
                <div className="col-md-7 col-xs-2 width-auto pull-right accordion-menu xs-no-padding-right">
                    <button type="button" className="navbar-toggle collapsed pull-right" data-toggle="collapse" data-target="#navbar-collapse-toggle-1">
                        <span className="sr-only">toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <div className="navbar-collapse collapse pull-right" id="navbar-collapse-toggle-1">
                        <ul id="accordion" className="nav navbar-nav navbar-left no-margin alt-font text-normal" data-in="fadeIn" data-out="fadeOut">
                            {/* start menu item */}
                            <li className="dropdown">
                                <a href="/">Home</a><i className="fa fa-angle-down dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                            </li>
                            {/* end menu item */}

                            {/* start menu item */}
                            <li className="dropdown simple-dropdown"><a href="/services" title="About">Services</a><i className="fa fa-angle-down dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                                {/* start sub menu */}
                                <ul className="dropdown-menu" role="menu">
                                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/services/commercial">Commercial</a></li>
                                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/services/residential">Residential</a></li>
                                </ul>
                                {/* end sub menu */}
                            </li>
                            {/* end menu item */}

                            <li className="dropdown simple-dropdown"><a href="/about/orta-brothers" title="About">About</a><i className="fa fa-angle-down dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                                {/* start sub menu */}
                                <ul className="dropdown-menu" role="menu">
                                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/about/orta-brothers">Orta Brothers</a></li>
                                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/about/faqs">FAQs</a></li>
                                </ul>
                                {/* end sub menu */}
                            </li>

                            <li className="dropdown simple-dropdown"><a href="/contact" title="Contact Us">Contact Us</a><i className="fa fa-angle-down dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                                {/* start sub menu */}
                                <ul className="dropdown-menu" role="menu">
                                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/contact">Contact Info</a></li>
                                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="https://housecallpro.com/book/Orta-Brothers-Inc/5bc65b2f0284499ab53b2ac217e1cbae" target="_blank">Book Online</a></li>
                                </ul>
                                {/* end sub menu */}
                            </li>
                        </ul>

                        <a className="btn btn-primary btn-sm navbar-btn sm-display-none"
                            style={{marginTop: "16px", marginLeft: "20px"}}
                            href="https://housecallpro.com/book/Orta-Brothers-Inc/5bc65b2f0284499ab53b2ac217e1cbae" target="_blank">
                            Book Online
                        </a>
                    </div>
                </div>
                <div className="col-md-2 col-xs-5 width-auto">
                    <div className="header-social-icon">
                        <a href="https://www.facebook.com/pages/Orta-Brothers-Carpet-Cleaning/213766405325647" title="Facebook" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="http://www.linkedin.com/pub/isaias-orta/83/2b7/99" title="LinkedIn" target="_blank"><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
              </div>
          </div>
      </nav>
      {/* end navigation */}
    </header>
  );
}



export default obHeader;
