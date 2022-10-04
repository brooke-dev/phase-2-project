import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./Filter";
import cards from "../data/db.json" ;
import Card from "./Card.js"

function CardContainer(){
    const [pokemon, setPokemon] = useState([])
    const [magic, setMagic] = useState([])
    const [yugioh, setYugioh] = useState([])
    // const [search, setSearch]=useState("")

    // const displayedCards=pokemon.filter((onePokemonCard)=>
    // pokemon.name.toLowerCase().includes(search.toLowerCase())
    // );
   

    const fetchData = () => {
        const pokemonUrl = "http://localhost:4000/Pokemon"
        const magicUrl =  "http://localhost:4000/Magic-the-Gathering"
        const yugiohUrl = "http://localhost:4000/Yu-Gi-Oh!"
        
        const getPokemon = axios.get(pokemonUrl)
        const getMagic = axios.get(magicUrl)
        const getYugioh = axios.get(yugiohUrl)
        
        axios.all([getPokemon, getMagic, getYugioh]).then(
            axios.spread((...allData) => {
                const allPokemonData = allData[0].data
                const allMagicData = allData[1].data
                const allYugiohData = allData[2].data

                // console.log(allPokemonData)
                // console.log(allYugiohData)
                // console.log(allMagicData)

                setPokemon(allPokemonData)
                setMagic(allMagicData)
                setYugioh(allYugiohData)
            })  
        )
    }
    // console.log(pokemon)
useEffect(() => {
    fetchData()
}, []);


    return (
        <ul className="cards">
            <Card pokemon={pokemon} magic={magic} yugioh={yugioh}/>
            
            <p> CardContainer</p>
        </ul>
    )
}

export default CardContainer