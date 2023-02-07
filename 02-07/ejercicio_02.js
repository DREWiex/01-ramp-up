// EJERCICIO 02 - PARTE I

function cifras(){
    let num = prompt("Indica un número entero:"); // ¿Por qué el 'parseInt' arroja 'undefined' en el console.log?
    console.log(num.length);
}

//cifras();

// EJERCICIO 02 - PARTE II

function asteriscos() {
  let num = prompt("Indica un número:");
  let cont = [];

  for (let i = 0; i < num; i++) {
    cont[i] = "*";
    alert(cont);
    console.log(cont);
  }
}

asteriscos();

// EJERCICIO 02 - PARTE III

