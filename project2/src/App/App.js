import './App.css';
import React, {useState} from "react";
import {Switch, Route} from "react-router-dom"
import NavBar from "../NavBarFolder/NavBar.js"
import About from "../NavBarFolder/About.js"
import Favorites from "../NavBarFolder/Favorites"
import Home from "../NavBarFolder/Home"
import Header from "../HeaderFolder/Header"
import Search from "../SearchFolder/Search"
import CardContainer from "../CardContainerFolder/CardContainer"

function App() {
  const [page, setPage]=useState("/")

  return (
    <div className="App">
      <header className="App-header">
         <nav>
        <NavBar onChangePage={setPage}/>
        <Switch>
          <Route path = "/about">
            <About />
          </Route>
          <Route path = "/favorites">
            <Favorites />
          </Route>
          <Route eact path = "/">
            <Home />
          </Route>
          <Route path ="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
      </nav>
      </header>

      <div>
        <Header />
        <Search />
        <p>Words for our app here--APP.js</p>
        <CardContainer />
      </div>
     

    </div>
  );
}

export default App;
