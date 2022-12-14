import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useTheme } from "@mui/material/styles";
import { auth, db, logout } from "../../helper/Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const pages = ["Menu"];
const settings = ["Profile", "Account"];

const ResponsiveNavBar = ({ shoppingItem }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
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
    if (page == "Menu") {
      navigate("../");
    } else {
      navigate("../" + page.toLowerCase());
    }
  };

  const settingOnClick = (setting) => {
    setAnchorElUser(null);
    console.log(setting.toLowerCase());
  };

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.email);
      console.log(data.email);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) {
      console.log(user + " user");
      return;
    }
    fetchUserName();
  }, [user, loading]);

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#7F669D" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              mr: 2,
              fontWeight: "bold",
              display: { xs: "none", md: "flex" },
            }}>
            Starducks
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => pagesOnClick(page)}
                sx={{ my: 2, display: "block", color: "white" }}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "inline-flex" }}>
            <Tooltip title="Open settings">
              <IconButton
                aria-label="Avatar"
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}>
                <AccountCircleIcon sx={{ fontSize: 35, color: "white" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              <MenuItem key="status" onClick={() => navigate("../auth")}>
                <Typography textAlign="center" sx={{ color: "#222222" }}>
                  Log In
                </Typography>
              </MenuItem>
              <MenuItem key="status" onClick={logout}>
                <Typography textAlign="center" sx={{ color: "#222222" }}>
                  Log out
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              marginLeft: "2%",
              marginRight: "2%",
              display: "inline-flex",
            }}>
            <IconButton
              sx={{ color: "#FAF9F6" }}
              onClick={() => navigate("../checkout")}>
              <ShoppingBasketIcon />
              <Box sx={{ marginLeft: "20%" }}>
                <Typography>{shoppingItem}</Typography>
              </Box>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveNavBar;
