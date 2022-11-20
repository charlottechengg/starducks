import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerOrder from './components/CustomOrder/CustomOrder';
import Menu from './components/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import InputAdornments from './components/Authentication/InputAdornments';
import AuthenticationPage from './components/Authentication/AuthenticationPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkout from './components/Checkout/Checkout';
import PrivacyPolicy from './components/Authentication/PrivacyPolicy';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7F669D',
      contrastText: "#fff"
    },
    secondary: {
      main: '#BA94D1',
    },
    Info: {
      main: '#DEBACE',
    },
    Success: {
      main: '#BCCEF8',
    },
    Warning: {
      main: '#FBFACD',
    },
  },
});


function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/custom-order" element={<CustomerOrder />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/auth" element={
            <ThemeProvider theme={theme}>
              <AuthenticationPage />
            </ThemeProvider>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
