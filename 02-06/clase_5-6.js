// OPERADORES BÁSICOS

// EJEMPLOS DE "IGUALDAD"

var n = 9;
var n2 = 9;
console.log(n == n2); // Devuelve true porque son iguales los contenidos de las variables
var n3 = 109;
console.log(n == n3); // Devuelve false porque no son iguales los contenidos de las variables
var n4 = '9';
console.log(n == n4);// Devuelve true porque son iguales los contenidos de las variables aunque no los tipos
var n5 = 9.0;
console.log(n == n5);// Devuelve true porque son iguales los contenidos de las variables aunque no los tipos


// EJEMPLOS DE "IGUALDAD ESTRICTA"

var n = 9;
var n2 = 9;
console.log(n === n2); // Devuelve true porque son iguales los contenidos de las variables y los tipos
var n3 = 109;
console.log(n === n3); // Devuelve false porque no son iguales los contenidos de las variables
var n4 = '9';
console.log(n === n4);// Devuelve false porque son iguales los contenidos de las variables aunque no los tipos
var n5 = 9.0;
console.log(n === n5);// Devuelve true porque son iguales los contenidos de las variables y los tipos


// EJEMPLOS DE "DESIGUALDAD"

var n = 9;
var n2 = 9;
console.log(n != n2); // Devuelve false porque son iguales los contenidos de las variables
var n3 = 109;
console.log(n != n3); // Devuelve true porque no son iguales los contenidos de las variables
var n4 = '9';
console.log(n != n4);// Devuelve false porque son iguales los contenidos de las variables aunque no los tipos
var n5 = 9.0;
console.log(n != n5);// Devuelve false porque son iguales los contenidos de las variables aunque no los tipos


// EJEMPLOS DE "DESIGUALDAD ESTRICTA"

var n = 9;
var n2 = 9;
console.log(n !== n2); // Devuelve false porque son iguales los contenidos de las variables y los tipos
var n3 = 109;
console.log(n !== n3); // Devuelve true porque no son iguales los contenidos de las variables
var n4 = '9';
console.log(n !== n4);// Devuelve true porque no son iguales los tipos de las variables
var n5 = 9.0;
console.log(n !== n5);// Devuelve false porque son iguales los contenidos de las variables y los tipos


// EJEMPLOS DE "MAYOR Y MENOR"

var a = 9;
var b = 8;
console.log(a>b); //Devuelve true porque a es mayor que b
var c = 9;
console.log(a>=c); //Devuelve true porque a es igual que c

const cadena = "Hola";
const cadena2 = "Adios";
console.log(cadena > cadena2); //Devuleve true porque "Hola" es mayor alfabéticamente hablando
console.log(cadena < cadena2);


// OPERADORES LÓGICOS

// EJEMPLO "NOT"

var n = 9; 
console.log(!(n==9)); //Devuelve false porque la comparación da true y lo negamos
console.log(!false); //Devuelve true porque estamos negando false


// EJEMPLOS "AND"

var n = 9;
console.log(n == 9 && n > 3); //Devuelve true porque las dos comparaciones dan true y el AND entre dos true es true
console.log(n == 9 && n < 3); //Devuelve false porque n no es menor que 3


// EJEMPLOS "OR"

var n = 9;
console.log(n == 9 || n > 3); //Devuelve true porque las dos comparaciones dan true y el OR entre dos true es true
console.log(n == 9 || n < 3); //Devuelve true porque la primera comparación es true
console.log(n == 7 || n < 3); //Devuelve false porque las dos son false y el OR entre dos false es