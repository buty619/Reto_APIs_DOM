# 🤓 Reto llamado API's:

Se requiere construir una aplicación en JavaScript para obtener información de la API pública 🐻 https://pokeapi.co/. Para inicial a resolver este ejercicio te recomiendo ir a la documentación de la API y leer los detalles de como obtener la información solicitada (https://pokeapi.co/docs/v2#pokemon). La aplicación deberá tener las siguientes cinco funciones:

## 📈 Funciones a implementar:

### 1. Obtener información de un Pokemón:

Esta función deberá recibir el `id` de un Pokemón y devolver su información. La información que se deberá obtener es el nombre (`name`) del Pokemón, su número en la Pokedex (`id`), su tipo (`types`) y su imagen (`sprites.front_default`). La función deberá retornar un objeto con la información del Pokemón.

➡️ salida esperada

```js
GET https://pokeapi.co/api/v2/pokemon/1

// función

obtenerPokemon(id)

//result

{
  id: 1,
  nombre:"bulbasaur",
  tipos: ['grass', 'poison'],
  imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
}

```

### 2. Obtener información de los primeros 20 Pokemón:

Esta función no recibe ningún parámetro. La función realizara una petición a la API de PokeAPI que devuelve un objeto JSON con un listado los primeros 20 pokemones disponibles en la API. La función debe retornar un array con los objetos de cada pokemon con los siguientes datos: nombre (`name`) y URL del pokemon (`url`).

➡️ salida esperada

```js
GET https://pokeapi.co/api/v2/pokemon?limit=20

// función

obtenerTodosPokemones()

//result

[{
  nombre:"bulbasaur",
  url:"https://pokeapi.co/api/v2/pokemon/1/"
}, {..}, {..}, ..]

```

### 3. Obtener información del tipo de Pokemón:

Esta función deberá recibir el nombre de un tipo de Pokemón y devolver su información. La información que se deberá obtener es el nombre del tipo, la lista de Pokemones que pertenecen a ese tipo y su url. La función deberá retornar un objeto con la información del tipo.

➡️ salida esperada

```js
GET https://pokeapi.co/api/v2/type/dragon

// función

obtenerTipo(type)

//result

[{
  nombre:"dratini"
  url:"https://pokeapi.co/api/v2/pokemon/147/"
},
{
  nombre:"dragonair"
  url:"https://pokeapi.co/api/v2/pokemon/148/"
}, {..}, ..]

```

### 4. Obtener información de la habilidad Pokemón:

Esta función debe recibir un parámetro `idHabilidad`, que será el ID de la habilidad que se desea obtener información. La función realizara una petición a la API de PokeAPI que devuelve un objeto JSON con la información de la habilidad especificada por el ID. La función debe retornar un objeto con los siguientes datos de la habilidades: id, nombre (`name`) y un array con el nombre de los pokemones que poseen la habilidad (`[pokemone.pokemon.name]`).

➡️ salida esperada

```js
GET https://pokeapi.co/api/v2/ability/1

// función

obtenerHabilidadPokemon(idHabilidad)

//result

{
  id: '1',
  nombre: 'stench',
  pokemones: ['gloom', 'grimer', 'muk', ...]
}

```

### 5. Obtener información de la region de un Pokemón:

Esta función debe recibir un parámetro `id`, que será el ID del pokemon que se desea obtener información. La información que se deberá obtener es el nombre del Pokemón, su número en la Pokedex (`id`), su imagen (`sprites.front_default`) y un array con los nombres de las regiones donde se puede encontrar dicho pokemon, para obtener esta información debes hacer un segundo llamado a la url que se encuentra en `location_area_encounters`.

➡️ salida esperada

```js
GET https://pokeapi.co/api/v2/pokemon/1

// función

obtenerRegionPokemon(id)

//result

{
  id: 1,
  nombre:"bulbasaur",
  imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  region: ['cerulean-city-area', 'pallet-town-area', 'lumiose-city-area']
}

```

## 👆🏻 Notas finales

Ten en cuenta que debes crear una **función para resolver cada uno de los puntos**.

si quieres realizar pruebas mientras resuelves los retos dentro de la carpeta principal de este repositorio `Reto_Object_Arrays` puedes ir a la carpeta del reto (en tu shell escribe `cd Reto_de_llamada_APIs`) y luego correr el comando `node arrays.js` para ejecutar el código que tengas en tu reto.

**NO OLVIDES LEER ATENTAMENTE LA DOCUMENTACIÓN DE LA API QUE VAMOS A CONSUMIR ESTA NOS DIRÁ COMO EXPONEN SU INFORMACIÓN Y COMO PODEMOS ACCEDER A ELLA**

### 🥳 ¡Buena suerte! 🥳
