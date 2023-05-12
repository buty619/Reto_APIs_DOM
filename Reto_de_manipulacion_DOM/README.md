# 🤓 Reto manipulación del DOM:

Para este reto vamos a desarrollar una página web que nos permite buscar pokemons y mostrar información acerca de ellos. Para lograr esto vamos a manipular nuestro DOM (una serie de elementos de HTML) que se van a enlazar con nuestro código JS mediante los llamados selectores.
la idea es obtener el comportamiento mostrado en el siguiente video:

## :gear: como hacer el setup del reto, correrlo y validar los cambios:

para poder correr este reto localmente debes correr en tu shell el comando

```bash
npm run start
```

esto inicia un servidor que corre nuestra pagina web y el cual detectara y actualizara los cambios que hagamos en el folder `Reto_de_manipulacion_DOM`, luego abre en tu browser favorito a la url:

```bash
http://127.0.0.1:8080/
```

en el siguiente video podrás ver comportamiento esperado al momento de correr la pagina web:

![video](./img/iniciando%20servidor.mov)

## 📈 Funciones a implementar:

### 1. definir los selectores:

En primer lugar, debemos definir tres selectores (`.pokemon_name, .pokemon_number, .pokemon_image`) que se corresponden con las secciones de la página donde se mostrará información del pokemon. puedes ver el archivo `index.html` para validar estas secciones.

Luego, se definir dos selectores adicionales para el formulario de búsqueda (`.form`) y la caja de texto (input: `.input_search`) donde el usuario escribirá el nombre o id del pokemon que desea buscar.

Por último, se definir los selectores de los dos botones (`.anterior`, `.proximo`) para navegar entre los pokemons que se mostrarán en la página, uno para avanzar y otro para retroceder.

### 2. crear la función que consuma de la API de pokemon

Ahora se debe crear una función llamada "fetchPokemon" que recibe como parámetro el nombre o id del pokemon que se desea obtener. Dentro de esta función se usa la API de PokeAPI (`https://pokeapi.co/api/v2`) para hacer una consulta al servidor y solicitar la información del pokemon correspondiente. Si la respuesta es satisfactoria, se recupera la información en formato JSON y se devuelve la data (`pokemonData`).

### 3. crear la función renderPokemon

Ahora se debe crear otra función llamada `renderPokemon` que usa la función anterior (`fetchPokemon`) para obtener la información del pokemon que se desea mostrar. Esta función, se debe encargar de llena cada uno de los campos correspondientes (`pokemonName`, `pokemonNumber`, `pokemonImage`) con la información recibida de la API, para imagen animada se encuentra en la información recibida en `data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]`.

### 4. agregar event listeners

Por ultimo, se deben agregan tres event listeners, uno para el formulario de búsqueda (`form - event: submit`, recuerda agregar el `event.preventDefault()`, el submit de este formulario) y otro para los botones de navegación entre los pokemons (`buttonPrev - event: click`, `buttonNext - event: click`). El primero se activa al ingresar el nombre del pokemon deseado y presionar "enter", este debe ejecuta la función `renderPokemon` con el valor ingresado por el usuario. Mientras que en los botones de navegación (`buttonPrev`, `buttonNext`), se puede avanzar o retroceder en la lista de pokemons mostrados en la página usando la función `renderPokemon`.

### 🥳 ¡Buena suerte! 🥳
