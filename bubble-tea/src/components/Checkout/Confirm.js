
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentInfo = ({ price, setShoppingItem, shoppingItem, setReceiptItem }) => {
  const navigate = useNavigate();

  const onClick = () => {
    const num = shoppingItem
    setReceiptItem(num)
    navigate("../receipt")
  }
  return (
    <>
      <h2>Total: {shoppingItem === 0 ? 0 : (price*shoppingItem).toFixed(2)}</h2>
      {shoppingItem === 0 ? 
        <Button variant="outlined" >Confirm Order</Button>
        :
        // <a href="../receipt" target="_blank" rel="noreferrer">
        <Button variant="outlined" onClick={onClick}>Confirm Order</Button>
      // </a>
      }
      
      
    </>
  )

}

export default PaymentInfo;