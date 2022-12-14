import React from "react";

const fieldset = {
  textAlign: "initial",
  marginBottom: "20px",
  paddingBottom: "15px"
};

const legend = {
  fontSize: "20px",
  textAlign: "initial"
};

const label = {
  display: "none"
};

const radioField = {
  // boxSizing: "border-box",
  fontSize: "14px"
  // letterSpacing: "1px",
  // position: "absolute"
};

const Order2 = () => (
  <fieldset style={fieldset}>
    <legend style={legend}>Order 2</legend>
    <div>
    <label>
        
        <span style={{ marginLeft: "20px" }}>
          <strong>1 Milk Tea</strong>
        </span>
        <span style={{ float: "right" }}>$6.00</span>
        <div style={{ marginLeft: "20px" }}>Toppings: Tapicoa </div>
        <span style={{ float: "right" }}><button>Edit Order</button></span>
      </label>
    </div>
  </fieldset>
);

export default Order2;
