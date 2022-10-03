import { render } from "@testing-library/react";
import React from "react";
import CardDetails from "./CardDetails"

function Card({pokemon,magic, yugioh}){

    // const pokemonArray=(pokemon[0])
    const renderPokemonCards=pokemon.map((onePokemon)=>(
        <CardDetails 
        key={onePokemon.id}
        id={onePokemon.id}
        // pokemon={pokemon}
        name={onePokemon.name}
        image={onePokemon.image}
        />
    ))
        console.log(renderPokemonCards)
        // console.log(pokemon)
    return (
        <div>
            <p>CardComponent here</p>
           {renderPokemonCards}
        </div>
        
    )
}

export default Card