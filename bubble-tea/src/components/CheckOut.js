import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Checkout from "./Checkout/Checkout";

const styles = {
  fontFamily: "Helvetica",
  textAlign: "left",
  fontWeight: "100",
  maxWidth: "500px",
  margin: "0 auto"
};

const App = () => (
  <div style={styles}>
    <h2>Order Details</h2>
    <Checkout />
  </div>
);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


export default function Menu() {
  return (
    <App />

  );
 
}
