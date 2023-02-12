function ejecutar() {
  var num = prompt(" Elija la tabla de Multiplicar: ");
  // Defino la etiqueta que se va a presentar
  var etiqueta = document.createElement("p");
  // Defino el contenido de la etiqueta (aquí, la tabla de Multiplicar)
  var textoNodo = document.createTextNode(multiplicar(num));
  // Completo el nodo agregando el contenido a la etiqueta
  etiqueta.appendChild(textoNodo); // El nodo completo
  // Añado el nodo (etiqueta+contenido) al parrafo
  document.getElementById("tablas").appendChild(etiqueta);
}
function multiplicar(tabla) {
  var cadena = "";

  for (let i = 1; i <= 10; i++) {
    cadena = cadena + i + " x " + tabla + " = " + tabla * i + "; ";
  }
  return cadena;
}
// Borrado
function borrar() {
  document
    .getElementById("tablas")
    .removeChild(document.getElementById("tablas").lastChild);
}