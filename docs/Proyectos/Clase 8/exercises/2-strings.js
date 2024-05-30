// a
var textoA = "Hola soy pablo!";
var textoMayusculas = textoA.toUpperCase();
console.log("A: Texto en mayúsculas: " + textoMayusculas);

// b
var textoB = "PabloHernandez";
var primeros5Caracteres = textoB.substring(0, 5);
console.log("B: Primeros 5 caracteres: " + primeros5Caracteres);

// c
var textoC = "Pablo Hernandez";
var ultimos3Caracteres = textoC.substring(textoC.length - 3);
console.log("C: Últimos 3 caracteres: " + ultimos3Caracteres);

// d
var textoD = "hErNANDEZ";
var capitalizado = textoD.substring(0, 1).toUpperCase() + textoD.substring(1).toLowerCase();
console.log("D: Texto capitalizado: " + capitalizado);

// e
var textoE = "Pablo Hernandez";
var posicionEspacio = textoE.indexOf(" ");
console.log("E: Posición del primer espacio en blanco: " + posicionEspacio);

// f
var textoF = "EscriTOrio eXTRAvagante";
var espacio = textoF.indexOf(" ");
var primeraPalabra = textoF.substring(0, espacio).toLowerCase();
var segundaPalabra = textoF.substring(espacio + 1).toLowerCase();

var primeraLetraMayuscula = primeraPalabra.substring(0, 1).toUpperCase() + primeraPalabra.substring(1);
var segundaLetraMayuscula = segundaPalabra.substring(0, 1).toUpperCase() + segundaPalabra.substring(1);

var resultadoFinal = primeraLetraMayuscula + " " + segundaLetraMayuscula;

console.log("F: Texto con las primeras letras en mayúscula: " + resultadoFinal);