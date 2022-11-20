import React from "react";


import Order2 from "./Order2";
import Payment from "./payment";
import Order1 from "./Order1";
import Confirm from "./Confirm";

const Checkout = () => (
  <div>
    <Payment/>
    <Order1/>
    <Order2 />
    <Confirm />
  </div>
);

const legend = {
  fontSize: "20px",
  textAlign: "initial"
};

export default Checkout;
