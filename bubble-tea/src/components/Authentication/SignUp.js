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
	confirmPassword: "",
    email: "",
    showPassword: false,
	showConfirmPassword: false,
    agreeToTerms: "",
  });


  const [error, setError] = useState({
    email: '',
    password: '',
    confirmPassword: '',
	agreeToTerms: ''
  })
  const [user, loading, authError] = useAuthState(auth);
  const navigate = useNavigate();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleCheckbox = (prop) => (event) => {
	setValues({ ...values, [prop]: event.target.checked });
  };

  const validateInput = (event) => {
	let { name, value, checked } = event.target;
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

		case "confirmPassword":
		  if (!value) {
			stateObj[name] = "Please enter Confirm Password.";
		  } else if (values.password && value !== values.password) {
			stateObj[name] = "Password and Confirm Password does not match.";
		  }
		  break;

		case "agreeToTerms":

		  if (!checked) {
			stateObj[name] = "Please read and agree to terms.";
		  }
		  break;

		default:
		  break;
		}

		console.log(stateObj);
		return stateObj;
	});
 }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
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
            <Grid item xs={12}>
              <FormControl sx={{ mt: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email">
                  Email *
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  value={values.email}

				  name="email"
                  onChange={handleChange("email")}
				  onBlur={validateInput}
                  label="Email"
                />
              </FormControl>
			  {error.email && <span style={{color: "purple" }} className='err'>{error.email}</span>}
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
				  name="password"
                  onChange={handleChange("password")}
				  onBlur={validateInput}
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
			  {error.password && <span style={{color: "purple" }}  className='err'>{error.password}</span>}
            </Grid>
			<Grid item xs={12}>
              <FormControl sx={{ mt: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="confirmPassword">
				 Confirm Password *
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-confirmPassword"
                  type={values.showConfirmPassword ? "text" : "password"}
                  value={values.confirmPassword}
				  name="confirmPassword"
                  onChange={handleChange("confirmPassword")}
				  onBlur={validateInput}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="ConfirmPassword"
                />
              </FormControl>
			  {error.confirmPassword && <span style={{color: "purple" }} className='err'>{error.confirmPassword}</span>}
            </Grid>
            <Grid item xs={12}>
			<Grid container>
			<Grid item xs={1}>
			<FormControlLabel
                control={
					<Checkbox
					required
					checked={values.agreeToTerms}
					onChange={handleCheckbox("agreeToTerms")}
					onBlur={validateInput}
					name='agreeToTerms'
					color="primary" />
				}
              />
			</Grid>
			<Grid item xs={11}>
			<div> I agree to the following: <a href="./privacy-policy">Starducks Privacy Policy</a> and <a href="./privacy-policy"> Terms of Service</a>.</div>
			</Grid>
			</Grid>




			{error.agreeToTerms && <span style={{color: "purple" }}  className='err'>{error.agreeToTerms}</span>}
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
			disabled={!values.agreeToTerms}
            sx={{ mt: 3, mb: 2 }}
			onClick={() => registerWithEmailAndPassword(values.email, values.password)}
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
