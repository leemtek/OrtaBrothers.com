import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

// Components
import Header from "./components/Navigation/Header/Header";
import Footer from "./components/Navigation/Footer/Footer";
import Home from "./containers/Home/Home";
import Services from "./containers/Services/Services";

export default class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        
        <Switch>
          <Route path="/services" exact component={ Services } />
          <Route path="/" exact component={ Home } />
        </Switch>

        <Footer />
      </div>
    );
  } // render()
} // App

