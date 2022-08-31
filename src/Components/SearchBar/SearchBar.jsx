//  import  React, {useEffect, useState} from 'react';
// import { TextField, Box } from '@material-ui/core';
// // import Stack from '@mui/material/Stack'
// import { Autocomplete } from '@material-ui/lab';
// import SearchIcon from '@material-ui/icons/Search'

// const SearchBar = () => {

//   const [jsonResults, setJasonResults] = useState([])

//   useEffect(() => {
//     fetch("https://www.balldontlie.io/api/v1/players")
//     .then((response) => response.json())
//     .then((json) => setJasonResults(json.data))
//   }, [])


//   return (
  
//   <Box sx={{ width:500 }}>


//       <Autocomplete 
//       id="players_demo"
//       getOptionLabel={(jsonResults) =>`${jsonResults.first_name} ${jsonResults.last_name}`}
//       options={jsonResults}
//       sx={{ mx: "auto", width: 450 }}
//       isOptionEqualToValue={(option, value)=> 
//         option.first_name === value.first_name
//       }
//       noOptionsText={"No products"}
//       renderOption={(props, jsonResults) => (
//         <Box component="li" {...props} key={jsonResults.id}>
//           {jsonResults.first_name} {jsonResults.last_name}
//         </Box>
//       )}
//       renderInput= {(params) => <TextField {...params} label={<SearchIcon />} size='small' margin='normal' />}
//       />
//     </Box>
  
//   )}

// export default SearchBar



  import React, {useState, useEffect} from 'react';
  import { useDispatch, useSelector } from 'react-redux';
//  import TextField from '@material-ui/core/TextField';
//  import Autocomplete from '@material-ui/lab/Autocomplete';
//  import { makeStyles } from '@material-ui/core/styles';
//  import SearchIcon from '@material-ui/icons/Search';
  import {getName} from '../../actions/index'

//  function countryToFlag(isoCode) {
//    return typeof String.fromCodePoint !== 'undefined'
//      ? isoCode
//          .toUpperCase()
//          .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
//      : isoCode;
//  }

//  const useStyles = makeStyles({
//    option: {
//      fontSize: 15,
//      '& > span': {
//        marginRight: 10,
//        fontSize: 18,
//      },
//    },
//  });




//  export default function SearchBar() {
//    const classes = useStyles();
//    const [suggested, setSuggested] = useState('')
//    const dispatch = useDispatch()
//    const search = useSelector((state) => state.search)

//    console.log(search)
   
  




//    return (
//      <Autocomplete
//        id="country-select-demo"
//        style={{ width: 500 }}
//        options={countries}
//        classes={{
//          option: classes.option,
//        }}
//        onChange = {(event, suggested) => {
//         dispatch(getName(suggested))  }}
//        value={suggested}
//        inputValue={suggested}
//        onInputChange={(event, suggested) => {
        
//         setSuggested(suggested)  
//       }}
//        autoHighlight
//        getOptionLabel={(option) => option.label}
//        renderOption={(option) => (
//          <React.Fragment>
//            <span>{countryToFlag(option.code)}</span>
//            {option.label} ({option.code}) +{option.phone}
//          </React.Fragment>
//        )}
//        renderInput={(params) => (
//          <TextField
//            {...params}
//            label={<SearchIcon/>}
//            variant="outlined"
//            inputProps={{
//              ...params.inputProps
//            }}
//          />
//        )}
//      />
//    );
//  }


//  const countries = [
//    { code: 'AD', label: 'Andorra', phone: '376' },
//    { code: 'AE', label: 'United Arab Emirates', phone: '971' },
//    { code: 'AF', label: 'Afghanistan', phone: '93' },
//  ];


import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import loupe from '../../assets/images/search.png'
import './SearchBar.css'


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    border: '1px solid black',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
export default function SearchBar() {
  const classes = useStyles();
  const [suggested, setSuggested] = useState('')
  const dispatch = useDispatch()
  const search = useSelector((state) => state.search)



   console.log(search)
  return (
  
    <div className={classes.search}>
    <button className='loupe' onClick={()=> suggested ? dispatch(getName(suggested)): alert('Ingrese el nombre del producto')}> <img className='ic' src={loupe} alt="" width="20px"/> </button>
    {/* <button onClick={()=> dispatch(getName(suggested))} ></button> */}
              {/* <div className={classes.searchIcon} >
                <SearchIcon 
                
                />
              </div> */}
              <InputBase
                // value={suggested}
                onChange={(event) => {setSuggested(event.target.value)
                  }}
                placeholder="Search Product..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                autoComplete={search.name}
                
              />

            </div>
            
  )
}