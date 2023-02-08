/* EJEMPLO 1
// Forma larga
var parrafos = document.getElementsByTagName("p");
var primerParrafo = parrafos[0];
var enlacesPrimerP = primerParrafo.getElementsByTagName("a");

// Forma abreviada
var enlacesPrimerP = document.getElementsByTagName("p")[0].getElementsByTagName("a");


function ejecutar() { 
    var parrafoElegido = window.prompt (" Seleccione Párrafo (1,2,3): "); 
    var parrafo = document.getElementById (parrafoElegido); 
    document.write (parrafo.innerHTML); // Escribimos directamente dentro del body (hay que usar innerHTML)
}

*/

function ejecutar() { 
    var texto = prompt(" Escriba el texto del párrafo: "); 
    var etiqueta = document.createElement("p"); 
    var contenido = document.createTextNode (texto); 
    etiqueta.appendChild (contenido); //.apprendChild lo coloca después del último elemento del body
    document.body.appendChild(etiqueta); 
} 