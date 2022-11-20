import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerOrder from "./components/CustomOrder/CustomOrder";
import Menu from "./components/Menu/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import InputAdornments from "./components/Authentication/InputAdornments";
import AuthenticationPage from "./components/Authentication/AuthenticationPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Checkout from "./components/Checkout/Checkout";
import PrivacyPolicy from "./components/Authentication/PrivacyPolicy";
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
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <Routes>
            <Route exact path="/" element={<Menu />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/custom-order" element={<CustomerOrder />} />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route exact path="/auth" element={<AuthenticationPage />} />
            <Route exact path="/password-reset" element={<PasswordReset />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
