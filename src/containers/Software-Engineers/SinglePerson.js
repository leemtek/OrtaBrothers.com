import React from "react";
import './SinglePerson.css';

const singlePerson = (props) => {
  let linkFB = null;
  let linkLI = null;
  let linkTW = null;
  let linkPF = null;

  linkFB = (props.socialURL_facebook) ? (<a href={props.socialURL_facebook} className="social rounded fa fa-facebook" target="_blank" />) : "";
  linkLI = (props.socialURL_linkedin) ? (<a href={props.socialURL_linkedin} className="social rounded fa fa-linkedin" target="_blank" />) : "";
  linkTW = (props.socialURL_twitter) ? (<a href={props.socialURL_twitter} className="social rounded fa fa-twitter" target="_blank" />) : "";
  linkPF = (props.socialURL_portfolio) ? (<a href={props.socialURL_portfolio} className="social rounded fa fa-code" target="_blank" />) : "";


  return (
    <div className="col-md-3 col-sm-4 ">
      {/* start single person */}
        <div className="box-content thumbnail text-center">
          <a class="item-image">
            <img className="img-responsive" src={props.imgURL} alt={props.name} />
            <h3>
              <span>{props.name}</span> 
              <br />
              <small>{props.title}</small>
            </h3>
          </a>
          <div class="caption text-left">
            <p>
              {props.children}
            </p>
            {linkFB}
            {linkLI}
            {linkTW}
            {linkPF}
          </div>
        </div>
      {/* end single person */}
    </div>
  );
}

export default singlePerson;
