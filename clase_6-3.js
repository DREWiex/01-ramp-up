// EJEMPLO 1

//Comprobar si el usuario acierta el 9

const n = 9;
var n2 = prompt("Inserta un número");
if (n == n2) {
  alert("Has acertado el número");
} else {
  alert("No has acertado el número");
}

// EJEMPLO 2

//Comprobar si el usuario acierta el 9 y si lo hace, si el 9 es múltiplo de 3

const n = 9;
var n2 = prompt("Inserta un número");
if (n == n2) {
  alert("Has acertado el número");
  if (n % 3 == 0) {
    alert("Es múltiplo de 3");
  }
} else {
  alert("No has acertado el número");
}

// EJEMPLO 3

//Comprobar si el usuario acierta el 9 y si el 9 es multiplo de 3 (a la vez)

const n = 9;
var n2 = prompt("Inserta un número");
if (n == n2 && n % 3 == 0) {
  alert("Has acertado el número y es multiplo de 3");
} else {
  alert("No has acertado el número");
}

// EJEMPLO 4

//Comprobar si el usuario acierta el 9 y si no lo acierta, si el número insertado es múltiplo de 3

const n = 9;
var n2 = prompt("Inserta un número");
if (n == n2) {
  alert("Has acertado el número");
} else {
  if (n2 % 3 == 0) {
    alert(
      "No has acertado el número, pero has insertado un número multiplo de 3"
    );
  }
}