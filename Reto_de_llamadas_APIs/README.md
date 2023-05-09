# 🤓 Reto Arrays:

Dado un array de objetos que representan la base de datos de un concesionario y los carros que tiene a disposición (podrás ver estos datos en `carDataBase.js`), crear una serie de funciones que manipulen este array y me devuelvan ciertos valores específicos. Para resolver este reto, debes utilizar los métodos map, reduce, slice, filter, find, pop y push.

## 💾 Estructura de los objetos del array:

Cada objeto tendrá las siguientes propiedades:

- car_name: String,
- cost: Number,
- model: String,
- manufacturer: String,
- color: String,
- num_doors: Number,
- cylinder_capacity: Number,
- fuel_type: String,
- transmission: String,
- drive_type: String,
- horsepower: Number,

## 📈 Funciones a implementar:

### 1. Obtener el costo total de los carros en inventario:

Debe tomar el array de carros (`carDataBase.js`) y devolver el valor total suma de todos los precios (`cost`) de los carros.

### 2. Obtener el promedio de los precios de los carros pares:

Debe tomar unicamente las posiciones pares del array (ej: `array[0], array[2], array[4]`) de productos y devolver el promedio de los precios (`cost`) de los carros seleccionados.

### 3. Obtener los carros Híbridos:

Debe tomar el array de carros (`carDataBase.js`) y seleccionar todos los carros cuyo combustible (`fuel_type`) sea de tipo híbrido (`Hybrid`), y devolver un nuevo array con sólo los productos que pertenecen a esa categoría.

### 4. Obtener el producto más caro:

Debe tomar el array de carros (`carDataBase.js`) y devolver el objeto que representa el carro más caro.

### 5. Agregar un nuevo producto:

Debe tomar el array de carros (`carDataBase.js`) y agregar un nuevo objeto al carro cons toda la información requerida por la base de datos.

- car_name: String,
- cost: Number,
- model: String,
- manufacturer: String,
- color: String,
- num_doors: Number,
- cylinder_capacity: Number,
- fuel_type: String,
- transmission: String,
- drive_type: String,
- horsepower: Number,

### 6. Eliminar el carro mas económico:

Debe tomar el array de carros (`carDataBase.js`) y eliminar el carro con el valor mas económico (`cost`) del array.

## 👆🏻 Notas finales

Ten en cuenta que debes crear una **función para resolver cada uno de los puntos**.

si quieres realizar pruebas mientras resuelves los retos dentro de la carpeta principal de este repositorio `Reto_Object_Arrays` puedes ir a la carpeta del reto (en tu shell escribe `cd Reto_de_Arrays`) y luego correr el comando `node arrays.js` para ejecutar el código que tengas en tu reto.

### 🥳 ¡Buena suerte! 🥳
