import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from '@mui/material/Menu';
import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import './styles/NavBar.css'

const pages = ['About Me', 'My Projects', 'Contact Me', 'Resume'];

const Nav = ({ currentPage, handlePageChange }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <Link to="/Home"> */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", md: "flex" } }}
              onClick={() => handlePageChange("Home")}
            >
              <img
                id="logo"
                src="./assets/images/alexlogo.png"
                alt="Alex Gonzalez Logo"
              />
            </Typography>
            {/* </Link> */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
                <Menu id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{display: {xs: 'block', md: 'none'}}}>
{pages.map((page)=> (
    <MenuItem key={page} onClick={{handleCloseNavMenu}}>
        <Typography textAlign='center' onClick={()=> handlePageChange(page)}>{page}</Typography>

    </MenuItem>

) )}
                </Menu>


            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Nav;
