
import React, { useState } from 'react'
import './SearchBar.css'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux'
import { getDetail } from '../../actions/index'
import { useNavigate } from "react-router-dom";



const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')
  const dispatch = useDispatch()
  let navigate = useNavigate();


  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }
  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }


  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
        <div className='searchIcon'>
          {
            filteredData.length === 0 
              ? <SearchIcon id='searchBtn' /> 
              : <CloseIcon id='clearBtn' onClick={clearInput} />
          }
        </div>
      </div>

      { filteredData.length != 0 
          ? (
              <div className='dataResult'>
                { filteredData.slice(0, 6).map((value, key) => {
                  return (
                    <a className='dataItem' onClick={ () => {
                      dispatch(getDetail(value.id))
                      navigate(`/${value.id}`)
                      clearInput() } } 
                    >
                      <p>{value.name}</p>
                    </a>
                  )
                })}
              </div>
            )
          : <div className='dataResult'>
              {
                wordEntered && <p id='noProduct'> No products found </p>
              }
            </div>
      }
      
    </div>
  )
}

export default SearchBar