import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import LogoIMG from '../../assets/images/img_logo.png';
import LogoFONT from '../../assets/images/font_logo.png';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../ThemeConfig';
import useStyles from './useStyles';

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.grow}>
        <AppBar position="static" >
          <Toolbar>
            {/* Hamburguesa */}
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="primary.contrastText"
              aria-label="open drawer">
                <MenuIcon />
            </IconButton>
            {/* Logo */}
            <Box className={classes.logoBox}>
              <img 
                className={classes.logoImg} 
                src={LogoIMG} 
                alt="logo img"/>
              <img 
                className={classes.logoFont} 
                src={LogoFONT} 
                alt="logo font" 
                />
            </Box>
            {/* Searchbar */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            {/* Iconos de carrito y perfil */}
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit" >
                <Badge color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            {/* Icono de tres puntos para mobile */}
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
    </ThemeProvider>
  );
}