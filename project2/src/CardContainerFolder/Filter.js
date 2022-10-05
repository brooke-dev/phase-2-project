import React from "react";
import Card from "./Card";

function Filter({pokemon,setPokemon,magic,setMagic,yugioh, setYugioh}){
    return(
        <div>
            
            <Card pokemon={pokemon} magic={magic} yugioh={yugioh}/>
        </div>
    )
}

export default Filter