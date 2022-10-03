import React, { useState } from "react";
import CardDetails from "./CardDetails"

function Card({game}){
    const {name, image} = game
    let [showDetails,setShowDetails] = useState(true)

    function handleDetails() {
        setShowDetails(showDetails = showDetails);
    }
    return (
        <div className="Card" onClick={handleDetails}>
           <p>This is the card.js component</p> 
           <CardDetails />
        </div>
        
    )
}

export default Card