import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import CustomerOrder from "./components/CustomOrder/CustomOrder";
import Menu from "./components/Menu/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import AuthenticationPage from "./components/Authentication/AuthenticationPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Checkout from "./components/Checkout/Checkout";
import PrivacyPolicy from "./components/Authentication/PrivacyPolicy";
import Receipt from "./components/Receipt";
import PasswordReset from "./components/Authentication/PasswordReset";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7F669D",
      contrastText: "#fff",
    },
    secondary: {
      main: "#BA94D1",
    },
    Info: {
      main: "#DEBACE",
    },
    Success: {
      main: "#BCCEF8",
    },
    Warning: {
      main: "#FBFACD",
    },
  },
});

function App() {

  const [shoppingItem, setShoppingItem] = useState(0);
  const [selectedToppings, setToppings] = useState(['Tapioca'])
  const basePriceM = 5.99
  const [price, setPrice] = useState(basePriceM);
  const [receiptItem, setReceiptItem] = useState(0)

  return (
    <>
      <ThemeProvider theme={theme}>
        <HashRouter>
        {/* <BrowserRouter> */}
          <CssBaseline />
          <Routes>
            <Route exact path="/" element={<Menu shoppingItem={shoppingItem}/>} />
            <Route exact path="/checkout" element={
              <Checkout 
                shoppingItem={shoppingItem} 
                selectedToppings={selectedToppings} price={price}
                setShoppingItem={setShoppingItem}
                setReceiptItem={(num) => setReceiptItem(num)}
                />
                } />
            <Route exact path="/custom-order" element={
              <CustomerOrder 
                shoppingItem={shoppingItem} 
                setShoppingItem={(num)=>setShoppingItem(num)}
                selectedToppings={selectedToppings}
                setToppings={setToppings}
                price={price}
                setPrice={setPrice}
                />} />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route exact path="/auth" element={<AuthenticationPage />} />
            <Route exact path="/receipt" element={<Receipt receiptItem={receiptItem} price={price} />} />
            <Route exact path="/password-reset" element={<PasswordReset />} />
          </Routes>
          </HashRouter>
        {/* </BrowserRouter> */}
      </ThemeProvider>
    </>
  );
}

export default App;
