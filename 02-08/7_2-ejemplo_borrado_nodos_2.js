function ejecutar() {
  // Obtenemos el elemento
  var lis = document.getElementsByName("li");
  var li = lis[lis.length - 1];
  // Obtenemos el padre de dicho elemento
  var padre = li.parentNode;
  // Eliminamos el hijo (li) del elemento padre
  padre.removeChild(li);
}
