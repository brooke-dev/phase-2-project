import React from "react";
import Home from "./Home";
import Favorites from "./Favorites"
import About from "./About"

function NavBar(){
    
    return(
        <div>
            <p>This is the NavBar.js component</p>
            <Home />
            <Favorites />
            <About />
        </div>
        
    )
}

export default NavBar