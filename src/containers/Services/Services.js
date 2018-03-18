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

        {/* start carpet cleaning section */}
        <section>
            <div class="container">
                <div class="row">
                    <div class="row text-center">
                        <div class="col-lg-6 col-md-6 col-sm-8 col-xs-12 center-col sm-margin-40px-bottom xs-margin-30px-bottom text-center last-paragraph-no-margin">
                            <h5 class="alt-font text-uppercase text-extra-dark-gray font-weight-700">Upholstery Cleaning</h5>
                        </div>
                    </div>

                    <div class="col-md-12 margin-60px-bottom xs-margin-30px-bottom wow fadeIn"><img src="http://placehold.it/1600x639" alt=""/></div>

                    {/* row 1 */}
                    <div className="row margin-40px-bottom margin-20px-lr">
                        {/* start service item */}
                        <div class="col-md-4 col-sm-12 col-xs-12 sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                            <span class="text-medium alt-font text-extra-dark-gray display-block margin-15px-bottom sm-margin-10px-bottom">Vacuuming</span>
                            <p class="width-90 sm-width-100 xs-margin-15px-bottom">Upholstery acts like a giant air filter, in that it picks up dust, dander, and other microscopic particles and traps them. Over time, these particles will become entangled in the fabric, discoloring it and damaging it as it is ground in further. Dry vacuuming is the first step to getting rid of it, using our powerful truck-mount vacuum system to remove any soils that are clinging loosely to the upholstery.</p>
                            <div class="separator-line-horrizontal-medium-light margin-30px-top sm-no-margin-top bg-deep-pink"></div>
                        </div>
                        {/* end service item */}

                        {/* start service item */}
                        <div class="col-md-4 col-sm-12 col-xs-12 sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                            <span class="text-medium alt-font text-extra-dark-gray display-block margin-15px-bottom sm-margin-10px-bottom">Pre-spray/ pre-conditioning</span>
                            <p class="width-90 sm-width-100 xs-margin-15px-bottom">We employ a formulated pre-spray pre-conditioning that emulsifies the soil and separates it from the fabric’s fibers. This conditioner is gentle enough for use on most fabrics, though some materials will be too delicate. It is also safe enough to use around various types of flooring, avoiding damage to the carpet or hardwood.</p>
                            <div class="separator-line-horrizontal-medium-light margin-30px-top sm-no-margin-top bg-deep-pink"></div>
                        </div>
                        {/* end service item */}

                        {/* start service item */}
                        <div class="col-md-4 col-sm-12 col-xs-12 sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                            <span class="text-medium alt-font text-extra-dark-gray display-block margin-15px-bottom sm-margin-10px-bottom">Agitating the fabric</span>
                            <p class="width-90 sm-width-100 xs-margin-15px-bottom">Once the pre-spray is applied, it needs to be pushed into the upholstery to reach its target. The use of gentle agitation, either with a hand brush or a tool that uses a brush attachment and slow movements. Gentle agitation also helps to shake matted-in soils loose, and will make it easy to pick up with a rinsing device.</p>
                            <div class="separator-line-horrizontal-medium-light margin-30px-top sm-no-margin-top bg-deep-pink"></div>
                        </div>
                        {/* end service item */}
                    </div>

                    {/* row 2 */}
                    <div className="row margin-40px-bottom margin-20px-lr">
                        {/* start service item */}
                        <div class="col-md-4 col-sm-12 col-xs-12 sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                            <span class="text-medium alt-font text-extra-dark-gray display-block margin-15px-bottom sm-margin-10px-bottom">Fabric Rinse</span>
                            <p class="width-90 sm-width-100 xs-margin-15px-bottom">The soil has been suspended by now and only needs to be washed away with a rinse. Using a rinsing wand that runs a jet of water over the fabric’s surface. It doesn’t use too much water and is powerful enough to rinse away suspended soil.</p>
                            <div class="separator-line-horrizontal-medium-light margin-30px-top sm-no-margin-top bg-deep-pink"></div>
                        </div>
                        {/* end service item */}

                        {/* start service item */}
                        <div class="col-md-4 col-sm-12 col-xs-12 sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                            <span class="text-medium alt-font text-extra-dark-gray display-block margin-15px-bottom sm-margin-10px-bottom">Fabric Protection</span>
                            <p class="width-90 sm-width-100 xs-margin-15px-bottom">We recommend applying fabric protection to your sofa after each cleaning, this will help it resist future soiling. This substance is perfectly safe to use and will not harm the furniture or people in any way.</p>
                            <div class="separator-line-horrizontal-medium-light margin-30px-top sm-no-margin-top bg-deep-pink"></div>
                        </div>
                        {/* end service item */}
                    </div>




                </div>
            </div>
        </section>
        {/* end carpet cleaning section */}
    </div>
  );
}

export default services;
