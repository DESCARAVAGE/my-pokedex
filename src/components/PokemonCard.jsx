function PokemonCard(props) {
  /* console.log(props.pokemon); */
  return (
    <figure>
      {props.pokemon.imgSrc ? (
        <img className="card" src={props.pokemon.imgSrc} alt="Image d'un pokemon" />
      ) : (
        <p>???</p>
      )}
      <figcaption> {props.pokemon.name} </figcaption>
    </figure>
  );
}

export default PokemonCard;
