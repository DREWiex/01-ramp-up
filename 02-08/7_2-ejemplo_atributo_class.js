function pintar() {
  var color = prompt("Inserta un color para pintar el primer div");
  var div = document.getElementsByClassName("clase1")[0];
  div.style = "background-color: " + color;
}