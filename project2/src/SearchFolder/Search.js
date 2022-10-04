import React,{useState} from "react";
import SearchCSS from "./SearchCSS.css"

function Search(){
    const [search, setSearch]=useState("")

    // function handleSubmit(e){
    //     e.preventDefault();
    //     onSearch(search);
    // }
    return (
        <form className="searchbar">
            <input
            type="text"
            id="search"
            placeholder="search cards here!"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />

            <button type="submit">🔍</button>
        </form>
    )
}

export default Search