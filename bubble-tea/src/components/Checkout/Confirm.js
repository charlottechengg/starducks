import React from "react";

const PaymentInfo = ({price}) => (
  <><h2>Total: {price}</h2><form onsubmit="console.log('You clicked submit.'); return false">
      <button type="submit">Confirm Order</button>
  </form></>
);

export default PaymentInfo;