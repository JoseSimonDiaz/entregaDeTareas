// Tarea para el fin de semana:

// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

//Datos de entrada: pedir 2 numeros
//Proceso: De los numeros pedidos, calcular cual es el numero mayor
//Datos de salida: el numero mayor

let numero1 = parseFloat(prompt("Escribir el primer número:"));
let numero2 = parseFloat(prompt("Escribir el segundo número:"));
let numeroMayor = "";

if (isNaN(numero1) && isNaN(numero2)) {
  alert("Debes ingresar un número");
} else if ((numero1, numero2)) {
  if (numero1 > numero2) {
    numeroMayor = numero1;
  } else if (numero2 > numero1) {
    numeroMayor = numero2;
  }
}

console.log(`El numero mayor es: ${numeroMayor}`);

// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

//Datos de entrada: pedir un numero
//Proceso: Del numero recibido, ver si es divisible por: 2,3,5 o 7
//Datos de salida: el numero

let pedirNumero = parseFloat(prompt("Escribe un número:"));
let numeroDivisible = "";

if (pedirNumero % 2 === 0) {
  console.log(`${pedirNumero} es divisible por 2`);
} else if (pedirNumero % 3 === 0) {
  console.log(`${pedirNumero} es divisible por 3`);
} else if (pedirNumero % 5 === 0) {
  console.log(`${pedirNumero} es divisible por 5`);
} else if (pedirNumero % 7 === 0) {
  console.log(`${pedirNumero} es divisible por 7`);
}

// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

//Datos de entrada: solicitar la edad
//Proceso: si la edad es mayor a 18 mostrar un msj, si edad no es un numero valido indicarlo en un msj
//Datos de salida: mensaje

let solicitarEdad = parseFloat(prompt("Ingresar tu edad:"));

if (isNaN(solicitarEdad)) {
  console.log("Ingresa un número valido");
} else if (solicitarEdad >= 18) {
  console.log(
    "Tienes la edad permitida para manejar, Puedes circular con precaución"
  );
} else {
  console.log("No tenes la edad para manejar");
}

// Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

//Datos de entrada: Solicitar una nota del 0 al 10
//Proceso: En base a la nota ingresada: mostrar la calificacion con un msj si es en 0-2 debe decir:"Muy deficiente". de 3-4:"Insuficiente". De 5-6:"Suficiente". 7:"Bien". De 8-9:"Notable". De 10:"Sobresaliente"
//Datos de salida: en base a la nota ingresada, un msj

let nota = parseFloat(prompt("Ingresa tu nota:"));

if (nota >= 0 && nota <= 2) {
  alert(`sacaste: ${nota}, muy deficiente`);
} else if (nota >= 3 && nota <= 4) {
  alert(`sacaste: ${nota}, Insuficiente`);
} else if (nota >= 5 && nota <= 6) {
  alert(`sacaste: ${nota}, Suficiente`);
} else if (nota == 7) {
  alert(`sacaste: ${nota}, Bien`);
} else if (nota >= 8 && nota <= 9) {
  alert(`sacaste: ${nota}, Notable`);
} else if (nota == 10) {
  alert(`sacaste: ${nota}, Sobresaliente`);
}

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

//Datos de entrada: Solicitar un numero
//Procesos: si el numero ingresado esta ingresado es 0-10, mostrar un msj de "Número erróneo". Pero, si el numero ingresado no es valido mostrar un msj de "Introduce un número valido"
//Datos de salida; Un mensaje

let pedirUnNumero = parseFloat(prompt("Ingresar un número: "));

if (isNaN(pedirNumero)) {
  console.log("Introduce un número valido");
} else if (pedirNumero < 0 || pedirNumero > 10) {
  console.log("número erróneo");
}
// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

// El verdulero de la esquina necesita una aplicación donde según la fruta que ingrese le diga el precio por kilo

// 1)- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
// El algoritmo para calcular la letra del dni es el siguiente :
// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
// Ejemplo:
// Input:  40773821
// Output: ‘L’
let dni = 0;
let resto = 0;
let letraDni = " ";

while (true) {
  dni = prompt("Ingrese un numero de dni(Sin puntos)");
  if (
    dni.indexOf(".") !== -1 ||
    isNaN(dni) ||
    dni.indexOf(" ") !== -1 ||
    dni > 99999999 ||
    dni <= 0
  ) {
    alert("Error debe ingresar un numero");
  } else {
    resto = +dni % 23;

    switch (resto) {
      case 0:
        letraDni = "T";
        break;
      case 1:
        letraDni = "R";
        break;
      case 2:
        letraDni = "W";
        break;
      case 3:
        letraDni = "A";
        break;
      case 4:
        letraDni = "G";
        break;
      case 5:
        letraDni = "M";
        break;
      case 6:
        letraDni = "Y";
        break;
      case 7:
        letraDni = "F";
        break;
      case 8:
        letraDni = "P";
        break;
      case 9:
        letraDni = "D";
        break;
      case 10:
        letraDni = "X";
        break;
      case 11:
        letraDni = "B";
        break;
      case 12:
        letraDni = "N";
        break;
      case 13:
        letraDni = "J";
        break;
      case 14:
        letraDni = "Z";
        break;
      case 15:
        letraDni = "S";
        break;
      case 16:
        letraDni = "Q";
        break;
      case 17:
        letraDni = "V";
        break;
      case 18:
        letraDni = "H";
        break;
      case 19:
        letraDni = "L";
        break;
      case 20:
        letraDni = "C";
        break;
      case 21:
        letraDni = "K";
        break;
      case 22:
        letraDni = "E";
        break;
      default:
        break;
    }
    alert(`La letra asignada al dni es${letraDni}`)
  }
}

// 2)- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-
// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10
