import React from "react";
import {Helmet} from "react-helmet";

const commercial = () => {
  let seoAuthor = "Orta Brothers";
  let seoTitle = "Commercial Carpet Cleaning";
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
        <section className="wow fadeIn parallax" data-stellar-background-ratio="0.5" style ={ { backgroundImage: "url('https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/commercial-outside-building.jpg')" } }>
            <div className="opacity-medium bg-extra-dark-gray"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 extra-small-screen display-table page-title-large">
                        <div className="display-table-cell vertical-align-middle text-center">
                            {/* start sub title */}
                            <h1 className="text-white alt-font font-weight-600 letter-spacing-minus-1 margin-10px-bottom">Commercial Services</h1>
                            {/* end sub title */}
                            {/* start page title */}
                            <span className="text-white opacity6 alt-font">#1 Commercial Carpet Cleaning in Contra Costa County!</span>
                            {/* end page title */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end page title section */}

        {/* start carpet section */}
        <section className="no-padding wow fadeIn bg-light-gray">
            <div className="container-fluid">
                <div className="row equalize sm-equalize-auto">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 cover-background sm-height-500px xs-height-350px wow fadeInLeft" style ={ { backgroundImage: "url('https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/services-carpet-cleaning.jpg')" } }><div className="xs-height-400px"></div></div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 wow fadeInRight">
                        <div className="padding-ten-all pull-left md-padding-ten-all sm-no-padding-lr xs-padding-50px-tb xs-no-padding-lr">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-four-bottom sm-margin-40px-bottom xs-margin-30px-bottom xs-no-padding-lr">
                                <h5 className="alt-font text-extra-dark-gray sm-text-center sm-width-70 sm-margin-lr-auto xs-width-100 text-uppercase font-weight-700 sm-no-margin-bottom">Carpet Cleaning</h5>
                            </div>
                            <div className="col-2-nth xs-text-center">
                                {/* start feature box item */}
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-six-bottom md-no-padding-right md-margin-30px-bottom xs-margin-30px-bottom xs-no-padding last-paragraph-no-margin">
                                    <div className="text-extra-dark-gray margin-10px-bottom alt-font"><span className="text-deep-pink margin-10px-right xs-display-block xs-no-margin">01.</span>Pre-Spray/Hot Water Extraction</div>
                                    <p className="width-90 xs-width-100">This is the preferred method of cleaning by most carpet manufactures. We apply a pre-treatment to break down soils, loosen oil deposits and remove spots to the carpet. We then agitated the fibers with a carpet rake. A cleaning solution is then injected into the carpet pile and immediately extracted with our powerful truck-mount system. The carpet is left with no detergent residue  feeling softer, cleaner and brighter.</p>
                                </div>
                                {/* end feature box item */}
                                {/* start feature box item */}
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-six-bottom md-no-padding-right md-margin-30px-bottom xs-margin-30px-bottom xs-no-padding last-paragraph-no-margin">
                                    <div className="text-extra-dark-gray margin-10px-bottom alt-font"><span className="text-deep-pink margin-10px-right xs-display-block xs-no-margin">02.</span>Carpet Protection</div>
                                    <p className="width-90 xs-width-100">A great way to keep the carpet cleaner for longer, is to have it treated with carpet protection. All carpet when manufactured has a protective coating applied. Eventually this wears away and it&#39;s left with no repellent. As your carpet starts to age, you lose protection due to the break down of the repellent. We recommend to have carpet protection reapplied after having your carpets professionally cleaned. It will repel wet and dry soils. We apply this through a pressurized water line after the cleaning is completely finished.</p>
                                </div>
                                {/* end feature box item */}
                                {/* start feature box item */}
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-six-bottom md-no-padding-right md-margin-30px-bottom xs-margin-30px-bottom xs-no-padding last-paragraph-no-margin">
                                    <a href="https://housecallpro.com/book/Orta-Brothers-Inc/5bc65b2f0284499ab53b2ac217e1cbae" target="_blank" className="btn btn-dark-gray btn-small text-extra-small border-radius-4 margin-20px-top"><i className="fa fa-play-circle icon-very-small margin-5px-right no-margin-left" aria-hidden="true"></i>Get Started</a>
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
            <div className="container">
                <div className="row">
                    <div className="row text-center">
                        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12 center-col sm-margin-40px-bottom xs-margin-30px-bottom text-center last-paragraph-no-margin">
                            <h5 className="alt-font text-extra-dark-gray sm-text-center sm-width-70 sm-margin-lr-auto xs-width-100 text-uppercase font-weight-700 sm-no-margin-bottom">Upholstery Cleaning</h5>
                        </div>
                    </div>

                    <div className="col-md-12 margin-60px-bottom xs-margin-30px-bottom wow fadeIn"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/services-upholstery-cleaning.jpg" alt=""/></div>

                    {/* row 1 */}
                    <div className="row margin-40px-bottom margin-20px-lr">
                        {/* start service item */}
                        <div className="col-md-4 col-sm-12 col-xs-12 sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                            <span className="text-medium alt-font text-extra-dark-gray display-block margin-15px-bottom sm-margin-10px-bottom">Vacuuming</span>
                            <p className="width-90 sm-width-100 xs-margin-15px-bottom">Upholstery acts like a giant air filter, in that it picks up dust, dander, and other microscopic particles and traps them. Over time, these particles will become entangled in the fabric, discoloring it and damaging it as it is ground in further. Dry vacuuming is the first step to getting rid of it, using our powerful truck-mount vacuum system to remove any soils that are clinging loosely to the upholstery.</p>
                            <div className="separator-line-horrizontal-medium-light margin-30px-top sm-no-margin-top bg-deep-pink"></div>
                        </div>
                        {/* end service item */}

                        {/* start service item */}
                        <div className="col-md-4 col-sm-12 col-xs-12 sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                            <span className="text-medium alt-font text-extra-dark-gray display-block margin-15px-bottom sm-margin-10px-bottom">Pre-spray/ pre-conditioning</span>
                            <p className="width-90 sm-width-100 xs-margin-15px-bottom">We employ a formulated pre-spray pre-conditioning that emulsifies the soil and separates it from the fabric’s fibers. This conditioner is gentle enough for use on most fabrics, though some materials will be too delicate. It is also safe enough to use around various types of flooring, avoiding damage to the carpet or hardwood.</p>
                            <div className="separator-line-horrizontal-medium-light margin-30px-top sm-no-margin-top bg-deep-pink"></div>
                        </div>
                        {/* end service item */}

                        {/* start service item */}
                        <div className="col-md-4 col-sm-12 col-xs-12 sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                            <span className="text-medium alt-font text-extra-dark-gray display-block margin-15px-bottom sm-margin-10px-bottom">Agitating the fabric</span>
                            <p className="width-90 sm-width-100 xs-margin-15px-bottom">Once the pre-spray is applied, it needs to be pushed into the upholstery to reach its target. The use of gentle agitation, either with a hand brush or a tool that uses a brush attachment and slow movements. Gentle agitation also helps to shake matted-in soils loose, and will make it easy to pick up with a rinsing device.</p>
                            <div className="separator-line-horrizontal-medium-light margin-30px-top sm-no-margin-top bg-deep-pink"></div>
                        </div>
                        {/* end service item */}
                    </div>

                    {/* row 2 */}
                    <div className="row margin-40px-bottom margin-20px-lr">
                        {/* start service item */}
                        <div className="col-md-4 col-sm-12 col-xs-12 sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                            <span className="text-medium alt-font text-extra-dark-gray display-block margin-15px-bottom sm-margin-10px-bottom">Fabric Rinse</span>
                            <p className="width-90 sm-width-100 xs-margin-15px-bottom">The soil has been suspended by now and only needs to be washed away with a rinse. Using a rinsing wand that runs a jet of water over the fabric’s surface. It doesn’t use too much water and is powerful enough to rinse away suspended soil.</p>
                            <div className="separator-line-horrizontal-medium-light margin-30px-top sm-no-margin-top bg-deep-pink"></div>
                        </div>
                        {/* end service item */}

                        {/* start service item */}
                        <div className="col-md-4 col-sm-12 col-xs-12 sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                            <span className="text-medium alt-font text-extra-dark-gray display-block margin-15px-bottom sm-margin-10px-bottom">Fabric Protection</span>
                            <p className="width-90 sm-width-100 xs-margin-15px-bottom">We recommend applying fabric protection to your sofa after each cleaning, this will help it resist future soiling. This substance is perfectly safe to use and will not harm the furniture or people in any way.</p>
                            <div className="separator-line-horrizontal-medium-light margin-30px-top sm-no-margin-top bg-deep-pink"></div>
                        </div>
                        {/* end service item */}

                        {/* start service item */}
                        <div className="col-md-4 col-sm-12 col-xs-12 sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                            <a href="https://housecallpro.com/book/Orta-Brothers-Inc/5bc65b2f0284499ab53b2ac217e1cbae" target="_blank" className="btn btn-dark-gray btn-small text-extra-small border-radius-4 margin-20px-top"><i className="fa fa-play-circle icon-very-small margin-5px-right no-margin-left" aria-hidden="true"></i>Get Started</a>
                        </div>
                        {/* end service item */}

                    </div>
                </div>
            </div>
        </section>
        {/* end upholstery section */}

        {/* start tile section */}
        <section className="wow fadeIn bg-light-gray">
            <div className="container">
                <div className="row equalize sm-equalize-auto">

                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 display-table sm-margin-30px-bottom wow fadeInLeft">
                        <div className="display-table-cell vertical-align-middle">
                            <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/services-tile-grout-cleaning.jpg" className="width-100" alt="Tile Cleaning" />
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 display-table col-lg-offset-1 wow fadeInRight">
                        <div className="display-table-cell vertical-align-middle">
                            <h5 className="alt-font text-extra-dark-gray sm-text-center sm-width-70 sm-margin-lr-auto xs-width-100 text-uppercase font-weight-700 sm-no-margin-bottom">Tile & Grout Cleaning</h5>
                            <p className="width-90 xs-width-100">First, all of the surfaces are cleaned and prepared. Then, our Tile Cleaning and Grout Cleaning solution is sprayed on the surface. Using a high-speed floor machine with a specially formulated grout cleaning attachment, heavily soiled areas are then cleaned. A grout brush is also used to get into those hard to reach areas. After the excess solution is cleaned away, the floor is buffed with a commercial buffer. Finally, a grout sealer is applied which will help maintain that fresh, new look!</p> 
                            <a href="https://housecallpro.com/book/Orta-Brothers-Inc/5bc65b2f0284499ab53b2ac217e1cbae" target="_blank" className="btn btn-dark-gray btn-small text-extra-small border-radius-4 margin-20px-top"><i className="fa fa-play-circle icon-very-small margin-5px-right no-margin-left" aria-hidden="true"></i>Get Started</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* end tile section */}

        {/* start one third section */}
        <section className="wow fadeIn">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-12 col-sm-12 center-col text-center margin-100px-bottom xs-margin-40px-bottom">
                        <div className="position-relative overflow-hidden width-100">
                            <span className="text-small text-outside-line-full alt-font font-weight-600 text-uppercase">#1 Commercial Carpet Cleaning in Contra Costa County!</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* start column */}
                    <div className="col-md-4 col-sm-12 sm-margin-15px-bottom ">
                        <div className="bg-light-gray padding-40px-all xs-padding-30px-all last-paragraph-no-margin">
                            <p>Using a combination of truck mounted, portable units, and very low moisture oscillating machines we can clean every inch of your hard surface floors.</p>                            
                        </div>
                    </div>
                    {/* end column */}
                    {/* start column */}
                    <div className="col-md-4 col-sm-12 sm-margin-15px-bottom ">
                        <div className="bg-light-gray padding-40px-all xs-padding-30px-all last-paragraph-no-margin">
                            <p>Carpet Cleaning improves the cleanliness of your facility, enhancing your company’s image, safety and floor care investment</p>                            
                        </div>
                    </div>
                    {/* end column */}
                    {/* start column */}
                    <div className="col-md-4 col-sm-12 sm-margin-15px-bottom ">
                        <div className="bg-light-gray padding-40px-all xs-padding-30px-all last-paragraph-no-margin">
                        <p>Carpet Cleaning improves indoor air quality</p>
                        </div>
                    </div>
                    {/* end column */}
                </div>
            </div>
        </section>
        {/* end one third section */}

        {/* start parallax section */}
        <section className="parallax" data-stellar-background-ratio="0.6" style ={ { backgroundImage: "url('https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/black-triangle-pattern.jpg')" } }>
            <div className="opacity-medium bg-extra-dark-gray"></div>
            <div className="container-fluid position-relative">
                <div className="row equalize sm-equalize-auto"> 
                    <div className="col-md-6 col-sm-12 col-xs-12 display-table sm-margin-50px-bottom xs-margin-30px-bottom wow fadeIn">
                        <div className="display-table-cell vertical-align-middle text-center">
                            <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/caution-drier-cone.jpg" alt="" className="width-100" />
                        </div>
                    </div> 
                    <div className="col-md-6 col-sm-12 col-xs-12 display-table wow fadeIn" data-wow-delay="0.2s">
                        <div className="display-table-cell vertical-align-middle">
                            <div className="width-75 md-width-100 padding-three-lr xs-no-padding-lr xs-no-padding-bottom">
                                <h4 className="alt-font text-white font-weight-600">How the service works</h4>
                                <ul className="no-padding list-style-4 margin-30px-bottom list-style-color">
                                    <li>Orta Brothers Carpet Cleaning Inc. surveys your operation and creates a custom floor cleaning program based on your cleaning habit.</li>
                                    <li>Flexible programs to meet your changing needs.</li>
                                    <li>We use the best products in the industry and use the treatment methods that best suit your commercial space.</li>
                                </ul>
                                <p>Orta Brothers Commercial Carpet Cleaning is at your service 24/7.  For more information please feel free to call us at <a href="tel:925-525-0902">(925) 525-0902</a></p>

                                <h5 className="alt-font text-white">Our Commercial Accounts Include:</h5>
                                <ul className="list-style-1">
                                    <li>Multi- Family Communities</li>
                                    <li>Apartments</li>
                                    <li>Restaurants</li>
                                    <li>Clubs</li>
                                    <li>Bars</li>
                                    <li>Lounge</li>
                                    <li>Property Manager</li>
                                    <li>Maintenance Supervisor</li>
                                </ul>
                                <p>Whether it’s a large building, restaurant or a boutique shop, our technicians have the experience and tools to provide you with a service 
                                    beyond your expectations. You may only need to remove some stains, clean a whole carpet or even renew the upholstery in your lobby/lounge, 
                                    either way we look forward to serving you. </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        {/* end parallax section */}
    </div>
  );
}

export default commercial;
