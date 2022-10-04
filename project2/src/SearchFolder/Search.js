// import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React from "react";
import "./SearchCSS.css";

function Search({searchBar,setSearchBar,sort,setSort}){
   function handleChangeSortBy(event){
    setSearchBar(event.target.value)
   }

   function handleToggle(event){
    setSort(event.target.checked)
   }



    return (

        <form className="searchbar">
            <input
            type="text"
            id="search"
            placeholder="search cards here!"
            value={searchBar}
            onChange={handleChangeSortBy}
            />
            <button type="submit">🔍</button>

            <label htmlFor="sort">sort by cardtype</label>
            <input id="sort"
            type="checkbox"
            checked={sort}
            onChange={handleToggle}
            />
            
        </form>

    )
}

export default Search