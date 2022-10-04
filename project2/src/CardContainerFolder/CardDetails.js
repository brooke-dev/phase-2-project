import React from "react";

function CardDetails({name,image,comment}){
    // console.log(name)
    // console.log(image)
    
    return(
        <li className="card"> 
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <p>{comment}</p>
        </li>
    )
}

export default CardDetails