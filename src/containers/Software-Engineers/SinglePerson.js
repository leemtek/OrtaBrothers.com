import React from "react";

const singlePerson = (props) => {
  let formElement = null;
  
  let disabledText = (props.isEnabled) ? "" : "disabled";

  if (props.type === "checkbox") {
    formElement = (
      <div>
        <input className="" onClick={props.click} id={props.name} name={props.name} type={props.type} />
      </div>
    );
  } else if (props.type === "select") {
    formElement = (
      <div>
        <select disabled={disabledText} name={props.name} defaultValue="0"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>
      </div>
    );
  }



  return (
    <div>
      {/* start single person */}
      <div className="col-sm-3">
        <div className="box-content thumbnail text-center">
          <a class="item-image">
            <img className="img-responsive" src="{props.imgURL}" alt="{props.name}" />
            <h3>
              <span>{props.name}</span> 
              <br />
              <small>Project Manager</small>
            </h3>
          </a>
        </div>
      </div>
      {/* end single person */}
    </div>
  );
}

export default singlePerson;
