// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  addElementClass();

  deletePairLi();

  createList2();

  disableButton5();
}

function addElementClass() {
  let spanSelect = document.querySelector(".selected");
  let parentEle = spanSelect.parentElement.parentElement;
  let nodeList = parentEle.childNodes;

  let counter = 1;
  for (var i = 0; i < nodeList.length; i++) {
    if (nodeList[i] instanceof HTMLLIElement) {
      let il = nodeList[i].children;
      il[0].classList.add("element-" + counter);
      counter++;
    }
  }
}

function deletePairLi() {
  let spanSelect = document.querySelector(".selected");
  let parentEle = spanSelect.parentElement.parentElement;
  let nodeList = parentEle.childNodes;

  nodeList[3].remove();
  nodeList[6].remove();
}

function createList2() {
  let list2 = document.getElementById("list2");

  //Creacion de los botones con la misma jerarquia y clases.
  let button1 = document.createElement("BUTTON");
  button1.classList.add("element-1");
  button1.innerHTML = "texto ejemplo 1";

  let button3 = document.createElement("BUTTON");
  button3.classList.add("element-3");
  button3.innerHTML = "texto ejemplo 3";

  let button5 = document.createElement("BUTTON");
  button5.classList.add("element-5");
  button5.innerHTML = "texto ejemplo 5";
  button5.setAttribute("id", "button5");

  //Creacion de las etiquetas li con los botones y agregacion a las li al ul.
  let li1 = document.createElement("LI");
  li1.appendChild(button1);
  list2.appendChild(li1);

  let li3 = document.createElement("LI");
  li3.appendChild(button3);
  list2.appendChild(li3);

  let li5 = document.createElement("LI");
  li5.appendChild(button5);
  list2.appendChild(li5);
}

function disableButton5() {
  let btn5 = (document.getElementById("button5").disabled = true);
}
