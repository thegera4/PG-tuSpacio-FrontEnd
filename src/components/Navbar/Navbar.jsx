import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import LogoIMG from '../../assets/images/img_logo.png';
import LogoFONT from '../../assets/images/font_logo.png';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../ThemeConfig';
import useStyles from './useStyles';
import {useDispatch, useSelector} from 'react-redux'
import SearchBar from '../SearchBar/SearchBar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar } from '@material-ui/core';


export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const data = useSelector(state => state.products)

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isAuthenticated) console.log(user);

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
      {
        isAuthenticated
          ? <>
              <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
              <MenuItem onClick={Logout()}>Sing out</MenuItem>
            </>
          : <MenuItem onClick={Login()}>Sing in</MenuItem>
      }
    </Menu>
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.grow}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            {/* Hamburguesa */}
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer">
                <MenuIcon />
            </IconButton>
            {/* Logo */}
            <Link to='/'>
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
            </Link>
            {/* Searchbar */}
            <div className={classes.search}>
              <SearchBar placeholder="Search product..." data={data}/>
            </div>
            {/* Iconos de carrito y perfil */}
            <div className={classes.sectionDesktop}>
            <Link to='/wishlist'>
              <IconButton color="inherit" >
                <Badge color="secondary" overlap="rectangular">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link to='/cart'>
              <IconButton color="inherit" >
                <Badge color="secondary" overlap="rectangular">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              </Link>
              { isAuthenticated && <h3>{user.name}</h3>}
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit">
                {
                  isAuthenticated   
                    ? <Avatar alt={user.name} src={`${user.picture}`} />
                    : <AccountCircle />
                }
              </IconButton>
            </div>
            {/* Icono de tres puntos para mobile */}
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-haspopup="true"
                color="inherit" >
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