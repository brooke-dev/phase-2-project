
import { render } from "@testing-library/react";
import React from "react";
import CardDetails from "./CardDetails"
import MagicDetails from "./MagicDetails"
import YugiohDetails from "./YugiohDetails"

function Card({pokemon,magic, yugioh}){

    // const pokemonArray=(pokemon[0])
    // const newArray=({...pokemonArray})
    const renderPokemonCards=pokemon.map((onePokemon)=>(
        <CardDetails 
        key={onePokemon.id}
        id={onePokemon.id}
        // pokemon={pokemon}
        name={onePokemon.name}
        image={onePokemon.image}
        comment={onePokemon.comment}
        />
    ))

    const renderMagicCards=magic.map((oneMagic)=>(
        <MagicDetails 
        key={oneMagic.id}
        id={oneMagic.id}
        name={oneMagic.name}
        image={oneMagic.image}
        comment={oneMagic.comment}
        
        />
    ))
    const renderYugiohCards=yugioh.map((oneYugioh)=>(
        <YugiohDetails 
        key={oneYugioh.id}
        id={oneYugioh.id}
        name={oneYugioh.name}
        image={oneYugioh.image}
        comment={oneYugioh.comment}
        
        />
    ))
        // console.log(renderPokemonCards)
        // console.log(pokemonArray)
        // console.log(newArray)
        // console.log(renderMagicCards)
    return (
        <div>
            <p>CardComponent here</p>
           {renderPokemonCards}
           {renderMagicCards}
           {renderYugiohCards}
        </div>
        
    )
}

export default Card