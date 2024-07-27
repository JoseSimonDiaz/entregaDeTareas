// Tarea para el fin de semana:

// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

//Datos de entrada: pedir 2 numeros
//Proceso: De los numeros pedidos, calcular cual es el numero mayor
//Datos de salida: el numero mayor

let numero1 = parseFloat(prompt("Escribir el primer número(1-2):"));
let numero2 = parseFloat(prompt("Escribir el segundo número(2-2):"));
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
let sum = 0;

while (true) {
    let input = prompt("INGRESA UN NUMERO:");

    if (input === null) {  // El usuario ha pulsado "Cancelar"
        break;
    }

    let number = parseFloat(input);

    if (isNaN(number)) {
        alert("Por favor, introduce un número válido.");
    } else {
        sum += number;
    }
}

alert(`La suma total de los números ingresados es: ${sum}`);

// El verdulero de la esquina necesita una aplicación donde según la fruta que ingrese le diga el precio por kilo
const precioFrutas = {
  uvas: 30,
  manzana: 10,
  banana: 5,
  sandia: 15,
  pera: 8,
  mandarina: 9,
  naranja: 9
};

while (true) {
  let fruta = prompt("¿Qué fruta quiere llevar?");

  if (fruta === null) {  
    break;
  }

  fruta = fruta.toLowerCase();

  if (precioFrutas[fruta] !== undefined) {
    alert(`El precio por kilo de ${fruta} es de$${precioFrutas[fruta]}`);
  } else {
    alert("No nos queda de momento");
  }
}



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

let letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

while (true) {
    let pedirDNI = prompt("Introduce un número de DNI (entre 0 y 99999999):");

    if (pedirDNI === null) {
        break;
    }
    
    let DNI = parseInt(pedirDNI);

    if (isNaN(DNI) || DNI < 0 || DNI > 99999999) {
        alert("Introduce un valor de DNI válido.");
    } else {
        let resto = DNI % 23;
        let letra = letrasDNI[resto];
        alert(`El número de DNI ${DNI} corresponde a la letra ${letra}.`);
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
for(let i = 1; i<= 500; i++){
    let valor = `${i}`

   let multiploDe4 = i % 4 === 0;
   let multiploDe9 = i % 9 === 0;

if(multiploDe4){
     valor += `- Es multiplo de 4`
}else if(multiploDe9){
     valor += `- Es multiplo de 9`
}

console.log(valor);

}