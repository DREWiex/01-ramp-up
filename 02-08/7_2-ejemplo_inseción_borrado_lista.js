function insertar() {
  var textoNodo = window.prompt(" Escriba el texto del nuevo elemento: ");
  var etiqueta = document.createElement("li");
  var contenido = document.createTextNode(textoNodo);
  etiqueta.appendChild(contenido);

  document.getElementById("miLista").appendChild(etiqueta);
}
function borrar() {
  miLista.removeChild(document.getElementById("miLista").lastChild);
}