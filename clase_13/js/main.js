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
function saludo() {
  //logica borrar
  Swal.fire("Hola");
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  /*  if (checkbox.checked) {
    guardar("localStorage");
  } else {
    guardar("sessionStorage");
  } */
  checkbox.checked ? guardar("localStorage") : guardar("sessionStorage");
  //alert("Ingreso Exitoso");
  Toastify({
    text: "Ingreso exitoso",
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    //newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      fontSize: "3rem",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
});

/* p.classList.add("text");

const DateTime = luxon.DateTime;
let dt = DateTime.now();
console.log(dt);
console.log(dt.year);
console.log(dt.month);
console.log(dt.day);
let dateObj = {
  month: "long",
  day: "numeric",
  year: "numeric",
  weekday: "long",
};
let zona = DateTime.now().setZone("America/New_York");
dt.setLocale("es").toLocaleString(dateObj);
p.innerText = ` ${dt.setLocale("en").toLocaleString(dateObj)}`;
console.log(zona); */
const input = document.querySelector("#text");

const cleave = new Cleave("#text", {
  creditCard: true,
  onCreditCardTypeChanged: function (type) {
    // update UI ...
  },
});
