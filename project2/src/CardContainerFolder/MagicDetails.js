import React from "react";

function MagicDetails({name, image, comment}){
    return (
        <li className="card"> 
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{comment}</p>
        </li>

    )
}

export default MagicDetails