import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import cards from "../data/db.json" ;
import Card from "./Card.js"

function CardContainer({pokemon, magic,yugioh}){
    return (

        <div >
           <Card pokemon={pokemon} magic={magic} yugioh={yugioh}/>
            {/* <Filter pokemon={pokemon} setPokemon={setPokemon} magic={magic} setMagic={setMagic} yugioh={yugioh} setYugioh={setYugioh}/> */}

        <ul className="cards">
            <Card pokemon={pokemon} magic={magic} yugioh={yugioh}/>

            
        </div>
    )
}

export default CardContainer