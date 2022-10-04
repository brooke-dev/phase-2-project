import React from "react";
// import Filter from "./Filter";
// import cards from "../data/db.json" ;
import Card from "./Card.js"

function CardContainer({pokemon, magic,yugioh}){
    return (

        <div className="cards"> 
            <Card pokemon={pokemon} magic={magic} yugioh={yugioh}/>
        </div>
            
    )
}

export default CardContainer