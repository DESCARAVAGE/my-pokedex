import { useState } from "react";
import "./App.css";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import "./components/PokemonCard.css";
import NavBar from "./components/NavBar";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  /* const handleClickConsole = () => {
    console.log(pokemonIndex);
    console.log(pokemon);
  }; */

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const pokemon = pokemonList[pokemonIndex];
  const countList = pokemonList.length - 1;

  return (
    <>
      <div>
        <MyTitle />
        <PokemonCard pokemon={pokemon} />
        <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} countList={countList}/>
        {/* <button onClick={handleClickConsole}>Console de pokemonIndex</button> */}
      </div>
    </>
  );
}

export default App;
