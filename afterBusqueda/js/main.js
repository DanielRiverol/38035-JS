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
console.log(servicios);

function Servicio(id, nombre, precio, img) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.img = img;
}

const nuevoServicio = new Servicio(10, "definitiva", 2000, "img.jpeg");

function cargarServicio(arr, valor) {
  arr.push(valor);
}

cargarServicio(servicios, nuevoServicio);

function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro) || el.precio < 2500;
  });
  return filtrado;
}

/* let ingreso = prompt("Ingresa un servicio a buscar");

const resultado = filtrarServicio(servicios, ingreso.toLocaleLowerCase());

const carrito = [];
cargarServicio(carrito, resultado);

for (const elemnto of resultado) {
  carrito.push(elemnto);
} */
/* 
console.log(resultado);
console.log(carrito); */

/* function buscarPorNombre(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre === filtro;
  });
  return encontrado;
}

const encontrado = buscarPorNombre(servicios, ingreso);

console.log(encontrado); */

let porPrecio = prompt(
  "Selecciona un opción \n 1 - Menor precio \n 2 - Mayor precio"
);

function filtrarPorPrecio(arr, filtro) {
  let valor = prompt("Ingresa el monto");

  return arr.filter((el) => {
    switch (filtro) {
      case "1":
        return el.precio < valor;
        break;
      case "2":
        return el.precio > valor;
        break;
    }
  });
}
const precio = filtrarPorPrecio(servicios, porPrecio);
console.log(precio);
