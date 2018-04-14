import React from "react";
import upholstery from '../../services-upholstery.jpeg';
import tile from '../../services-tile.jpg';

const services = () => {
  return (
    <div>
        {/* start page title section */}
        <section class="wow fadeIn parallax" data-stellar-background-ratio="0.5" style ={ { backgroundImage: `url(${require('../../services-hero.jpeg')})` } }>
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
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 cover-background sm-height-500px xs-height-350px wow fadeInLeft" style ={ { backgroundImage: `url(${require('../../services-carpet.jpeg')})` } }><div class="xs-height-400px"></div></div>
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
                                    <a href="#" class="btn btn-dark-gray btn-small text-extra-small border-radius-4 margin-20px-top"><i class="fa fa-play-circle icon-very-small margin-5px-right no-margin-left" aria-hidden="true"></i>Get Started</a>
                                </div>
                                {/* end feature box item */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end carpet section */}

        {/* start upholstery section */}
        <section>
            <div class="container">
                <div class="row">
                    <div class="row text-center">
                        <div class="col-lg-6 col-md-6 col-sm-8 col-xs-12 center-col sm-margin-40px-bottom xs-margin-30px-bottom text-center last-paragraph-no-margin">
                            <h5 class="alt-font text-extra-dark-gray sm-text-center sm-width-70 sm-margin-lr-auto xs-width-100 text-uppercase font-weight-700 sm-no-margin-bottom">Upholstery Cleaning</h5>
                        </div>
                    </div>

                    <div class="col-md-12 margin-60px-bottom xs-margin-30px-bottom wow fadeIn"><img src={upholstery} alt=""/></div>

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

                        {/* start service item */}
                        <div class="col-md-4 col-sm-12 col-xs-12 sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                            <a href="#" class="btn btn-dark-gray btn-small text-extra-small border-radius-4 margin-20px-top"><i class="fa fa-play-circle icon-very-small margin-5px-right no-margin-left" aria-hidden="true"></i>Get Started</a>
                        </div>
                        {/* end service item */}

                    </div>
                </div>
            </div>
        </section>
        {/* end upholstery section */}

        {/* start tile section */}
        <section class="wow fadeIn bg-light-gray">
            <div class="container">
                <div class="row equalize sm-equalize-auto">

                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 display-table sm-margin-30px-bottom wow fadeInLeft">
                        <div class="display-table-cell vertical-align-middle">
                            <img src={tile} class="width-100" alt="" />
                        </div>
                    </div>

                    <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12 display-table col-lg-offset-1 wow fadeInRight">
                        <div class="display-table-cell vertical-align-middle">
                            <h5 class="alt-font text-extra-dark-gray sm-text-center sm-width-70 sm-margin-lr-auto xs-width-100 text-uppercase font-weight-700 sm-no-margin-bottom">Tile & Grout Cleaning</h5>
                            <p class="width-90 xs-width-100">First, all of the surfaces are cleaned and prepared. Then, our Tile Cleaning and Grout Cleaning solution is sprayed on the surface. Using a high-speed floor machine with a specially formulated grout cleaning attachment, heavily soiled areas are then cleaned. A grout brush is also used to get into those hard to reach areas. After the excess solution is cleaned away, the floor is buffed with a commercial buffer. Finally, a grout sealer is applied which will help maintain that fresh, new look!</p> 
                            <a href="#" class="btn btn-dark-gray btn-small text-extra-small border-radius-4 margin-20px-top"><i class="fa fa-play-circle icon-very-small margin-5px-right no-margin-left" aria-hidden="true"></i>Get Started</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* end tile section */}
    </div>
  );
}

export default services;
