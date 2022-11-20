import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useTheme } from "@mui/material/styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  logout
} from "../../helper/Firebase";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">Starducks</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn(props) {
  const theme = useTheme();
  const [values, setValues] = React.useState({
    password: "",
    username: "",
    email: "",
    showPassword: false,
  });

  const [error, setError] = useState({
    email: '',
    password: ''
  })

  const [user, loading, authErr] = useAuthState(auth);
  const navigate = useNavigate();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  const validateInput = (event) => {
    let { name, value } = event.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
      case "email":
        if (!value) {
        stateObj[name] = "Please enter email.";
        }
        break;

      case "password":
        if (!value) {
        stateObj[name] = "Please enter Password.";
        } else if (values.confirmPassword && value !== values.confirmPassword) {
        stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
        } else {
        stateObj["confirmPassword"] = values.confirmPassword ? "" : error.confirmPassword;
        }
        break;

      default:
        break;
      }

      return stateObj;
    });
   }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: `${theme.palette.secondary.main}` }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
        <FormControl sx={{ mt: 1}} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email *</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            value={values.email}
            name="email"
            onChange={handleChange('email')}
            onBlur={validateInput}
            label="Email"
          />
        </FormControl>
        {error.email && <span style={{color: "purple" }} className='err'>{error.email}</span>}
        </Grid>

        <Grid item xs={12} mt={0}>
        <FormControl sx={{ mt: 1}} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password *</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            name="password"
            onChange={handleChange('password')}
            onBlur={validateInput}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {error.password && <span style={{color: "purple" }}  className='err'>{error.password}</span>}
        </Grid>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            onClick={() => logInWithEmailAndPassword(values.email, values.password)}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
