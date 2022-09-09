
import {React, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {List, Box, Button} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Select from '@material-ui/core/Select';
import {SwipeableDrawer} from '@material-ui/core';
import {FormControl} from '@material-ui/core';
import {InputLabel} from '@material-ui/core';
import { getAllBrands, getCategories, setCurrentHomePage, orderCombine } from '../../actions/index';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  formControl: {
    margin: 1,
    minWidth: 150,
  },
  margin2: {
    marginTop: 20,
    
  },
});


export default function DrawerBox({setOrder}) {
const classes = useStyles();
const navigate = useNavigate()
const categories = useSelector((state) => state.categories)
const brands = useSelector((state) => state.brands)
const [open, setOpen] = useState(false)
const [filters, setFilters] = useState({
  "alpha": "",
  "category": "",
  "price": "",
  "brand": "",
  "rating": ""
})

const dispatch = useDispatch();
    
    useEffect ( () => {
        dispatch(getCategories())
        dispatch(getAllBrands())
    }, [dispatch] )

function handlefilter(e) {
  e.preventDefault();
  dispatch(orderCombine({...filters, [e.target.name]: e.target.value}));
  dispatch(setCurrentHomePage(1))
  let {alpha,category,price,brand,rating}=filters
  // eslint-disable-next-line no-sequences
  setOrder(`filters by ${alpha,category,price,brand,rating}`)
}


  return(
    <div>
      <IconButton 
      edge='start'
      color='inherit'
      arial-label ='open drawer'
      onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
      anchor='left'
      open={open}
      onClose={() => setOpen(!open)}
      onOpen={() => {}}
      >
        <div className={classes.list}>
          <Box
          textAlign='center'
          p={2}
          >
          </Box>
          <Divider />
          <List>
              <FormControl className={classes.formControl}>
                <InputLabel>Brands</InputLabel>
                <Select
                    native
                    name="brand"
                    onChange={ (e) => {
                        setFilters({...filters, "brand": e.target.value});
                        handlefilter(e)
                    }}
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
                      name="category"
                      onChange={(e) => {
                          setFilters({...filters, "category": e.target.value});
                          handlefilter(e)
                      }}
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
                      name="alpha"
                      onChange={(e) => {
                          setFilters({...filters, "alpha": e.target.value});
                          handlefilter(e)
                      }}
                  >
                      <option aria-label="None" value="" />
                      <option value="asc">A to Z</option>
                      <option value="desc">Z to A</option>
                  </Select>
              </FormControl>
              <Divider />
             
              <FormControl className={classes.formControl}>
                  <InputLabel>Order by Price</InputLabel>
                  <Select
                      native
                      name="price"
                      onChange={(e) => {
                          setFilters({...filters, "price": e.target.value});
                          handlefilter(e)
                      }}
                  >
                      <option aria-label="None" value="" />
                      <option value='asc'>Low to High</option>
                      <option value='desc'>High to Low</option>
                  </Select>
              </FormControl>
                <Divider variant='fullWidth' />
              <FormControl className={classes.formControl}>
                  <InputLabel>Order by Rating</InputLabel>
                  <Select
                      native
                      name="rating"
                      onChange={(e) => {
                          setFilters({...filters, "rating": e.target.value});
                          handlefilter(e)
                      }}
                  >
                      <option aria-label="None" value="" />
                      <option value='desc'>5...1</option>
                      <option value='asc'>1...5</option>
                  </Select>
              </FormControl>
                <Divider variant='fullWidth' />
              <Button 
                  onClick={() => console.log("Limpiando filtros")}
                  color="secondary"
                  fullWidth='true'
                  size="small"
                  className={classes.margin2}
              >
                  Clean Filters
              </Button>
                <Divider variant='fullWidth' />
              <Button 
                  onClick={() => navigate('/service')}
                  fullWidth='true'
                  color="secondary"
                  className={classes.margin2}
              >
                  Beuthy Services
              </Button>
              
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  )
}