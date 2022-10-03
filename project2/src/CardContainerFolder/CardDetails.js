import React from "react";

function CardDetails({name,image}){
    // console.log(name)
    // console.log(image)
    return(
        
        <li className="card"> 
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>card details here</p>
        </li>
    )
}

export default CardDetails