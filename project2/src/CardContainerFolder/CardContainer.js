import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import cards from "../data/db.json" ;
import Card from "./Card.js"

function CardContainer({pokemon, magic,yugioh}){
    return (
        <ul className="cards">
            <Card pokemon={pokemon} magic={magic} yugioh={yugioh}/>
            
            <p> CardContainer</p>
        </ul>
    )
}

export default CardContainer