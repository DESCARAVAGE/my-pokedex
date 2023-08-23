const NavBar = (props) => {
  const handleClickBefore = () => {
    props.setPokemonIndex(props.pokemonIndex - 1);
  };
  const handleClickAfter = () => {
    props.setPokemonIndex(props.pokemonIndex + 1);
  };

  return (
    <div>
      {props.pokemonIndex > 0 && (
        <button onClick={handleClickBefore}>Précédent</button>
      )}
      {props.pokemonIndex < props.countList && (
        <button onClick={handleClickAfter}>Suivant</button>
      )}
    </div>
  );
};

export default NavBar;
