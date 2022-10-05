import React from "react";
// import Filter from "./Filter";
// import cards from "../data/db.json" ;
import Card from "./Card.js"

function CardContainer({pokemon, 
    magic,
    yugioh,
    renderCheckedPokemonCards, 
    renderCheckedMagicCards,
    renderCheckedYugiohCards,
}){
    return (

        <div className="cards"> 
            <Card 
            renderCheckedPokemonCards= {renderCheckedPokemonCards} 
            renderCheckedMagicCards={renderCheckedMagicCards}
            renderCheckedYugiohCards={renderCheckedYugiohCards}
            pokemon={pokemon} 
            magic={magic} 
            yugioh={yugioh}
            />
        </div>
            
    )
}

export default CardContainer