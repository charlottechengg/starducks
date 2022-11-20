import React from "react";

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import logo from './logo.jpg';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Order2 from "./Order2";
import Payment from "./payment";
import Order1 from "./Order1";
import Confirm from "./Confirm";
import ResponsiveNavBar from "../CustomOrder/NavBar";

const Checkout = () => {
  return (
    <>
      <ResponsiveNavBar />
      <div>
        <Payment/>
        <Order1/>
        <Order2 />
        <Confirm />
	<Leftside />
      </div>
    </>
  )
  
  }

const legend = {
  fontSize: "20px",
  textAlign: "initial"
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function Leftside() {
  const [location, setloc] = React.useState('');

  const handleChange = (event) => {
    setloc(event.target.value);
  };
  return (
    <section
      /*setting the bubble tea list
with->90% of the viewpoint
margin ->5 unit relating the size of the root text
display ->shows the items in a grid
gap -> gap between each grip
*/
      className="Leftside"
      style={{
        width: "20vw",
        maxWidth: "3000px",
        margin: "5rem auto",
        marginLeft: "0px",
       marginTop: "20px",
       paddingTop: "15px",
        /*display: "grid",*/
        gap: "vw",
      }}>
      <Grid container columns={1}>
        <Grid item xs={6}>
          <Item>
            <a href="../menu" target="_blank" rel="noreferrer">
            <img src={logo} alt="example" width="200" height="200"/>
          </a></Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <span> Store Location</span>
          </Item>
          </Grid>
        <Grid item xs={6}>
          <Item><FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Location"
          onChange={handleChange}
        >
          <MenuItem value={'Toronto'}>Toronto</MenuItem>
          <MenuItem value={'Hamilton'}>Hamilton</MenuItem>
          <MenuItem value={'Burlington'}>Burlington</MenuItem>
        </Select>
      </FormControl></Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
      <Button variant="contained" color="success">
        Pick Up
      </Button></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Button variant="outlined" color='secondary'>
        Delivery
      </Button></Item>
        </Grid>
      </Grid>    
          
      <hr />
      
    </section>
  );
}

export default Checkout;
