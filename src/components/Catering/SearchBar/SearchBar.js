import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './SearchStyle.css'

function SearchBar({value, changeInput}) {
  return (
    <div className='searchBar-wrap'>
        <SearchIcon className='searchBar-icon'/>
        <input 
          type="text" 
          placeholder='Search Catering Name' 
          value={value} 
          onChange={changeInput} 
        />

    </div>
  )
}

export default SearchBar