// 1. filter
// El método filter crea un nuevo array con todos los elementos que pasan una prueba (función) que le proporcionamos.

// Ejemplo:
// javascript
// Copiar código
// // Array de números
// let numeros = [1, 2, 3, 4, 5, 6];

// // Filtrar los números mayores que 3
// let mayoresQueTres = numeros.filter(function(numero) {
//     return numero > 3;
// });

// console.log(mayoresQueTres); // Output: [4, 5, 6]
// Nota: En este ejemplo, filter crea un nuevo array con los números que son mayores que 3.

// 2. map
// El método map crea un nuevo array con los resultados de llamar a una función para cada elemento del array original.

// Ejemplo:
// javascript
// Copiar código
// // Array de números
// let numeros = [1, 2, 3, 4, 5];

// // Multiplicar cada número por 2
// let dobles = numeros.map(function(numero) {
//     return numero * 2;
// });

// console.log(dobles); // Output: [2, 4, 6, 8, 10]
// Nota: En este ejemplo, map crea un nuevo array con cada número multiplicado por 2.

// 3. reduce
// El método reduce aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un solo valor.

// Ejemplo:
// javascript
// Copiar código
// // Array de números
// let numeros = [1, 2, 3, 4, 5];

// // Sumar todos los números del array
// let suma = numeros.reduce(function(acumulador, numero) {
//     return acumulador + numero;
// }, 0);

// console.log(suma); // Output: 15
// Nota: En este ejemplo, reduce suma todos los números del array. El valor inicial del acumulador es 0.

// 4. forEach
// El método forEach ejecuta una función una vez por cada elemento del array.

// Ejemplo:
// javascript
// Copiar código
// // Array de números
// let numeros = [1, 2, 3, 4, 5];

// // Imprimir cada número en la consola
// numeros.forEach(function(numero) {
//     console.log(numero);
// });
// Nota: En este ejemplo, forEach ejecuta la función proporcionada una vez por cada número en el array y lo imprime en la consola.

// 5. find
// El método find devuelve el primer elemento del array que satisface la función de prueba proporcionada. Si ningún valor satisface la función de prueba, devuelve undefined.

// Ejemplo:
// javascript
// Copiar código
// // Array de números
// let numeros = [1, 2, 3, 4, 5];

// // Encontrar el primer número mayor que 3
// let mayorQueTres = numeros.find(function(numero) {
//     return numero > 3;
// });

// console.log(mayorQueTres); // Output: 4
// Nota: En este ejemplo, find devuelve el primer número mayor que 3.

// Resumen
// filter: Crea un nuevo array con los elementos que pasan una prueba.
// map: Crea un nuevo array con los resultados de llamar a una función para cada elemento.
// reduce: Reduce el array a un solo valor aplicando una función a un acumulador y a cada valor del array.
// forEach: Ejecuta una función una vez por cada elemento del array.
// find: Devuelve el primer elemento que pasa una prueba.