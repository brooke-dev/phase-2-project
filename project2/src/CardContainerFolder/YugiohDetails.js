import React from "react";

function YugiohDetails({image,name,comment}){
    return (
        <li className="card"> 
            <img src={image} alt={name} className="card__image" />
            <h2>{name}</h2>
            <p>{comment}</p>
        </li>
    )
}

export default YugiohDetails