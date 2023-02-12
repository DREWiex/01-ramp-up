var parrafos;

function ejecutar() {
  parrafos = document.getElementsByName("especial");
  for (var i = 0; i < parrafos.length; i++) {
    var parrafo = parrafos[i].innerHTML;
    window.alert(parrafo);
  }
}