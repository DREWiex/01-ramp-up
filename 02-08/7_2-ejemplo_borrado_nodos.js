function ejecutar() {
  // Obtenemos el elemento
  var li =
    document.getElementsByName("li")[
      document.getElementsByName("li").length - 1
    ];
  // Obtenemos el padre de dicho elemento
  var padre = li.parentNode;
  // Eliminamos el hijo (li) del elemento padre
  padre.removeChild(li);
}