import * as React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTheme } from '@mui/material/styles';
import ResponsiveNavBar from '../CustomOrder/NavBar';


export default function AuthenticationPage() {
  const [value, setValue] = React.useState('SignIn');
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const theme = useTheme();
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };


  return (

      <Grid container component="main" sx={{ height: '100vh' }}>
        <ResponsiveNavBar/>
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={5} square>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleTabChange} aria-label="lab API tabs example" textColor="secondary" indicatorColor="secondary" centered>
                  <Tab label={<span className="TabName" >Sign In</span>} value="SignIn"  />
                  <Tab label={<span className="TabName" >Sign Up</span>} value="SignUp"  />
            </TabList>
          </Box>
          <TabPanel value="SignIn"> <SignIn/> </TabPanel>
          <TabPanel value="SignUp"> <SignUp/> </TabPanel>
        </TabContext>


        </Grid>
      </Grid>
  );
}