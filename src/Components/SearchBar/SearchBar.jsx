// import  React, {useEffect, useState} from 'react';
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



 import React from 'react';
 import TextField from '@material-ui/core/TextField';
 import Autocomplete from '@material-ui/lab/Autocomplete';
 import { makeStyles } from '@material-ui/core/styles';
 import SearchIcon from '@material-ui/icons/Search';

 function countryToFlag(isoCode) {
   return typeof String.fromCodePoint !== 'undefined'
     ? isoCode
         .toUpperCase()
         .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
     : isoCode;
 }

 const useStyles = makeStyles({
   option: {
     fontSize: 15,
     '& > span': {
       marginRight: 10,
       fontSize: 18,
     },
   },
 });

 export default function CountrySelect() {
   const classes = useStyles();

   return (
     <Autocomplete
       id="country-select-demo"
       style={{ width: 500 }}
       options={countries}
       classes={{
         option: classes.option,
       }}
       autoHighlight
       getOptionLabel={(option) => option.label}
       renderOption={(option) => (
         <React.Fragment>
           <span>{countryToFlag(option.code)}</span>
           {option.label} ({option.code}) +{option.phone}
         </React.Fragment>
       )}
       renderInput={(params) => (
         <TextField
           {...params}
           label={<SearchIcon/>}
           variant="outlined"
           inputProps={{
             ...params.inputProps
           }}
         />
       )}
     />
   );
 }


 const countries = [
   { code: 'AD', label: 'Andorra', phone: '376' },
   { code: 'AE', label: 'United Arab Emirates', phone: '971' },
   { code: 'AF', label: 'Afghanistan', phone: '93' },
 ];

