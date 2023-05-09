# 🤓 Reto Objetos:

Crear un sistema para manejar las ventas de una tienda de productos electrónicos utilizando varias funciones en vanilla javascript.

## 💾 Estructura del objeto:

Dado un objeto llamado `tienda` que contiene el nombre de la tienda (`string`), su dirección (`string`), un array de productos (`[{..}, {..}, ..]`).

- Cada producto debe ser un objeto con los siguientes campos: nombre (`string`), descripción (`string`), precio (`number`) y stock (`number`), donde el nombre es único para cada producto.

```js
const tienda = {
  nombre: "tu tienda",
  direccion: "av tu dirección 123",
  productos: [
    {
      nombre: "producto 1",
      descripcion: "esta es la descripción del producto 1",
      precio: 999,
      stock: 10,
    },
  ],
};
```

## 📈 Funciones a implementar:

1. Crear un método en el objeto `tienda` llamado `agregarProducto`que permita agregar mas productos al array de productos.

2. Crear un método en el objeto `tienda` llamado `obtenerProducto` que reciba como parámetro el nombre del producto y devuelva el objeto correspondiente.

3. Crear un método en el objeto `tienda` llamado `realizarVenta` que reciba como parámetros el nombre del producto y la cantidad vendida, y actualice la cantidad de stock correspondiente.

4. Crear una función llamada `eliminarProducto` que reciba como parámetro el nombre del producto y lo elimine de la lista de productos.

5. Utilizar el método `Object.create` para crear un nuevo objeto llamado `tiendaOnline` que herede las propiedades y métodos del objeto `tienda`. El nuevo objeto debe tener una llave nueva llamada `online` y que este defecto en `true` ademas de esto crear un método adicional llamado `agregarStock` que reciba como parámetros el nombre del producto, la cantidad de stock a sumar y actualice la cantidad de stock correspondiente.

6. Utilizar el método `Object.keys` para obtener un array con los nombres de todos los productos en stock de la `tiendaOnline`.

7. Utilizar el método `Object.values` para obtener un array con todas las cantidades de stock disponibles de la tiendaOnline.

## 👆🏻 Notas finales

si quieres realizar pruebas mientras resuelves los retos dentro de la carpeta principal de este repositorio `Reto_Object_Arrays` puedes ir a la carpeta del reto (en tu shell escribe `cd Reto_de_Objects`) y luego correr el comando `node objects.js` para ejecutar el código que tengas en tu reto.

### 🥳 ¡Buena suerte! 🥳
