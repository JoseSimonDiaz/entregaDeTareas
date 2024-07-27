// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
// Dificultad:  🟢
// alert("un mensaje")
// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
// Dificultad:  🟢
// document.write("Hello world")

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
// Dificultad:  🟢

// document.write(3+5)

// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
// Ejemplo: 
// input: Coder 
// Output: Hola Coder
// let saludo = prompt("Ingresa tu nombre de usuario:")
// console.log(`hola ${saludo}`)
// // Dificultad:  🟢
// // 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// // Nota: Tener en cuenta la siguiente función: parseInt
// let pedirNum1 = parseInt(prompt("Escribe un número;"))
// let pedirNum2 = parseInt(prompt("escribe otro numero"))
//     console.log(`el resultado es ${pedirNum1 + pedirNum2}`)
// 6.-Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Ejemplo: 
// input: 15 , 3
// Output: El 15 es el número más grande
// Dificultad:  🟢


// let numeroMayor = parseInt(prompt("Escribe un número;"))
// let numeroMenor = parseInt(prompt("Escribe un número;"))
// if (numeroMayor > numeroMenor) {
//     console.log("El numero mayor es: " + numeroMayor);
// } else if (numeroMenor > numeroMayor) {
//     console.log("El numero mayor es: " + numeroMenor);
//   }
  
  
// // 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo: 

// input: 15 , 3, 9
// Output: El 15 es el número más grande
// Dificultad:  🟢

// let numMayor = parseInt(prompt("Escribe un número;"))
// let numMayor_1 = parseInt(prompt("Escribe un número;"))
// let numMayor_2 = parseInt(prompt("Escribe un número;"))

// let mayorNum = Math.max(numMayor, numMayor_1, numMayor_2);
// console.log(`El numero mas grande es: ${mayorNum}`)
// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// Ejemplo: 

// input: 10
// input: 15
// Output: El 10 es divisible por 2.
// Output: El 15 no es divisible por 2.
// let numDivisible = parseInt(prompt("Escribe un num"))


// if(numDivisible % 2 === 0){
//     console.log(`${numDivisible} Es divisible por 2`)
// }else{
//     console.log(`${numDivisible} NO es divisible por 2`) 
// }

// Dificultad:  🟢🟡 
// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo:
// input: Hola mundo
// Output: oauo


// let pedirFrace = prompt("Escribe una frace")

// const VOCALES = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', 'á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú']

// let vocalesEncontradas = []

// for(let i = 0; i < pedirFrace.length; i++){
//    let frace = pedirFrace.charAt(i)
//    if(VOCALES.includes(frace)){
//     vocalesEncontradas.push(frace)
//    }
// }

// console.log(`Las vocales encontradas son: ${vocalesEncontradas.join(' ')}`)


// // 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// // Ejemplo: 
// // input: 20
// // Output: El 20 es divisible por 2.
// // Dificultad:  🟢🟡

// let numeroDivisible = parseInt(prompt("Pedir un numero"))
// let divisibles = [];

// if(!isNaN(numeroDivisible)){
// if(numeroDivisible % 2 === 0){
//   console.log(`El ${numeroDivisible} es divisible por 2`)


// }else if(numeroDivisible % 3 === 0){
//   console.log(`El ${numeroDivisible} es divisible por 3`)


// }else if(numeroDivisible % 5 === 0){
//    console.log(`El ${numeroDivisible} es divisible por 5`)


//  }else if(numeroDivisible % 7 === 0){
//    console.log(`El ${numeroDivisible} es divisible por 7`)


//  }
// }else{
//    console.warn("no ingresaste un numero")
// }

// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// Ejemplo: 
// input: 20
// input: 210
// Output: El 20 es divisible por 2 y por 5.
// Output: El 210 es divisible por 2, por 3, por 5 y por 7.

let persona = 13
let tutor = true

if(persona >= 18){
  console.log("Podes pasar mmi rai");
}else if(tutor){
       console.log("Sos menor, pero como venis con un tutor podes pasar");
}else{
  console.log("NO podes pasar mi ray");
}
