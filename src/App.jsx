import "./App.css";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import "./components/PokemonCard.css";

function App() {
  const pokemonList = [
    {
      name: "bulbizar",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      imgSrc: null,
    },
  ];

  const pokemon = pokemonList[0];

  return (
    <>
      <div>
        <MyTitle />
        <PokemonCard pokemon={pokemon} />
      </div>
    </>
  );
}

export default App;
