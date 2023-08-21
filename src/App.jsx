import { useState } from "react";
import "./App.css";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import "./components/PokemonCard.css";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickBefore = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const handleClickAfter = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

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

  return (
    <>
      <div>
        <MyTitle />
        <PokemonCard pokemon={pokemon} />
        {pokemonIndex > 0 ? (
          <button onClick={handleClickBefore}>Précédent</button>
        ) : (
          ""
        )}
        {pokemonIndex < pokemonList.length - 1 ? (
          <button onClick={handleClickAfter}>Suivant</button>
        ) : (
          ""
        )}
        {/* <button onClick={handleClickConsole}>Console de pokemonIndex</button> */}
      </div>
    </>
  );
}

export default App;
