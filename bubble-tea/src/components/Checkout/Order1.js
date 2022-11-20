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

const Order1 = ({shoppingItem, selectedToppings, price}) => (
  <fieldset style={fieldset}>
    <legend style={legend}>Order</legend>
    <div>
    { shoppingItem > 0 ? <label>
        
        <span style={{ marginLeft: "20px" }}>
          <strong>Bubble Tea * {shoppingItem}</strong>
        </span>
        <span style={{ float: "right" }}>{price}</span>
        <div style={{ marginLeft: "20px" }}>Toppings: {selectedToppings.join(", ")} </div>
        <span style={{ float: "right" }}><button>Edit Order</button></span>
      </label>
      : "You haven't placed any order yet"}
    </div>
  </fieldset>
);

export default Order1;
