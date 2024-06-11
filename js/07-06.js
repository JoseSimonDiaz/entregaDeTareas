//Ejercicios de String y Números

//1 - Crea una variable con tu nombre, otra con tu apellido y concaténalas con el mensaje de bienvenida: 'Bienvenido al evento' usando template string.
let nombre = "José Simón";
let apellido = "Díaz";
console.log(`Bienvenido al evento ${nombre} ${apellido}`);
//2 - Usando métodos de String quita los espacios de adelante y de atrás del siguiente texto: '              Había una vez un pequeño programador junior       '
let string = "              Había una vez un pequeño programador junior       ";
console.log(string.trim());
//3 - Convierte a mayúsculas tu nombre y apellido usando las variables definidas en el punto 1
console.log(
  `Bienvenido al evento ${nombre.toUpperCase()} ${apellido.toUpperCase()}`
);
//4  - Crea un programita que le pida al usuario que ingrese un texto, convierte dicho texto en mayúsculas y muestra en consola cuantos caracteres tiene el texto recibido usando propiedades de los String.
let ingreseTexto = prompt("Ingrese un texto:");
let cambiarAMayusculas = ingreseTexto.toUpperCase();
let caracteres = cambiarAMayusculas.length;
console.log(`su texto convertido a mayúsculas tiene ${caracteres} caracteres.`);
//5 - Crea un programa que solicite al usuario ingresar un número con 5 decimales, almacenar dicho número en una variable asegurándose que sea de tipo number. Mostrar en consola lo siguiente:
let ingreseNumero = prompt("Ingresa un numero de 5 decimales");
let numeroGuardado = parseFloat(ingreseNumero).toFixed(5);
//- El número redondeado a su mayor valor
console.log(`número redondeado a su maximo valor: ${Math.ceil(numeroGuardado)}`)
//- El número redondeado a su menor valor
console.log(`número redondeado a su minimo valor ${Math.floor(numeroGuardado)}`)
//- El número original multiplicado por 3
console.log(`número multiplicado por 3 ${numeroGuardado * 3}`)
//- El resto del número dividido por 2
console.log(`el resto del numero divido por 2 ${numeroGuardado % 2}`)


