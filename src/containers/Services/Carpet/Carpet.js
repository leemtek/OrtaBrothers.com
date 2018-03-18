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

        {/* start carpet section */}
        <section class="no-padding wow fadeIn bg-light-gray">
            <div class="container-fluid">
                <div class="row equalize sm-equalize-auto">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 cover-background sm-height-500px xs-height-350px wow fadeInLeft" style ={ { backgroundImage: "url('http://placehold.it/960x668')" } }><div class="xs-height-400px"></div></div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 wow fadeInRight">
                        <div class="padding-ten-all pull-left md-padding-ten-all sm-no-padding-lr xs-padding-50px-tb xs-no-padding-lr">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-four-bottom sm-margin-40px-bottom xs-margin-30px-bottom xs-no-padding-lr">
                                <h5 class="alt-font text-extra-dark-gray sm-text-center sm-width-70 sm-margin-lr-auto xs-width-100 text-uppercase font-weight-700 sm-no-margin-bottom">Carpet Cleaning</h5>
                            </div>
                            <div class="col-2-nth xs-text-center">
                                {/* start feature box item */}
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-six-bottom md-no-padding-right md-margin-30px-bottom xs-margin-30px-bottom xs-no-padding last-paragraph-no-margin">
                                    <div class="text-extra-dark-gray margin-10px-bottom alt-font"><span class="text-deep-pink margin-10px-right xs-display-block xs-no-margin">01.</span>Pre-Spray/Hot Water Extraction</div>
                                    <p class="width-90 xs-width-100">This is the preferred method of cleaning by most carpet manufactures. We apply a pre-treatment to break down soils, loosen oil deposits and remove spots to the carpet. We then agitated the fibers with a carpet rack. A cleaning solution is then injected into the carpet pile and immediately extracted with our powerful truck-mount system. The carpet is left with no detergent residue  feeling softer, cleaner and brighter.</p>
                                </div>
                                {/* end feature box item */}
                                {/* start feature box item */}
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-six-bottom md-no-padding-right md-margin-30px-bottom xs-margin-30px-bottom xs-no-padding last-paragraph-no-margin">
                                    <div class="text-extra-dark-gray margin-10px-bottom alt-font"><span class="text-deep-pink margin-10px-right xs-display-block xs-no-margin">02.</span>Carpet Protection</div>
                                    <p class="width-90 xs-width-100">A great way to keep the carpet cleaner for longer, is to have it treated with carpet protection. All carpet when manufactured has a protective coating applied. Eventually this wears away and it&#39;s left with no repellent. As your carpet starts to age, you lose protection due to the break down of the repellent. We recommend to have carpet protection reapplied after having your carpets professionally cleaned. It will repel wet and dry soils. We apply this through a pressurized water line after the cleaning is completely finished. 
</p>
                                </div>
                                {/* end feature box item */}
                                {/* start feature box item */}
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-six-bottom md-no-padding-right md-margin-30px-bottom xs-margin-30px-bottom xs-no-padding last-paragraph-no-margin">
                                    <a href="#" class="btn btn-dark-gray btn-small text-extra-small border-radius-4 margin-20px-top"><i class="fa fa-play-circle icon-very-small margin-5px-right no-margin-left" aria-hidden="true"></i>Learn More</a>
                                </div>
                                {/* end feature box item */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end carpet section */}

    </div>
  );
}

export default services;
