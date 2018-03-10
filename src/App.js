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

export default class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        
        <Switch>
        <Route path="/about/orta-brothers" component={ OrtaBrothers } />
          <Route path="/services" component={ Services } />
          <Route path="/" exact component={ Home } />
        </Switch>

        <Footer />
      </div>
    );
  } // render()
} // App

