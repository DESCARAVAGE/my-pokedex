import PropTypes from "prop-types"

function PokemonCard(props) {
  console.log(props.pokemon.imgSrc);
  return (
    <figure>
      {props.pokemon.imgSrc ? (
        <img
          className="card"
          src={props.pokemon.imgSrc}
          alt="Image d'un pokemon"
        />
      ) : (
        <p>???</p>
      )}
      <figcaption> {props.pokemon.name} </figcaption>
    </figure>
  );
}

PokemonCard.prototype = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  })
}

export default PokemonCard;
