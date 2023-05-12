const pokemonName = document.querySelector(".pokemon_name");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonImage = document.querySelector(".pokemon_image");

const form = document.querySelector(".form");
const input = document.querySelector(".input_search");

const buttonPrev = document.querySelector(".anterior");
const buttonNext = document.querySelector(".proximo");

let start = 1;

const fetchPokemon = async (pokemon) => {
  const APIResponse = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if ((await APIResponse).status == 200) {
    const data = (await APIResponse).json();
    return data;
  }
  return {};
};

const renderPokemon = async (pokemon) => {
  pokemonName.innerHTML = "cargando...";
  pokemonNumber.innerHTML = "";

  const data = await fetchPokemon(pokemon);

  if (data.name) {
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src =
      data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
        "front_default"
      ];
    input.value = "";
    start = data.id;
  } else {
    pokemonName.innerHTML = "pokemon no encontrado";
    pokemonNumber.innerHTML = "";
    pokemonImage.src = "../img/notFound.gif";
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener("click", () => {
  if (start > 1) {
    start -= 1;
    renderPokemon(start);
  }
});

buttonNext.addEventListener("click", () => {
  start += 1;
  renderPokemon(start);
});

renderPokemon(start);
