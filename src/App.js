import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

// Components
import Header from "./components/Navigation/Header/Header";
import Footer from "./components/Navigation/Footer/Footer";
import Home from "./containers/Home/Home";
import Services from "./containers/Services/Services";
import OrtaBrothers from "./containers/About/OrtaBrothers/OrtaBrothers";
import Faqs from "./containers/About/FAQs/Faqs";

export default class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        
        <Switch>
          <Route path="/about/orta-brothers" exact component={ OrtaBrothers } />
          <Route path="/about/faqs" exact component={ Faqs } />
          <Route path="/services" exact component={ Services } />
          <Route path="/" exact component={ Home } />
        </Switch>

        <Footer />
      </div>
    );
  } // render()
} // App

