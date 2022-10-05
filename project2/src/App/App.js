import './App.css';
import React,{useState,useEffect} from "react";
import {Switch, Route} from "react-router-dom"
import axios from "axios";
import NavBar from "../NavBarFolder/NavBar.js"
import About from "../NavBarFolder/About.js"
import Favorites from "../NavBarFolder/Favorites"
import Home from "../NavBarFolder/Home"
import Header from "../HeaderFolder/Header"
import Search from "../SearchFolder/Search"
import CardContainer from "../CardContainerFolder/CardContainer"
import NewCardForm from './NewCardForm';

function App() {

  const [searchBar, setSearchBar]=useState("")
  const [sort,setSort]=useState(false)
  // const [showPokemon,setShowPokemon]=useState(false)

  const [pokemon, setPokemon] = useState([])
  const [magic, setMagic] = useState([])
  const [yugioh, setYugioh] = useState([])

  const fetchData = () => {
      const pokemonUrl = "http://localhost:4000/Pokemon"
      const magicUrl =  "http://localhost:4000/Magic-the-Gathering"
      const yugiohUrl = "http://localhost:4000/Yu-Gi-Oh!"
      
      const getPokemon = axios.get(pokemonUrl)
      const getMagic = axios.get(magicUrl)
      const getYugioh = axios.get(yugiohUrl)
      
      axios.all([getPokemon, getMagic, getYugioh]).then(
          axios.spread((...allData) => {
              const allPokemonData = allData[0].data
              const allMagicData = allData[1].data
              const allYugiohData = allData[2].data

              // console.log(allPokemonData)
              // console.log(allYugiohData)
              // console.log(allMagicData)

              setPokemon(allPokemonData)
              setMagic(allMagicData)
              setYugioh(allYugiohData)
          })  
      )
  }
  // console.log(pokemon)
  useEffect(() => {
    fetchData()
  }, []);

  const filteredPokemonCards=pokemon.filter((onePokemonCard)=>{
    if(onePokemonCard.name.toLowerCase().includes(searchBar.toLowerCase())){
      return(true)
    }else if (onePokemonCard.comment.toLowerCase().includes(searchBar.toLowerCase())){
      return (true)
    }else{
      return(false)
    }
  })

  const sortedPokemon= sort ? [...filteredPokemonCards].sort(
    (pokemonA,pokemonB)=>{
      return pokemonA.id-pokemonB.id
    }
  ): filteredPokemonCards

  // const checkedPokemonBox=pokemon.filter((pokemonCards)=>(pokemon ? pokemonCards.id : true)).sort((pokemon1,pokemon2)=>{
  //   if(sort=== "pokemon"){
  //     return pokemon1.id-pokemon2.id
  //   }else {
  //     return pokemon1.id.localCompare(pokemon2.id)
  //   }
  // })


  const filteredMagicCards=magic.filter((oneMagicCard)=>{
    if(oneMagicCard.name.toLowerCase().includes(searchBar.toLowerCase())){
      return(true)
    }else if (oneMagicCard.comment.toLowerCase().includes(searchBar.toLowerCase())){
      return(true)
    }else{
      return(false)
    }
  })

  const sortedMagic= sort ? [...filteredMagicCards].sort(
    (magicA,magicB)=>{
      return magicA.id-magicB.id
    }
  ): filteredMagicCards

  const filteredYugiohCards=yugioh.filter((oneYugiohCard)=>{
    if(oneYugiohCard.name.toLowerCase().includes(searchBar.toLowerCase())){
      return(true)
    }else if (oneYugiohCard.comment.toLowerCase().includes(searchBar.toLowerCase())){
      return (true)
    }else{
      return(false)
    }
  })

  const sortedYugioh= sort ? [...filteredYugiohCards].sort(
    (yugiohA,yugiohB)=>{
      return yugiohA.id-yugiohB.id
    }
  ): filteredYugiohCards

// function handleAddCard(newPokemonCard) {
//   const newPokeArray = [...sortedPokemon, newPokemonCard]
//   setPokemon(newPokeArray)
// }

  return (
    <div className="App">
      <header className="App-header">
         <nav>
        <NavBar />
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
      <CardContainer pokemon={sortedPokemon} magic={sortedMagic} yugioh={sortedYugioh}/>
        <Header />
        <Search searchBar={searchBar} setSearchBar={setSearchBar} sort={sort} setSort={setSort} sortedPokemon={sortedPokemon} sortedMagic={sortedMagic} sortedYugioh={sortedYugioh}/>
        <NewCardForm handleAddCard={handleAddCard}/>
        
        
      </div>
     

    </div>
  );
}


export default App;
