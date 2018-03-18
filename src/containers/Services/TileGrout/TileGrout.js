import React from "react";

const services = () => {
  return (
    <div>
        {/* start page title section */}
        <section class="wow fadeIn parallax" data-stellar-background-ratio="0.5" style ={ { backgroundImage: "url('http://placehold.it/1920x1100')" } }>
            <div class="opacity-medium bg-extra-dark-gray"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 extra-small-screen display-table page-title-large">
                        <div class="display-table-cell vertical-align-middle text-center">
                            {/* start sub title */}
                            <h1 class="text-white alt-font font-weight-600 letter-spacing-minus-1 margin-10px-bottom">Services</h1>
                            {/* end sub title */}
                            {/* start page title */}
                            <span class="text-white opacity6 alt-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            {/* end page title */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end page title section */}
    </div>
  );
}

export default services;
