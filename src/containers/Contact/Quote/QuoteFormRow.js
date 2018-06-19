import React from "react";

const quoteFormRow = (props) => {
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
        <select disabled={disabledText} name={props.name}><option value="0" selected="selected">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>
      </div>
    );
  }



  return (
    <div>
      {/* start form row */}
      <div className="gFormRow">
        <div className="gFormCellText">
          <label for={props.name}>{props.text1}<br/><small>{props.text2}</small></label>
          {/* <label for="3RoomsAndHallways">3 Rooms &amp; Hallways<br/><small>(no charge for hallways)</small></label> */}
        </div>
        <div className="gFormCellElement">
          {formElement}
        </div>
      </div>
      {/* end form row */}
    </div>
  );
}

export default quoteFormRow;
