// import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React from "react";
import "./SearchCSS.css";

function Search({searchBar,setSearchBar,pokemonSort,setPokemonSort,yugiohSort,setYugiohSort,magicSort,setMagicSort}){
   function handleChangeSortBy(event){
    setSearchBar(event.target.value)
   }

   function handlePokemonClick(event){
    setPokemonSort(event.target.checked)
   }

   function handleYugiohClick(event){
    setYugiohSort(event.target.checked)
   }

   function handleMagicClick(event){
    setMagicSort(event.target.checked)
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
            <button type="submit" className="submitButton">🔍</button>

            <label htmlFor="sort">Pokemon</label>
            <input id="sort"
            type="checkbox"
            checked={pokemonSort}
            onChange={handlePokemonClick}
            />
            
            <label htmlFor="sort">Magic</label>
            <input id="sort"
            type="checkbox"
            checked={magicSort}
            onChange={handleMagicClick}
            />

            <label htmlFor="sort">Yu-Gi-Oh!</label>
            <input id="sort"
            type="checkbox"
            checked={yugiohSort}
            onChange={handleYugiohClick}
            />

            
            
        </form>

    )
}

export default Search