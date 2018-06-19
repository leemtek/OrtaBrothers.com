import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

// Components
import Header from "./components/Navigation/Header/Header";
import Footer from "./components/Navigation/Footer/Footer";
import Home from "./containers/Home/Home";
import Services from "./containers/Services/Main";
  import Services_Commercial from "./containers/Services/Commercial";
  import Services_Residential from "./containers/Services/Residential";
import OrtaBrothers from "./containers/About/OrtaBrothers/OrtaBrothers";
import Faqs from "./containers/About/FAQs/Faqs";
import Contact from "./containers/Contact/Contact";
import Quote from "./containers/Contact/Quote/Quote";
import SoftwareEngineers from "./containers/Software-Engineers/SoftwareEngineers";

export default class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />

        {/* ============================================================
          Handles the routing of the website.
        ============================================================ */}
        <Switch>
          <Route path="/about/orta-brothers" exact component={ OrtaBrothers } />
          <Route path="/about/faqs" exact component={ Faqs } />
          <Route path="/services" exact component={ Services } />
          <Route path="/services/residential" exact component={ Services_Residential } />
            <Route path="/services/commercial" exact component={ Services_Commercial } />
          <Route path="/contact" exact component={ Contact } />
            <Route path="/contact/quote" exact component={ Quote } />
          <Route path="/software-engineers" exact component={ SoftwareEngineers } />
          <Route path="/" exact component={ Home } />
        </Switch>

        <Footer />
      </div>
    );
  } // render()
} // App
