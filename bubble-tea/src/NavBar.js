import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const pages = ['Home', 'About', 'Dashboard', 'Feedback'];
const settings = ['Profile', 'Account'];


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: 'inherit',
  autoFocus: 'true',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const ResponsiveNavBar = ({setTheme}) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [searchField, setSearchField] = React.useState('');
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const pagesOnClick = (page) => {
        setAnchorElNav(null);
        if (page == "Feedback"){
          window.open('https://github.com/manyicheng/Handbook', '_blank');
        }else{
          navigate('../'+page.toLowerCase())
        }
    }

    const settingOnClick = (setting) => {
      setAnchorElUser(null);
      console.log(setting.toLowerCase());
    }


    return (
    <AppBar position="sticky" sx={{ bgcolor: "#222222" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h4" noWrap component="div" sx={{ mr: 2, fontWeight: 'bold', display: { xs: 'none', md: 'flex' } }}>
            P01nter
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} sx={{ color: 'white' }}>
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }} keepMounted transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{
            display: { xs: 'block', md: 'none' },
        }}>
              {pages.map((page) => (<MenuItem key={page} sx={{ color: "#222222" }} onClick={() => pagesOnClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>))}
            </Menu>
          </Box>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: "4rem", display: { xs: 'flex', md: 'none' } }}>
            P01nter
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (<Button key={page} onClick={() => pagesOnClick(page)} sx={{ my: 2, display: 'block', color: 'white' }}>
                {page}
              </Button>))}
          </Box>

          <Box sx={{ display: 'inline-flex' }}>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onKeyPress={(event) => {
                  if (event.key === 'Enter'){
                    console.log(event.target.value);
                    setSearchField(event.target.value)
                  }
                }}
              />
            </Search>

            <Tooltip title="Open settings">
              <IconButton aria-label="Avatar" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon  sx={{ fontSize: 35,color: "white" }}/>
              </IconButton>
            </Tooltip>
            <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }} keepMounted transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
          <MenuItem key="status" >
            <Typography textAlign="center" sx={{ color: "#222222" }} >{name ? "Signed in as "+ name : "Not signed in"}</Typography>
          </MenuItem>
              {settings.map((setting) => (<MenuItem key={setting} onClick={() => settingOnClick}>
                  <Typography textAlign="center" sx={{ color: "#222222" }} >{setting}</Typography>

                </MenuItem>))}
                <MenuItem key="Logout">
                  <Typography textAlign="center" sx={{ color: "#222222" }} >Logout</Typography>

                </MenuItem>
            </Menu>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>);
};
export default ResponsiveNavBar;
