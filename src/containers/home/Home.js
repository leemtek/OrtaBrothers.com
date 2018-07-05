import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import '../../App.css';
import "./home.css";

import Hero from "./Sections/Hero";

class Home extends Component {
  seoAuthor = "Orta Brothers";
  seoTitle = "East Bay San Francisco Carpet Cleaning";
  seoDescription = "Orta Brothers is a family owned business, serving residents and commercial clients alike since 2002. Our customers have rated us the 'best carpet cleaning company in town' and our commercial clients have year after year continued to us our efficient no time waiting techniques.";
  
  render() {
    return (
      <div>
        <Helmet>
          <title>{this.seoTitle} - Orta Brothers</title>
          <meta name="author" content={this.seoAuthor} />
          <meta name="description" content={this.seoDescription} />
          <meta name="keywords" content="carpet cleaning, san francisco, east bay, residential, commercial" />
          <link rel="canonical" href="https://www.ortabrothers.com/software-engineers" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={this.seoTitle + " - Orta Brothers"} />
          <meta property="og:description" content={this.seoDescription} />
          <meta property="og:url" content="https://ortabrothers.com/" />
          <meta property="og:site_name" content="Orta Brothers" />
          <meta property="og:image" content="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/logo-black.jpg" />
          <meta property="og:image:secure_url" content="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/logo-black.jpg" />
          <meta property="og:image:width" content="2037" />
          <meta property="og:image:height" content="1639" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content={this.seoDescription} />
          <meta name="twitter:title" content={this.seoTitle + " - Orta Brothers"} />
          <meta name="twitter:image" content="https://d1xrp9zhb3ks3c.cloudfront.net/web/ortabrothers/images/2018/logo-black.jpg" />
        </Helmet>
        
        {/* REVOLUTION SLIDER */}
        <Hero />
        {/* /REVOLUTION SLIDER */}
      </div>
    );
  }
}

export default Home;
