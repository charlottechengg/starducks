import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useTheme } from "@mui/material/styles";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../../helper/Firebase";

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

export default function SignUp() {
  const theme = useTheme();
  const [values, setValues] = React.useState({
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    showPassword: false,
    agreeToTerms: false,
  });

  const [user, loading, error] = useAuthState(auth);
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
    console.log(user);
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
			<FormControl sx={{ mt: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-firstname">
                  First Name *
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-firstname"
                  value={values.firstname}
                  onChange={handleChange("firstname")}
                  label="Firstname"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
			<FormControl sx={{ mt: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-lastname">
                  Last Name *
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-lastname"
                  value={values.lastname}
                  onChange={handleChange("lastname")}
                  label="Lastname"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ mt: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email">
                  Email *
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  value={values.email}
                  onChange={handleChange("email")}
                  label="Email"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ mt: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password *
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="agreeToTerms" color="primary" />}
                label="I agree to the following: Privacy Policy Tims Rewards Terms and Conditions Terms of Service"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
			onClick={() => registerWithEmailAndPassword(values.firstname,values.email, values.password)}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end"></Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
