import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

// Components
import Header from "./components/Navigation/Header/Header";
import Footer from "./components/Navigation/Footer/Footer";
import Home from "./containers/Home/Home";
import Services from "./containers/Services/Services";
import Carpet from "./containers/Services/Carpet/Carpet";
import TileGrout from "./containers/Services/TileGrout/TileGrout";
import OrtaBrothers from "./containers/About/OrtaBrothers/OrtaBrothers";
import Faqs from "./containers/About/FAQs/Faqs";
import Contact from "./containers/Contact/Contact";
import Quote from "./containers/Contact/Quote/Quote";

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
          <Route path="/services/carpet" exact component={ Carpet } />
          <Route path="/services/tilegrout" exact component={ TileGrout } />
          <Route path="/contact" exact component={ Contact } />
            <Route path="/contact/quote" exact component={ Quote } />
          <Route path="/" exact component={ Home } />
        </Switch>

        <Footer />
      </div>
    );
  } // render()
} // App
