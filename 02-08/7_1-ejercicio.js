/*
Se solicita:
- Número de enlaces de la página
- Dirección a la que enlaza el penúltimo enlace
- Numero de enlaces que enlazan a http://prueba
- Número de enlaces del tercer párrafo
*/

// PART I

var enlaces = document.getElementsByTagName('a');
var count;

count = enlaces;
console.log(count)

// PART II

var penultimoEnlace = enlaces[6];
alert(penultimoEnlace.href);
console.log(penultimoEnlace);

// PART III

