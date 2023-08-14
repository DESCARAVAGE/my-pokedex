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

function PokemonCard() {
  const pokemon = pokemonList[0];
  /* console.log(pokemon.imgSrc); */
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img className="card" src={pokemon.imgSrc} alt="Image d'un pokemon" />
      ) : (
        <p>???</p>
      )}
      <figcaption> {pokemon.name} </figcaption>
    </figure>
  );
}

export default PokemonCard;
