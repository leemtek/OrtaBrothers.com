import React from "react";

const obFooter = () => {
  return (    
    <footer className="footer-modern padding-five-tb xs-padding-30px-tb">
        <div className="footer-widget-area padding-40px-bottom xs-padding-30px-bottom">
            <div className="container">
                <div className="row equalize xs-equalize-auto">
                    {/* start slogan */}
                    <div className="col-md-4 col-sm-12 col-xs-12 xs-text-center sm-margin-three-bottom xs-margin-20px-bottom display-table">
                        <div className="display-table-cell vertical-align-middle">
                            <h6 className="text-dark-gray width-70 md-width-100 no-margin-bottom">Favorate Carpet Cleaning In Contra Costa County </h6>
                        </div>
                    </div>
                    {/* end slogan */}
                    {/* start contact information */}
                    <div className="col-md-4 col-sm-6 col-xs-12 xs-text-center xs-margin-20px-bottom display-table">
                        <div className="display-table-cell vertical-align-middle">
                            <span className="display-block">P.O. BOX 991,<br />Concord, CA 94521</span>
                            <a href="mailto:OrtaBrothers@gmail.com" title="OrtaBrothers@gmail.com">OrtaBrothers@gmail.com</a>   |   <a href="tel:9255250902">(925) 525-0902</a>
                        </div>
                    </div>
                    {/* end contact information */}
                    <div className="col-md-4 col-sm-6 col-xs-12 social-style-2 xs-text-center display-table">
                        <div className="display-table-cell vertical-align-middle">
                            {/* start logo */}
                            <a href="index.html"><img className="footer-logo" src="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/logo-black.jpg" 
                            data-at2x="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/logo-black.jpg" alt="Orta Brothers" /></a>
                            {/* end logo */}
                            {/* start social media */}
                            <div className="social-icon-style-8">
                                <ul className="text-extra-small margin-20px-top xs-no-margin-bottom text-uppercase no-padding no-margin-bottom list-style-none">                                    
                                    <li className="display-inline-block margin-10px-right"><a href="https://www.facebook.com/pages/Orta-Brothers-Carpet-Cleaning/213766405325647" 
                                    target="_blank" title="Facebook">Facebook</a></li>
                                    <li className="display-inline-block margin-10px-right"><a href="http://www.linkedin.com/pub/isaias-orta/83/2b7/99" target="_blank" 
                                    title="Linkedin">Linkedin</a></li>
                                </ul>
                            </div>
                            {/* end social media */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="footer-bottom border-color-extra-light-gray border-top padding-40px-top xs-padding-30px-top">
                <div className="row">
                    {/* start copyright */}
                    <div className="col-md-6 col-sm-6 col-xs-12 text-left text-small xs-text-center">&copy; 2018 Orta Brothers</div>
                    <div className="col-md-6 col-sm-6 col-xs-12 text-right text-small xs-text-center">Web Development by <a href="/software-engineers">Orta Brothers Software 
                    Engineers</a></div>
                    {/* end copyright */}
                </div>
            </div>
        </div>
    </footer>    
  );
}
export default obFooter;
