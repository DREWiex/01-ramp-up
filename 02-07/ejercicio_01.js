// EJERCICIO 01

function ejercicio1(){

var n1 = parseInt(prompt("Introduce un números"));
console.log(n1);
var n2 = parseInt(prompt("Introduce otro número diferente"));
console.log(n2);
var n3 = parseInt(prompt("Introduce un último número distinto de los otros dos"));
console.log(n3);

if (n1 === n2 && n2 === n3) {
  alert("Error al introducir datos");
} else {
  if (n1 < n2 && n1 < n3) {
    alert(n1 + " es el menor de todos los números indicados");
  } else {
    if (n2 < n3 && n2 < n1) {
      alert(n2 + " es el menor número de todos");
    } else {
      if (n3 < n2 && n3 < n1) {
        alert(n3 + " es el menor número de todos"); //se puede evitar el alert, asumiendo que solo queda esta opción y es true.
      }
    }
  }
}

}


// EJERCICIO 02

const EJERCICIO2 = () => {

var frase = prompt("Indica una frase: ");
console.log(frase);
var letra = prompt("Indica una letra: ");
console.log(letra);
var cont = 0

for (let i = 0; i < frase.length; i++) {
   if (frase[i] == letra) {
    cont++
   }
}

alert(`La letra ${letra} se repite ${cont} veces.`)

}


// EJERCICIO 03

function ejercicio3(){

var n1 = parseFloat(prompt("Por favor, escriba un número"));
console.log(n1);
var n2 = parseFloat(prompt("Gracias, por favor, escriba otro número"));
console.log(n2);
var sumrest = prompt("Escribe '+' si quieres sumarlos, o escribe '-' si quieres restarlos");
console.log(sumrest);
var result;

if (sumrest == '+') {
    result = (n1+n2);
    alert(result);
} else {
    (sumrest == '-');
    result = (n1-n2);
    alert(result);
}

console.log(result);

}


// EJERCICIO 04

const EJERCICIO4 = () => {

const USER = "usuario";
const PASS = "password";
let attempts = 3;
let inputuser;
let inputpass;

do {
  inputuser = prompt("Escribe tu usuario");
  inputpass = prompt("Escribe tu contraseña");
  attempts--;
  if(inputuser == USER && inputpass == PASS) {
    alert("Acceso concedido");
  } else {
    alert("Acceso denegado");
  }
} while ((inputuser != USER || inputpass != PASS) && attempts > 0);

if(attempts == 0){
    alert("Intentos agotados")
}

}


// EJERCICIO 05


// EJERCICIO 06

