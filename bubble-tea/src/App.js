import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerOrder from "./components/CustomOrder/CustomOrder";
import Menu from "./components/Menu/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import AuthenticationPage from "./components/Authentication/AuthenticationPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Checkout from "./components/Checkout/Checkout";
import PrivacyPolicy from "./components/Authentication/PrivacyPolicy";

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <Routes>
            <Route exact path="/" element={<Menu shoppingItem={shoppingItem}/>} />
            <Route exact path="/checkout" element={<Checkout shoppingItem={shoppingItem}/>} />
            <Route exact path="/custom-order" element={<CustomerOrder shoppingItem={shoppingItem} setShoppingItem={(num)=>setShoppingItem(num)}/>} />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route exact path="/auth" element={<AuthenticationPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
