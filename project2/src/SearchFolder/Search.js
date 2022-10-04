// import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React from "react";
import SearchCSS from "./SearchCSS.css"

function Search({searchBar,setSearchBar,sort,setSort}){
   
    return (

        <form className="searchbar">
            <input
            type="text"
            id="search"
            placeholder="search cards here!"
            value={searchBar}
            onChange={(e)=>setSearchBar(e.target.value)}
            />
            <button type="submit">🔍</button>

            {/* <label htmlFor="sort">sort by type</label>
            <input id="sort"
            type="checkbox"
            checked={sort}
            onChange={(e)=>setSort(e.target.checked)}
            /> */}
            
        </form>

    )
}

export default Search