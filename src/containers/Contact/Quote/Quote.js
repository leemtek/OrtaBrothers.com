import React from "react";
import './Quote.css';

const quote = () => {
  return (
  <div>
    {/* start page title section */}
    <section className="wow fadeIn bg-light-gray padding-35px-tb page-title-small top-space">
      <div className="container">
        <div className="row equalize xs-equalize-auto">
          <div className="col-lg-8 col-md-6 col-sm-6 col-xs-12 display-table">
          <div className="display-table-cell vertical-align-middle text-left xs-text-center">
            {/* start page title */}
            <h1 className="alt-font text-extra-dark-gray font-weight-600 no-margin-bottom text-uppercase">Request a Quote</h1>
            {/* end page title */}
          </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 display-table text-right xs-text-left xs-margin-10px-top">
          <div className="display-table-cell vertical-align-middle breadcrumb text-small alt-font">
            {/* start breadcrumb */}
            <ul className="xs-text-center">
              <li><a href="/" className="text-dark-gray"><i className="fa fa-home"></i></a></li>
              <li><a href="/contact" className="text-dark-gray">Contact Us</a></li>
              <li className="text-dark-gray">Request a Quote</li>
            </ul>
            {/* end breadcrumb */}
          </div>
          </div>
        </div>
      </div>
    </section>
    {/* end page title section */}

    {/* start feature box section */}
    <section className="wow fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 center-col margin-eight-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
            <h5 className="alt-font text-extra-dark-gray font-weight-600">Please fill out the form below.</h5>
            <div className="alt-font text-medium-gray margin-10px-bottom text-uppercase text-small">
            By letting us know the services you need, we can determine a more accurate quote for you. ~ Orta Brothers
            </div>
          </div>
        </div>
        {/* start User Input Fields */}
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12 xs-margin-15px-bottom xs-text-center wow fadeInUp">
            <div className="col-md-3 col-sm-4 text-right col-xs-12 no-padding-left xs-no-padding-lr pull-left xs-margin-15px-bottom">
              <i className="glyphicon glyphicon-user text-medium-gray icon-extra-medium top-20"></i>
            </div>
            <div className="col-md-9 col-sm-8 col-xs-12 no-padding">
              <span className="margin-5px-bottom text-extra-dark-gray alt-font display-block font-weight-600">First &amp; Last Name</span>
              <input className="input-bg" required="required" name="full_name" type="text" />
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12 xs-margin-15px-bottom xs-text-center wow fadeInUp">
            <div className="col-md-3 col-sm-4 text-right col-xs-12 no-padding-left xs-no-padding-lr pull-left xs-margin-15px-bottom">
              <i className="glyphicon glyphicon-envelope text-medium-gray icon-extra-medium top-20"></i>
            </div>
            <div className="col-md-9 col-sm-8 col-xs-12 no-padding">
              <span className="margin-5px-bottom text-extra-dark-gray alt-font display-block font-weight-600">E-mail</span>
              <input className="input-bg" required="required" name="email" type="text" />
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12 xs-margin-15px-bottom xs-text-center wow fadeInUp">
            <div className="col-md-3 col-sm-4 text-right col-xs-12 no-padding-left xs-no-padding-lr pull-left xs-margin-15px-bottom">
              <i className="glyphicon glyphicon-earphone text-medium-gray icon-extra-medium top-20"></i>
            </div>
            <div className="col-md-9 col-sm-8 col-xs-12 no-padding">
              <span className="margin-5px-bottom text-extra-dark-gray alt-font display-block font-weight-600">Phone Number</span>
              <input className="input-bg" required="required" name="phone_number" type="text" />
            </div>
          </div>
        </div>
        <hr className="margin-30px-bottom" />
        <div className="row margin-20px-top">
          {/* start feature box item */}
          <div className="col-md-4 col-sm-4 col-xs-12 xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin xs-text-center">
            <div className="inner border-all border-width-1 border-color-medium-gray padding-10px-all">
              <div className="alt-font margin-5px-bottom display-block font-weight-600 text-center margin-20px-bottom text-uppercase text-black">Basic Cleaning</div>
              <p className="width-95 sm-width-100">
                Regular Carpet Cleaning with our hot water extraction wand tool. This service is recommended for regular scheduled maintenance. Every six month to a year.
              </p>
              <div className="bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
              <ul className="list-style-11">
                <li className="alt-font font-weight-600">Description</li>
                <li>
                  <div className="gFormRow">
                    <div className="gFormCellText">
                      <label for="3RoomsAndHallways">3 Rooms &amp; Hallways<br/><small>(no charge for hallways)</small></label>
                    </div>
                    <div className="gFormCellElement">
                      <input className="" onClick="" id="3RoomsAndHallways" name="3RoomsAndHallways" type="checkbox"  />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gFormRow">
                    <div className="gFormCellText">
                      <label for="3RoomsAndHallways">Each Bed Room After Three<br/><small>(any size)</small></label>
                    </div>
                    <div className="gFormCellElement">
                      <select name="eachBedroomAfter3"><option value="0" selected="selected">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gFormRow">
                    <div className="gFormCellText">
                      <label for="3RoomsAndHallways">Living / Dining / Family / Loft<br/><small>(large rooms)</small></label>
                    </div>
                    <div className="gFormCellElement">
                      <select name="eachBedroomAfter3"><option value="0" selected="selected">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gFormRow">
                    <div className="gFormCellText">
                      <label for="3RoomsAndHallways">Master Bedrooms with Bath<br/><small>&nbsp;</small></label>
                    </div>
                    <div className="gFormCellElement">
                      <select name="eachBedroomAfter3"><option value="0" selected="selected">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gFormRow">
                    <div className="gFormCellText">
                      <label for="3RoomsAndHallways">Staircase<br/><small>(per step)</small></label>
                    </div>
                    <div className="gFormCellElement">
                      <select name="eachBedroomAfter3"><option value="0" selected="selected">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gFormRow">
                    <div className="gFormCellText">
                      <label for="3RoomsAndHallways">Area Rug<br/><small>(per rug)</small></label>
                    </div>
                    <div className="gFormCellElement">
                      <select name="eachBedroomAfter3"><option value="0" selected="selected">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* start feature box item */}
          <div className="col-md-4 col-sm-4 col-xs-12 xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin xs-text-center ">
            <div className="inner border-all border-width-1 border-color-medium-gray padding-10px-all">
              <div className="alt-font margin-5px-bottom display-block font-weight-600 text-center margin-20px-bottom text-uppercase text-black">Heavy Cleaning</div>
              <p className="width-95 sm-width-100">
                Extra detergent for heavy traffic soiling in carpet. Agitating with brush and requiring a second pre-spray. This service is recommended for carpet that has not been clean for over one year.
              </p>
              <p className="text-danger">
                * Price below is an additional charge to the basic cleaning prices
              </p>
              <div className="bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
              <ul className="list-style-11">
                <li className="alt-font font-weight-600">Description</li>
                <li>
                  <div className="gFormRow">
                    <div className="gFormCellText">
                      <label for="3RoomsAndHallways">Heavy Cleaning<br/><small>(3 rooms)</small></label>
                    </div>
                    <div className="gFormCellElement">
                      <input className="" onClick="" id="3RoomsAndHallways" name="3RoomsAndHallways" type="checkbox"  />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gFormRow">
                    <div className="gFormCellText">
                      <label for="3RoomsAndHallways">Each Additional Room<br/><small>&nbsp;</small></label>
                    </div>
                    <div className="gFormCellElement">
                      <select name="eachBedroomAfter3"><option value="0" selected="selected">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gFormRow">
                    <div className="gFormCellText">
                      <label for="3RoomsAndHallways">Each Additional Large Room<br/><small>&nbsp;</small></label>
                    </div>
                    <div className="gFormCellElement">
                      <select name="eachBedroomAfter3"><option value="0" selected="selected">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* end feature box item */}
          {/* start feature box item */}
          <div className="col-md-4 col-sm-4 col-xs-12 xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin xs-text-center">
            <div className="inner border-all border-width-1 border-color-medium-gray padding-10px-all">
              <div className="alt-font margin-5px-bottom display-block font-weight-600 text-center margin-20px-bottom text-uppercase text-black">Deep Cleaning</div>
              <p className="width-95 sm-width-100">
                Everything in Heavy Clean plus using our RX-20 Restoration Machine in an attempt to restore carpet that would otherwise be replaced. This service is recommended for carpet that has never been cleaned or given regular maintenance.
              </p>
              <p className="text-danger">
                * Price below is an additional charge to the basic cleaning prices
              </p>
              <div className="bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
              <ul className="list-style-11">
                <li className="alt-font font-weight-600">Description</li>
                <li>
                  <div className="gFormRow">
                    <div className="gFormCellText">
                      <label for="3RoomsAndHallways">Any Size Room <br/><small>(RX-20) Each</small></label>
                    </div>
                    <div className="gFormCellElement">
                      <select name="eachBedroomAfter3"><option value="0" selected="selected">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* end feature box item */}
        </div>
        <hr className="margin-30px-top margin-30px-bottom" />
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div class="col-md-1 col-sm-2 text-right col-xs-12 no-padding-left xs-no-padding-lr pull-left xs-margin-15px-bottom">
              <i class="glyphicon glyphicon-comment text-medium-gray icon-extra-medium top-20"></i>
            </div>
            <div class="col-md-11 col-sm-10 col-xs-12 no-padding">
              <span class="margin-5px-bottom text-extra-dark-gray alt-font display-block font-weight-600">Have a question? Please let us know!</span>
              <textarea name="comment" id="comment" placeholder="" rows="6" className="big-textarea input-bg"></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <button id="project-contact-us-button" type="submit" className="btn btn-transparent-dark-gray btn-large margin-20px-top">send message</button>
          </div>
        </div>
      </div>
    </section>
    {/* end feature box section */}

  </div>
  );
}

export default quote;
