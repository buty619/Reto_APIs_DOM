// 1. Obtener información de un Pokemón

async function obtenerPokemon(id) {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await APIResponse.json();
  return {
    id: data.id,
    nombre: data.name,
    tipos: data.types,
    imagen: data.sprites.front_default,
  };
}

obtenerPokemon(1);

// 2. Obtener información de los primeros 20 Pokemón

async function obtenerTodosPokemones() {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
  const data = await APIResponse.json();
  return data.results;
}

obtenerTodosPokemones();

// ### 3. Obtener información del tipo de Pokemón

async function obtenerTipo(type) {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
  const data = await APIResponse.json();
  return data.pokemon.map((data) => data.pokemon);
}

obtenerTipo("dragon");

// ### 4. Obtener información de la habilidad Pokemón

async function obtenerHabilidadPokemon(idHabilidad) {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/ability/${idHabilidad}/`
  );
  const data = await APIResponse.json();
  return {
    nombre: data.name,
    id: data.id,
    pokemones: data.pokemon.map((data) => data.pokemon.name),
  };
}

obtenerHabilidadPokemon("1");

// ## 5. Obtener información de la region de un Pokemón

async function obtenerRegionPokemon(id) {
  const APIResponse1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await APIResponse1.json();
  const region = pokemon.location_area_encounters;
  const APIResponse2 = await fetch(region);
  const data = await APIResponse2.json();
  return {
    id: pokemon.id,
    nombre: pokemon.name,
    imagen: pokemon.sprites.front_default,
    region: data.map((region) => region.location_area.name),
  };
}

obtenerRegionPokemon("1");

// aca se exportan todas las funciones para realizar el testing sobre tu solución
export {
  obtenerPokemon,
  obtenerTodosPokemones,
  obtenerTipo,
  obtenerHabilidadPokemon,
  obtenerRegionPokemon,
};
