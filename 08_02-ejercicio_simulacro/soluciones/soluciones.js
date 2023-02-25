//! Pedir 3 palabras al usuario
//!         1 palabra 2ª letra
//!         2 palabra su tamaño
//!         3 palabra vocales posiciones impares
var palabra1 = prompt("1");
var palabra2 = prompt("2");
var palabra3 = prompt("3");

var letras = "";

//EJERCICIO 01
console.log(palabra1[1]);

//EJERCICIO 02
console.log(palabra2.length);

//EJERCICIO 03
for (i = 0; i < palabra3.length; i = i + 2) {
  switch (palabra3[i]) {
    case "a":
    case "A":
    case "e":
    case "E":
    case "i":
    case "I":
    case "o":
    case "O":
    case "u":
    case "U":
      letras += palabra3[i];
  }
}
console.log(letras);