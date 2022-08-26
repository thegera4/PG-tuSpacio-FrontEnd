import * as React from 'react';
import './SearchBar.css'
import SearchIcon from '@material-ui/icons/Search'
import { TextField } from '@material-ui/core';

const SearchBar = () => {
  return (
    <div>
           <SearchIcon />
           <TextField />
    </div>
  )
}

export default SearchBar