import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from "@mui/material/styles";
import { Grid } from '@mui/material';
import ResponsiveNavBar from '../CustomOrder/NavBar';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { sendPasswordReset } from '../../helper/Firebase';
export default function PasswordReset() {
    const theme = useTheme();
    const [values, setValues] = React.useState({
        password: '',
        username: '',
        email: '',
        showPassword: false,
        agreeToTerms: false,
      });

      const handleChange =
        (prop) => (event) => {
          setValues({ ...values, [prop]: event.target.value });
        };

    return (
        <Box>
        <ResponsiveNavBar/>
        <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >

        <Typography variant="h3" gutterBottom>
            Password Reset
        </Typography>
        <Typography variant="body1" gutterBottom>
            Please enter your password
        </Typography>
        <FormControl sx={{m:4, width: '53ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email *</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            value={values.email}
            onChange={handleChange('email')}
            label="Email"
          />
        </FormControl>
        <Button
            type="submit"
            onClick={sendPasswordReset(values.email)}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, width:"60ch" }}
          >
            Reset Password
          </Button>
        <Typography variant="body1" color="secondary.main" gutterBottom>
            Please check your email and reset password follow instruction.
        </Typography>



        </Box>
    </Box>

    );
  }