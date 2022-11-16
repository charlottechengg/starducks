import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import InputAdornments from './components/Authentication/InputAdornments';
import AuthenticationPage from './components/Authentication/AuthenticationPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <AuthenticationPage/>
    </ThemeProvider>
  );
}

export default App;
