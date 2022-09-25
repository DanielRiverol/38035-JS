document.title = "Clase 12 | Comisión 38035";

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
tituloPrincipal.innerText = "Clase 12";
h2.innerText = "Operadores avanzados";

const btn = document.getElementById("btnIngresar"),
  checkbox = document.getElementById("checkbox"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  p = document.querySelector(".mensaje");
btn.value = "Registrar";

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
  /*  if (checkbox.checked) {
    guardar("localStorage");
  } else {
    guardar("sessionStorage");
  } */
  checkbox.checked ? guardar("localStorage") : guardar("sessionStorage");
});

//sugar syntax
let precio = 100;
/* if (precio > 100) {
  console.log("Vale mas de 100");
} else {
  console.log("es menor a 100");
} */
//operador ternario | condicion ? true : false

//precio > 100 ? console.log("Vale mas de 100") : console.log("es menor a 100");
let permiso;

const usuario = {
  nombre: "pepe",
  edad: 19,
};

if (usuario.edad >= 18) {
  permiso = true;
} else {
  permiso = false;
}

/* if (permiso) {
  console.log("Puede entrar");
} else {
  console.log("NO Puede entrar");
}

usuario.edad >= 18 ? (permiso = true) : (permiso = false);

permiso ? console.log("Puede entrar") : console.log("NO Puede entrar"); */

//AND
/* const carrito = [];
if (carrito.length === 0) {
  console.log("el carrito esta vacio");
}

carrito.length === 0 && console.log("el carrito esta vacio"); */

const registrar = usuario.edad >= 18 && new Date();
/* console.log(registrar); */

//op OR ||

const usuarioNulo = null;

console.log(usuario?.nombre || "El usuario no existe");
console.log(usuarioNulo?.nombre || "El usuario no existe");

/* const usuarios= recuperarDatos(JSON.parse(localStorage.getItem("user")))||[]

console.log(usuarios); */
//console.log("Fin del script");

//destructuring
const usuario3 = {
  nombre: "Luis",
  direc: " calle Falsa 123",
  contacto: {
    tel: "123456789",
    movil: "12345678",
  },
};
/* let nombre= usuario3.nombre;
let direccion= usuario3.direc
let contact= usuario3.contacto */
/* console.log(nombre);
console.log(direccion);
console.log(contact); */

/* const { nombre, direc, contacto } = usuario3; */

/* console.log(nombre);
console.log(direc);
console.log(contacto); */
/* 
const desectructurar= (obj)=>{
  const { nombre, direc, contacto }= obj;
  console.log(nombre, direc, contacto);
} */
const desectructurar = ({ nombre, direc, contacto }) => {
  console.log(nombre, direc, contacto);
};

desestructurar(usuario3);
//spread operator ...
const nombres = ["Juan", "Pedro", "Maria"];

const num = [1, 22, 3, 7, 6, 8, 0, -6];
console.log(...nombres);
console.log(Math.min(...num));

const todoJunto = [...nombres, ...num];
console.log(todoJunto);
