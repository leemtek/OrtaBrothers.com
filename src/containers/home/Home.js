import React, { Component } from 'react';
import '../../App.css';

import Hero from "./Sections/Hero";

class Home extends Component {
  render() {
    return (
      <div>
        {/* REVOLUTION SLIDER */}
        <Hero />
        {/* /REVOLUTION SLIDER */}
      </div>
    );
  }
}

export default Home;
