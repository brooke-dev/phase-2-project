import React from "react";

function YugiohDetails({image,name,comment}){
    return (
        <li className="card"> 
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{comment}</p>
        </li>
    )
}

export default YugiohDetails