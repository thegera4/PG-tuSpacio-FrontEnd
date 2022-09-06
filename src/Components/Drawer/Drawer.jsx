import {React, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Select from '@material-ui/core/Select';
import Filter from '../Filter/Filter';
import { Hidden, ThemeProvider } from '@material-ui/core';
import {FormControl} from '@material-ui/core';
import {InputLabel} from '@material-ui/core';
import { filterByBrand, filterByCategory, getAllBrands, getCategories, orderByAbc, 
    orderByPrice, setCurrentHomePage, OrderByRating } from '../../actions/index';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft({setOrder}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const brands = useSelector((state) => state.brands);
  const categories = useSelector((state) => state.categories)

  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect ( () => {
    dispatch(getCategories())
    dispatch(getAllBrands())
}, [dispatch] )

//   const renderFilter = (
//     <ThemeProvider>
        
//     </ThemeProvider>
//   );
//   const navigate = useNavigate();
//     const categories = useSelector((state) => state.categories)
//     const brands = useSelector((state) => state.brands)
//     const classes = useStyles();
//     const dispatch = useDispatch();
//     const [stars, setStars] = useState([]);

//     useEffect ( () => {
//         dispatch(getCategories())
//         dispatch(getAllBrands())
//     }, [dispatch] )
    
    function handleOrderByAbc(e) {
        e.preventDefault();
        // console.log(e.target.value);
        dispatch(orderByAbc(e.target.value));
        dispatch(setCurrentHomePage(1))
        if (e.target.value) setOrder(`Order by ${e.target.value}`)
        else setOrder("")
    }

    function handleOrderByPrice(e) {
        e.preventDefault();
        console.log(e.target.value);
        dispatch(orderByPrice(e.target.value));
        dispatch(setCurrentHomePage(1))
        if (e.target.value) setOrder(`Order by ${e.target.value}`)
        else setOrder("")
    }

    function handlefilterByBrand(e) {
        e.preventDefault();
        console.log(e.target.value);
        dispatch(filterByBrand(e.target.value))
        dispatch(setCurrentHomePage(1))
        if (e.target.value) setOrder(`Filter by ${e.target.value}`)
        else setOrder("")
    }

    function handlefilterByCategory(e) {
        e.preventDefault();
        console.log(e.target.value);
        dispatch(filterByCategory(e.target.value))
        dispatch(setCurrentHomePage(1))
        if (e.target.value) setOrder(`Filter by ${e.target.value}`)
        else setOrder("")
    }

    function handleOrderByRating(e) {
        e.preventDefault();
        console.log(e.target.value);
        dispatch(OrderByRating(e.target.value));
        dispatch(setCurrentHomePage(1))
        if (e.target.value) setOrder(`Order by ${e.target.value}`)
        else setOrder("")
    }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color='#ffffff'
        position="relative"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Hidden mdDown>
            <Filter/>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <Divider />
       
            <FormControl className={classes.formControl}>
                <InputLabel>Brands</InputLabel>
                <Select
                    native
                    onChange={(e) => console.log('Brands')}
                >
                    <option aria-label="None" value="" />
                    {
                        brands.length &&
                        brands.map( b => <option value={`${b}`}>{`${b.toUpperCase()}`}</option> )    
                    }
                </Select>
            </FormControl>
          
        <Divider />
            <FormControl className={classes.formControl}>
                <InputLabel>Categories</InputLabel>
                <Select
                    native
                    onChange={(e) => console.log('cat')}
                >
                    <option aria-label="None" value="" />
                    {
                        categories.length &&
                        categories.map( c => <option value={`${c.name}`}>{`${c.name.toUpperCase()}`}</option> )
                    }
                </Select>
            </FormControl>
        <Divider />
            <FormControl className={classes.formControl}>
                <InputLabel>Sort by Name</InputLabel>
                <Select
                    native
                    onChange={(e) => console.log('name')}
                >
                    <option aria-label="None" value="" />
                    <option value="a-to-z">A to Z</option>
                    <option value="z-to-a">Z to A</option>
                </Select>
            </FormControl>
            <Divider />
            <FormControl className={classes.formControl}>
                <InputLabel>Order by Price</InputLabel>
                <Select
                    native
                    onChange={(e) => console.log('Price')}
                >
                    <option aria-label="None" value="" />
                    <option value='min-max'>Low to High</option>
                    <option value='max-min'>High to Low</option>
                </Select>
            </FormControl>
            <Divider />
            <FormControl className={classes.formControl}>
                <InputLabel>Order by Rating</InputLabel>
                <Select
                    native
                    onChange={(e) => console.log('rating')}
                >
                    <option aria-label="None" value="" />
                    <option value='max-min'>5...1</option>
                    <option value='min-max'>1...5</option>
                </Select>
            </FormControl>
      </Drawer>
     
    </div>
  );
}