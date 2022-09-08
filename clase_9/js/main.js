document.title = "Clase 9 | Comisión 38035";

const tituloPrincipal = document.getElementsByTagName("span")[0],
  h2 = document.getElementById("h2"),
  parrafo = document.getElementsByTagName("p"),
  parrafoClases = document.getElementsByClassName("parrafo"),
  contenedor = document.getElementById("contenedor"),
  input = document.getElementById("ingreso");

const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];
tituloPrincipal.innerText = "Clase 9";
h2.innerText = "Eventos";
//primera manera
h2.addEventListener("click", () => {
  console.log("Click sobre h2 con addEventListener");
});
// segunda manera de declara eventos
/* h2.onclick = () => {
  console.log("Click sobre h2 con onclick");
}; */
const contador = document.querySelector("#contador"),
  sumar = document.querySelector("#sumar"),
  restar = document.querySelector("#restar");
const cajasDeTexto = document.querySelectorAll("input");
//console.log(cajasDeTexto);
//solucion
/* let count = 0;
function cambio(num) {
  count = count + num;
  contador.innerText = count;
}

sumar.addEventListener("click", () => {
  cambio(1);
});
restar.addEventListener("click", () => {
  cambio(-1);
}); */

function cambiarColor() {
  h2.style.color = "blue";
}
/* parrafo[0].addEventListener("mouseleave", cambiarColor);
h2.addEventListener("mousemove", cambiarColor); */

input.addEventListener("keyup", () => {
  parrafo[0].innerText = input.value;
});

//evento change
/* cajasDeTexto[0].addEventListener('change',()=>{
  console.log('cambio');
})
cajasDeTexto[1].addEventListener('change',()=>{
  console.log('cambio');
})
cajasDeTexto[2].addEventListener('change',()=>{
  console.log('cambio');
}) */

const btnSearch = document.querySelector("#btnSearch");

function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}

btnSearch.addEventListener("click", () => {
  let resultado = filtrarServicio(servicios, input.value.toLowerCase());
  console.log(resultado);
  //corregir y encontrar el bug
  parrafo[0].innerText = `${resultado[0].nombre}`;
});
/* input.addEventListener("input", () => {
  let resultado = filtrarServicio(servicios, input.value.toLowerCase());
  console.log(resultado);
}); */

const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  
  let formulario= e.target
  console.log(e.target);
  console.log(formulario.children[0].value);
  console.log(formulario.children[1].value);
  
})