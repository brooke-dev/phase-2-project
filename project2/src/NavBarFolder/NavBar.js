import React from "react";
import {NavLink, Link} from "react-router-dom";
// import Home from "./Home";
// import Favorites from "./Favorites"
// import About from "./About"
// import NavBarCSS from "./NavBar.css"

function NavBar(){
    return (
      <>
        <header className="topBar"> 
            <NavLink className="button" exact to="/home">
                Home
            </NavLink>
            <NavLink className="button" to="/about">
                About
            </NavLink>
            <NavLink className="button" to="/favorites">
                Favorites
            </NavLink>
        </header>
      </>
    )
}

export default NavBar