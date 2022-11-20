import React, { useState } from 'react';
import styled from 'styled-components';

const Payment = () => (
  <fieldset style={fieldset}>
    <legend style={legend}>Payment</legend>

    <div>
    <ButtonGroup>
  <Button> Visa </Button>
  <Button> Mastercard </Button>
</ButtonGroup>
      </div>

    <div>
      <label for="shipping-address-first-and-last-name" />
      <input
        id="shipping-address-first-and-last-name"
        style={inputField}
        type="text"
        name="name"
        placeholder="Credit Card Number"
      />
      <div>
        <label for="shipping-address-extended-address" />
        <input
          id="shipping-address-extended-address"
          style={halfInputField}
          type="text"
          name="extended_address"
          placeholder="Security Code (CVC)"
        />
        <label for="shipping-address-company" />
        <input
          id="shipping-address-company"
          style={halfInputField}
          type="text"
          name="lastName"
          placeholder="Card Expiration MM/YY"
        />
      </div>
 
    </div>
  </fieldset>
);

const fieldset = {
  /* checkoutSteps */
  textAlign: "initial",
  marginBottom: "20px",
  paddingBottom: "15px"
};

const legend = {
  /* checkoutStepsTitle */
  fontSize: "20px",
  textAlign: "initial"
};

const label = {
  display: "none"
};

const inputField = {
  /* checkoutStepsField */
  boxSizing: "border-box",
  fontSize: "14px",
  letterSpacing: "1px",
  padding: "12px 20px",
  width: "100%",
  marginBottom: "20px"
};

const halfInputField = {
  boxSizing: "border-box",
  fontSize: "14px",
  letterSpacing: "1px",
  marginBottom: "20px",
  padding: "12px 20px",
  width: "50%"
};

const cityInputField = {
  boxSizing: "border-box",
  fontSize: "14px",
  letterSpacing: "1px",
  padding: "12px 20px",
  width: "41.6666666667%"
};

const stateInputField = {
  boxSizing: "border-box",
  fontSize: "14px",
  letterSpacing: "1px",
  padding: "12px 20px",
  width: "25%"
};

const postalInputField = {
  boxSizing: "border-box",
  fontSize: "14px",
  letterSpacing: "1px",
  padding: "12px 20px",
  width: "33.3333333333%"
};

const ButtonGroup = styled.div`
  display: flex;
`

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`;
export default Payment;
