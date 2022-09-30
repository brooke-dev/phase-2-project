import './App.css';
import NavBar from "../NavBarFolder/NavBar.js"
import Header from "../HeaderFolder/Header"
import Search from "../SearchFolder/Search"
import CardContainer from "../CardContainerFolder/CardContainer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Header />
        <Search />
        <p>Words for our app here--APP.js</p>
        <CardContainer />
      </header>
       
    </div>
  );
}

export default App;
