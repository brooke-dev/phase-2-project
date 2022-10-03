import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./Filter";
import cards from "../data/db.json" ;
import Card from "./Card.js"

function CardContainer(){



    const [pokemon, setpokemon] = useState([])
    const [magic, setmagic] = useState([])
    const [yugioh, setyugioh] = useState([])


    const fetchData = () => {
        const pokemonUrl = "http://localhost:4000/Pokemon"
        const magicUrl =  "http://localhost:4000/Magic-the-Gathering"
        const yugiohUrl = "http://localhost:4000/Yu-Gi-Oh!"
        
        const getPokemon = axios.get(pokemonUrl)
        const getMagic = axios.get(magicUrl)
        const getYugioh = axios.get(yugiohUrl)
        
        axios.all([getPokemon, getMagic, getYugioh]).then(
            axios.spread((...allData) => {
                const allPokemonData = allData[0]
                const allMagicData = allData[1]
                const allYugiohData = allData[2]

                console.log(allPokemonData)
                 console.log(allYugiohData)
                 console.log(allMagicData)
            })
        )
    }
       
useEffect(() => {
    fetchData()
}, []);




    return (
        <ul className="cards">
            
            <Filter />
            
            <p> this is the CardContainer.js component</p>
        </ul>
    )
}

export default CardContainer