import React from "react";

function CardDetails({name,image,comment}){
    // console.log(name)
    // console.log(image)
    
    return(
        <div className="card"> 
            <img src={image} alt={name} className="card__image" />
            <h2>{name}</h2>
            <p>{comment}</p>
        </div>
    )
}

export default CardDetails