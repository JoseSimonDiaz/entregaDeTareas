//Ejercicio 1
/*
Crea tres arrays de 5 números cada uno, luego escribe una función declarativa que reciba los tres arrays como parámetros y realice las siguientes tareas:
- Unir los tres arrays en un nuevo array llamado 'integrados'
- Ordenar el array de menor a mayor
- Crear un nuevo array que contenga todos los números del array 'integrados' que sean menores de 60.
*/
let array = [3, 657, 8756, 3454, 334];
let array1 = [5, 20, 50, 70, 100];
let array2 = [2, 15, 8, 60, 45];

function funcionArrays(array,array1,array2){

    let integrados = array.concat(array1, array2)
    integrados.sort((a, b) => a - b)

    let menoresA60 = integrados.filter(num => num < 60)
    return{
        integrados,
        menoresA60
    }
}

let resultados = funcionArrays(array, array1, array2);

console.log('Array integrado ordenado:', resultados.integrados);
console.log('Números menores de 60:', resultados.menoresA60);


//Ejercicio 2
/*
Cotizadoción Dolar
Escribe una función de flecha que reciba como parámetro un valor en dolar y cacule su valor en pesos argentinos. Modifica dicha función para que se pueda enviar como parámetro también el valor del dolar oficial para realizar el cálculo.
*/

let cotizacionTotalEnARS = (valorEnUSD, valorUSDOficial) => valorEnUSD * valorUSDOficial

let valorEnUSD = 100
let valorUSDOficial = 265

let valorEnARS = cotizacionTotalEnARS(valorEnUSD, valorUSDOficial)
console.log(`${valorEnUSD} USD son ${valorEnARS} ARS al valor oficial de ${valorUSDOficial} por dolar`);

//Ejercicio 3
/*
Escribe una función anónima que reciba una palabra o frase cómo parámetro y retorne cuantas vocales contiene.
*/

let funcionAnonima = function(palabraOFrase) {
    const VOCALES = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', 'á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú'];
    let vocalesEncontradas = [];

    for (let i = 0; i < palabraOFrase.length; i++) {
        let caracter = palabraOFrase.charAt(i);
        if (VOCALES.includes(caracter)) {
            vocalesEncontradas.push(caracter);
        }
    }

    return vocalesEncontradas.length;
}


let frase = "Hola, ¿cómo estás? Soy una frase :D";
let cantidadVocales = funcionAnonima(frase);
console.log(`La frase "${frase}" tiene ${cantidadVocales} vocales.`);

//Ejercicio 4
/*
Dado el siguiente texto:
"Érase una vez en el año 1976, en un pequeño garaje en Los Altos, California, donde dos jóvenes visionarios, Steve Jobs y Steve Wozniak, se unieron para cambiar el mundo de la tecnología para siempre. Estos dos amigos compartían una pasión por la electrónica y la informática, y estaban decididos a crear algo revolucionario.
Steve Wozniak, conocido cariñosamente como "Woz", era un genio autodidacta de la electrónica. Trabajaba en Hewlett-Packard, pero en su tiempo libre soñaba con construir una computadora personal. En ese entonces, las computadoras eran enormes, costosas y sólo accesibles para las grandes empresas y universidades. Pero Woz tenía una visión diferente: quería crear una computadora que cualquiera pudiera tener en su hogar.
Steve Jobs, en cambio, era el visionario y el hombre de negocios. Reconoció el potencial del proyecto de Woz y se propuso hacerlo realidad. Pero había un problema: no tenían dinero para fabricar la computadora. Jobs vendió su furgoneta Volkswagen y Wozniak vendió su calculadora científica HP-65 para reunir fondos. Con este dinero, compraron los componentes necesarios para construir el primer prototipo de su computadora."


Crear una función anónima que reciba el texto como parámetro y retorne la cantidad de veces que aparece la palabra 'computadora' en el mismo.
Luego usar dicha función para devolver en el navegador un mensaje que diga 'La palabra... aparece ... veces en el texto original'
*/
let texto = `Érase una vez en el año 1976, en un pequeño garaje en Los Altos, California, donde dos jóvenes visionarios, Steve Jobs y Steve Wozniak, se unieron para cambiar el mundo de la tecnología para siempre. Estos dos amigos compartían una pasión por la electrónica y la informática, y estaban decididos a crear algo revolucionario.
Steve Wozniak, conocido cariñosamente como "Woz", era un genio autodidacta de la electrónica. Trabajaba en Hewlett-Packard, pero en su tiempo libre soñaba con construir una computadora personal. En ese entonces, las computadoras eran enormes, costosas y sólo accesibles para las grandes empresas y universidades. Pero Woz tenía una visión diferente: quería crear una computadora que cualquiera pudiera tener en su hogar.
Steve Jobs, en cambio, era el visionario y el hombre de negocios. Reconoció el potencial del proyecto de Woz y se propuso hacerlo realidad. Pero había un problema: no tenían dinero para fabricar la computadora. Jobs vendió su furgoneta Volkswagen y Wozniak vendió su calculadora científica HP-65 para reunir fondos. Con este dinero, compraron los componentes necesarios para construir el primer prototipo de su computadora.`;

const buscarComputadora = function (textos) {
    return textos
      .split(" ")
      .filter((texto) => texto.toLowerCase().includes("computadora")).length;
};

console.log(buscarComputadora(texto));

document.write(
    `La palabra 'computadora' aparece ${buscarComputadora(texto)} veces en el texto original`
);

//Ejercicio 5
/*
Biblioteca
Diseña una función declarativa que reciba como parámetro un array y muestre la lista de sus elementos alfabéticamente y como si fuera una lista ordenada de html.
Declara un array de 10 elementos que contenga libros de cualquier categoría y úsalo como argumento de la función anterior.
Ejemplo de como debería verse en el navegador:
1 - Biografía de Stev Jobs
2 - Casa blanca
3 - ....
*/
const libros = [
    "Clean Code in Python",
    "JavaScript: The New Toys",
    "Programming Rust: Fast, Safe Systems Development",
    "C# 9.0 in a Nutshell: The Definitive Reference",
    "Real-World Software Development",
    "Learning Python",
    "Kotlin in Action",
    "The Pragmatic Programmer: 20th Anniversary Edition",
    "Introduction to Machine Learning with Python",
    "Python Crash Course, 2nd Edition"
];

function mostrarListaOrdenada(array) {
    document.write("<h3>Lista de Libros</h3>");

    array.sort();

    document.write("<ol>");
    array.forEach((item) => {
        document.write(`<li>${item}</li>`);
    });
    document.write("</ol>");
}

mostrarListaOrdenada(libros);