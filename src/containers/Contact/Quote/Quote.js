import React, { Component } from 'react';
import QuoteFormRow from './QuoteFormRow';
import './Quote.css';

class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        name: "",
        email: "",
        phone: "",
        basicCleaning_threeRoomsAndHallways: false,
          basicCleaning_eachBedroomAfter3: "0",
          basicCleaning_largeRooms: "0",
          basicCleaning_masterBedroomsAndBath: "0",
          basicCleaning_staircase: "0",
          basicCleaning_areaRug: "0",
        heavyCleaning: false,
          heavyCleaning_eachAdditionalRoom: "0",
          heavyCleaning_eachAdditionalLargeRoom: "0",
        anySizeRoom: "",
        comment: ""
      }, // userData
      colBasic: {
        formUsable: false
      }, // colBasic
      colHeavy: {
        formUsable: false
      } // colHeavy
    }; // state

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } // constructor(props)

  checkboxClickedBasicHandler = (event) => {
    const doesShow = this.state.colBasic.formUsable;
    let colBasic = {
      formUsable: !doesShow
    } // colBasic
    
    this.setState({colBasic: colBasic});
  } // checkboxClickedBasicHandler(event)

  checkboxClickedHeavyHandler = () => {
    const doesShow = this.state.colHeavy.formUsable;
    let colHeavy = {
      formUsable: !doesShow
    } // colHeavy
    
    this.setState({colHeavy: colHeavy});
  } // checkboxClickedHeavyHandler()

  /**
   * When the user types anything, state gets updated.
   * @argument {object} event - Contents of form.
   */
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // Make a new userData state.
    let newUserData = {
      ...this.state.userData,
      [name]: value
    }
    
    this.setState({
      userData: newUserData
    });
  } // handleChange(event)

  handleSubmit = (event) => {
    // Output JSON
    console.log(this.state.userData);

    // Prevent page refresh.
    event.preventDefault();
  } // handleSubmit(event)

  render() {
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
          <form onSubmit={this.handleSubmit}>
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
                    <input className="input-bg" required="required"
                      name="name"
                      type="text"
                      value={this.state.userData.name}
                      onChange={this.handleInputChange} />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 xs-margin-15px-bottom xs-text-center wow fadeInUp">
                  <div className="col-md-3 col-sm-4 text-right col-xs-12 no-padding-left xs-no-padding-lr pull-left xs-margin-15px-bottom">
                    <i className="glyphicon glyphicon-envelope text-medium-gray icon-extra-medium top-20"></i>
                  </div>
                  <div className="col-md-9 col-sm-8 col-xs-12 no-padding">
                    <span className="margin-5px-bottom text-extra-dark-gray alt-font display-block font-weight-600">E-mail</span>
                    <input className="input-bg" required="required"
                      name="email"
                      type="email"
                      value={this.state.userData.email}
                      onChange={this.handleInputChange} />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 xs-margin-15px-bottom xs-text-center wow fadeInUp">
                  <div className="col-md-3 col-sm-4 text-right col-xs-12 no-padding-left xs-no-padding-lr pull-left xs-margin-15px-bottom">
                    <i className="glyphicon glyphicon-earphone text-medium-gray icon-extra-medium top-20"></i>
                  </div>
                  <div className="col-md-9 col-sm-8 col-xs-12 no-padding">
                    <span className="margin-5px-bottom text-extra-dark-gray alt-font display-block font-weight-600">Phone Number</span>
                    <input className="input-bg" required="required"
                      name="phone"
                      type="tel"
                      value={this.state.userData.phone}
                      onChange={this.handleInputChange} />
                  </div>
                </div>
              </div>{/* .row */}

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
                            <label htmlFor="basicCleaning_threeRoomsAndHallways">3 Rooms &amp; Hallways<br /><small>(no charge for hallways)</small></label>
                          </div>
                          <div className="gFormCellElement">
                            <input
                              name="basicCleaning_threeRoomsAndHallways"
                              type="checkbox"
                              checked={this.state.userData.basicCleaning_threeRoomsAndHallways}
                              onChange={this.handleInputChange} />
                          </div>{/* gFormCellElement */}
                        </div>
                      </li>
                      <li>
                        <div className="gFormRow">
                          <div className="gFormCellText">
                            <label>Each Bed Room After Three<br/><small>(any size)</small></label>
                          </div>
                          <div className="gFormCellElement">
                            <select 
                              disabled={ !this.state.userData.basicCleaning_threeRoomsAndHallways } 
                              name="basicCleaning_eachBedroomAfter3"
                              value={ this.state.userData.basicCleaning_eachBedroomAfter3 }
                              onChange={ this.handleInputChange } >
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </select>
                          </div>{/* .gFormCellElement */}
                        </div>{/* .gFormRow */}
                      </li>
                      <li>
                        <div className="gFormRow">
                          <div className="gFormCellText">
                            <label>Living / Dining / Family / Loft<br/><small>(large rooms)</small></label>
                          </div>
                          <div className="gFormCellElement">
                            <select 
                              disabled={ !this.state.userData.basicCleaning_threeRoomsAndHallways } 
                              name="basicCleaning_largeRooms"
                              value={ this.state.userData.basicCleaning_largeRooms }
                              onChange={ this.handleInputChange } >
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </select>
                          </div>{/* .gFormCellElement */}
                        </div>{/* .gFormRow */}
                      </li>
                      <li>
                        <div className="gFormRow">
                          <div className="gFormCellText">
                            <label>Master Bedrooms with Bath<br/><small>&nbsp;</small></label>
                          </div>
                          <div className="gFormCellElement">
                            <select 
                              disabled={ !this.state.userData.basicCleaning_threeRoomsAndHallways } 
                              name="basicCleaning_masterBedroomsAndBath"
                              value={ this.state.userData.basicCleaning_masterBedroomsAndBath }
                              onChange={ this.handleInputChange } >
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </select>
                          </div>{/* .gFormCellElement */}
                        </div>{/* .gFormRow */}
                      </li>
                      <li>
                        <div className="gFormRow">
                          <div className="gFormCellText">
                            <label>Staircase<br/><small>(per step)</small></label>
                          </div>
                          <div className="gFormCellElement">
                            <select 
                              disabled={ !this.state.userData.basicCleaning_threeRoomsAndHallways } 
                              name="basicCleaning_staircase"
                              value={ this.state.userData.basicCleaning_staircase }
                              onChange={ this.handleInputChange } >
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </select>
                          </div>{/* .gFormCellElement */}
                        </div>{/* .gFormRow */}
                      </li>
                      <li>
                        <div className="gFormRow">
                          <div className="gFormCellText">
                            <label>Area Rug<br/><small>(per rug)</small></label>
                          </div>
                          <div className="gFormCellElement">
                            <select 
                              disabled={ !this.state.userData.basicCleaning_threeRoomsAndHallways } 
                              name="basicCleaning_areaRug"
                              value={ this.state.userData.basicCleaning_areaRug }
                              onChange={ this.handleInputChange } >
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </select>
                          </div>{/* .gFormCellElement */}
                        </div>{/* .gFormRow */}
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
                            <label htmlFor="heavyCleaning">Heavy Cleaning<br /><small>(3 rooms)</small></label>
                          </div>
                          <div className="gFormCellElement">
                            <input
                              name="heavyCleaning"
                              type="checkbox"
                              checked={this.state.userData.heavyCleaning}
                              onChange={this.handleInputChange} />
                          </div>{/* gFormCellElement */}
                        </div>
                      </li>
                      <li>
                        <div className="gFormRow">
                          <div className="gFormCellText">
                            <label>Each Additional Room<br/><small>&nbsp;</small></label>
                          </div>
                          <div className="gFormCellElement">
                            <select 
                              disabled={ !this.state.userData.heavyCleaning } 
                              name="heavyCleaning_eachAdditionalRoom"
                              value={ this.state.userData.heavyCleaning_eachAdditionalRoom }
                              onChange={ this.handleInputChange } >
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </select>
                          </div>{/* .gFormCellElement */}
                        </div>{/* .gFormRow */}
                      </li>
                      <li>
                        <div className="gFormRow">
                          <div className="gFormCellText">
                            <label>Each Additional Large Room<br/><small>&nbsp;</small></label>
                          </div>
                          <div className="gFormCellElement">
                            <select 
                              disabled={ !this.state.userData.heavyCleaning } 
                              name="heavyCleaning_eachAdditionalLargeRoom"
                              value={ this.state.userData.heavyCleaning_eachAdditionalLargeRoom }
                              onChange={ this.handleInputChange } >
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </select>
                          </div>{/* .gFormCellElement */}
                        </div>{/* .gFormRow */}
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
                        <QuoteFormRow type="select" name="DCAnySizeRoom" text1="Any Size Room" text2="(RX-20) Each" isEnabled={this.state.colHeavy.formUsable} />

                        <div className="gFormRow">
                          <div className="gFormCellText">
                            <label>Each Additional Large Room<br/><small>&nbsp;</small></label>
                          </div>
                          <div className="gFormCellElement">
                            <select 
                              disabled={ !this.state.userData.heavyCleaning } 
                              name="anySizeRoom"
                              value={ this.state.userData.anySizeRoom }
                              onChange={ this.handleInputChange } >
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </select>
                          </div>{/* .gFormCellElement */}
                        </div>{/* .gFormRow */}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* end feature box item */}
              </div>
              <hr className="margin-30px-top margin-30px-bottom" />
              <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                  <div className="col-md-1 col-sm-2 text-right col-xs-12 no-padding-left xs-no-padding-lr pull-left xs-margin-15px-bottom">
                    <i className="glyphicon glyphicon-comment text-medium-gray icon-extra-medium top-20"></i>
                  </div>
                  <div className="col-md-11 col-sm-10 col-xs-12 no-padding">
                    <span className="margin-5px-bottom text-extra-dark-gray alt-font display-block font-weight-600">Have a question? Please let us know!</span>
                    <textarea rows="6" className="big-textarea input-bg"
                      name="comment"
                      value={this.state.userData.message} 
                      onChange={this.handleInputChange} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <input type="submit" value="send message" className="btn btn-transparent-dark-gray btn-large margin-20px-top" />
                </div>
              </div>{/* .row */}
            </div>{/* .container */}
          </form>
        </section>
        {/* end feature box section */}

      </div>
    );
  } // render()
}

export default Quote;
