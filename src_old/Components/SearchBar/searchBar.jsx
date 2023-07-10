import React from 'react'
import './searchBar.css';
function searchBar({setSearch, search}) {
  return (
    <div className='searchBar'>
        <input type="text" name="searchTearm" placeholder='Search' onChange={(e)=>setSearch(e.target.value)} value={search} />
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
    </div>
  )
}

export default searchBar