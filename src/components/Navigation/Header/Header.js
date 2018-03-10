import React from "react";
import { Link } from "react-router-dom";
import '../../../App.css';

const obHeader = () => {
  return (
    <header>
      {/* start navigation */}
      <nav className="navbar navbar-default bootsnav bg-white header-light nav-box-width navbar-top on no-full">
          <div className="container nav-header-container">
              <div className="row">
                {/* start logo */}
                <div className="col-md-2 col-xs-5">
                    <a href="index.html" title="Pofo" className="logo"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/template-pofo/images/logo.png" data-at2x="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/template-pofo/images/logo@2x.png" className="logo-dark" alt="Pofo" /><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/template-pofo/images/logo.png" data-at2x="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/template-pofo/images/logo@2x.png" alt="Pofo" className="logo-light default" /></a>
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
                            <li className="dropdown">
                                <a href="/services">Services</a><i className="fa fa-angle-down dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                            </li>
                            
                            <li className="dropdown simple-dropdown"><a href="/about/orta-brothers" title="About">About</a><i className="fa fa-angle-down dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                                {/* start sub menu */}
                                <ul className="dropdown-menu" role="menu">
                                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/about/orta-brothers">Orta Brothers</a></li>
                                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/about/faqs">FAQs</a></li>
                                </ul>
                                {/* end sub menu */}
                            </li>

                            <li className="dropdown simple-dropdown"><a href="javascript:void(0);" title="Blog">Contact Us</a><i className="fa fa-angle-down dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                                {/* start sub menu */}
                                <ul className="dropdown-menu" role="menu">
                                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);">Contact Info</a></li>
                                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);">Request Quote</a></li>
                                </ul>
                                {/* end sub menu */}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2 col-xs-5 width-auto">
                    <div className="header-searchbar">
                        <a href="#search-header" className="header-search-form text-white"><i className="fa fa-search search-button"></i></a>
                        {/* start search input */}
                        <form id="search-header" method="post" action="search-result.html" name="search-header" className="mfp-hide search-form-result">
                            <div className="search-form position-relative">
                                <button type="submit" className="fa fa-search close-search search-button"></button>
                                <input type="text" name="search" className="search-input" placeholder="Enter your keywords..." autoComplete="off" />
                            </div>
                        </form>
                        {/* end search input */}
                    </div>
                    <div className="header-social-icon xs-display-none">
                        <a href="https://www.facebook.com/" title="Facebook" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/" title="Twitter" target="_blank"><i className="fa fa-twitter"></i></a>
                        <a href="https://dribbble.com/" title="Dribbble" target="_blank"><i className="fa fa-dribbble"></i></a>                          
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