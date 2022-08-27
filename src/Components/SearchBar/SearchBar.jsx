import  React, {useEffect, useState} from 'react';
import { TextField, Box } from '@material-ui/core';
// import Stack from '@mui/material/Stack'
import { Autocomplete } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search'

const SearchBar = () => {

  const [jsonResults, setJasonResults] = useState([])

  useEffect(() => {
    fetch("https://www.balldontlie.io/api/v1/players")
    .then((response) => response.json())
    .then((json) => setJasonResults(json.data))
  }, [])

  return (
  
  <Box sx={{ width:500 }}>

      <Autocomplete 
      id="players_demo"
      getOptionLabel={(jsonResults) =>`${jsonResults.first_name} ${jsonResults.last_name}`}
      options={jsonResults}
      sx={{width:500}}
      isOptionEqualToValue={(option, value)=> 
        option.first_name === value.first_name
      }
      noOptionsText={"No products"}
      renderOption={(props, jsonResults) => (
        <Box component="li" {...props} key={jsonResults.id}>
          {jsonResults.first_name} {jsonResults.last_name}
        </Box>
      )}
      renderInput= {(params) => <TextField {...params} label={<SearchIcon />} size='small' margin='dense'  />}
      />
    </Box>
  
  )}

export default SearchBar