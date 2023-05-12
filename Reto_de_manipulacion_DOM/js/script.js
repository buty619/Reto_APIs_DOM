// 1. definir los selectores

// const pokemonName = ;
// const pokemonNumber = ;

// const pokemonImage = ;
// const form = ;
// const input = ;

// const buttonPrev = ;
// const buttonNext = ;

let start = 1;

// ### 2. crear la función que consuma de la API de pokemon

const fetchPokemon = async (pokemonID) => {
  return pokemonData;
};

// ### 3. crear la función renderPokemon

const renderPokemon = async (pokemonID) => {
  pokemonName.innerHTML = "cargando...";
  pokemonNumber.innerHTML = "";

  const data = await fetchPokemon(pokemonID);

  if (data) {
    // agregar la información obtenida en los campos pokemonName, pokemonNumber y pokemonImage

    input.value = "";
    start = data.id;
  } else {
    pokemonName.innerHTML = "pokemon no encontrado";
    pokemonNumber.innerHTML = "";
    pokemonImage.src = "../img/notFound.gif";
  }
};

// ### 4. agregar event listeners

// form.addEventListener... ;

// buttonPrev.addEventListener... ;

// buttonNext.addEventListener ...;

renderPokemon(start);
