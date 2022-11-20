import React from "react";

const PaymentInfo = () => (
  <><h2>Total: 12.00</h2><form onsubmit="console.log('You clicked submit.'); return false">
      <button type="submit">Confirm Order</button>
  </form></>
);

export default PaymentInfo;