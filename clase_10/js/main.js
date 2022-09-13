document.title = "Clase 10 | Comisión 38035";

const tituloPrincipal = document.getElementsByTagName("span")[0],
  h2 = document.getElementById("h2");

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
const almacenados = [];
tituloPrincipal.innerText = "Clase 10";
h2.innerText = "LocalStorage y json";

const btn = document.getElementById("btnIngresar"),
  checkbox = document.getElementById("checkbox"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  p = document.querySelector(".mensaje");
btn.value = "Registrar";

/* //localStorage
let msg = "Soy una cadena guardada en el localstorage";
localStorage.setItem("cadena", msg);
localStorage.setItem("numero", 90);
localStorage.setItem("esValido", true);

let mensaje = localStorage.getItem("cadena");
let numero = localStorage.getItem("numero");
let esValido = localStorage.getItem("esValido");
console.log(mensaje);
console.log(numero);
console.log(esValido);

//sessionStorage

sessionStorage.setItem("seleccionados", [1, 2, 3, 4]);
sessionStorage.setItem("esValido", false);
sessionStorage.setItem("correo", "dani@mail.com");

let seleccionados = sessionStorage.getItem("seleccionados").split(',');
let valido = sessionStorage.getItem("esValido") == true;
let correo = sessionStorage.getItem("correo");

console.log(typeof seleccionados);
console.log(seleccionados);
console.log(typeof valido);
console.log(valido);
console.log(typeof correo);

for (let index = 0; index < sessionStorage.length; index++) {
  let clave = sessionStorage.key(index);
  console.log("Clave: "+ clave);
  console.log("Valor: "+ sessionStorage.getItem(clave));
}

localStorage.removeItem("esValido");
sessionStorage.removeItem("esValido");

localStorage.clear();
 */

/* const serv = { nombre: "pedicuria", precio: 2500 };
let servJson = JSON.stringify(serv);

localStorage.setItem("servicio", servJson);
console.log(servJson);
console.log(typeof servJson);
console.log(typeof serv);

const deJsonAObj = JSON.parse(localStorage.getItem("servicio"));
console.log(deJsonAObj); */

/* localStorage.setItem('servicios', JSON.stringify(servicios))

console.log(JSON.parse(localStorage.getItem("servicios")));

let desdeLS= JSON.parse(localStorage.getItem("servicios"))

 let finded = desdeLS.filter(el=>{
  let encontrado = el.nombre == "manicura";
  
  return encontrado
})

almacenados.push(finded)
console.log(almacenados); */

function guardar(valor) {
  let user = { username: email.value, password: password.value };

  if (valor === "sessionStorage") {
    sessionStorage.setItem("user", JSON.stringify(user));
  }
  if (valor === "localStorage") {
    localStorage.setItem("user", JSON.stringify(user));
  }
  return user;
}

function recuperarDatos(datos) {
  if (datos) {
    email.value = datos.username;
    password.value = datos.password;
  }
}

recuperarDatos(JSON.parse(localStorage.getItem("user")));

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkbox.checked) {
    guardar("localStorage");
  } else {
    guardar("sessionStorage");
  }
});
