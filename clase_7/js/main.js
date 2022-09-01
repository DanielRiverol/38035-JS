const nombres = ["Hugo", "Paco", "Luis"];

function mayorQue(n) {
  return (m) => m > n;
}

let mayorQueDoce = mayorQue(12); // (m)=> m > 12

//console.log(mayorQueDoce(13)); //(13)=> 13 > 12 true
//console.log(mayorQueDoce(4)); // (4)=> 4 > 12 false

function asignarOp(op) {
  if (op == "sumar") {
    return (n1, n2) => n1 + n2;
  } else if (op == "restar") {
    return (n1, n2) => n1 - n2;
  }
}

let suma = asignarOp("sumar");
let resta = asignarOp("restar");
/* 
console.log(suma(12, 5));
console.log(resta(12, 5)); */

//recibir funciones por parametro
function porCadaUno(arr, fn) {
  for (const element of arr) {
    fn(element);
  }
}

/* porCadaUno(numeros,console.log); */

/* const duplicado=[];


porCadaUno(numeros,(element)=>{
  duplicado.push( element * 2)
})
console.log(numeros);
console.log(duplicado); */
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 23, 21, 4, 543, 4, 6];

//forEach

const duplicado = [];

numeros.forEach((numero) => {
  duplicado.push(numero * 2);
});

/* 
Burda traduccion
forEach=== (numeros)=>{
  duplicado.push(numeros * 2);
})
*/

/* console.log(duplicado); */

const productos = [
  { id: 1, nombre: "Arroz", precio: 124 },
  { id: 2, nombre: "Papa", precio: 90 },
  { id: 3, nombre: "Tomate", precio: 204 },
  { id: 4, nombre: "Morrón", precio: 870 },
  { id: 5, nombre: "Pan", precio: 240 },
  { id: 6, nombre: "Fideos", precio: 124 },
];

// find()
let encontrado = productos.find((el) => {
  return el.precio > 200;
});
/* 
 console.log(encontrado.precio= 400);
 console.log(encontrado); */

//filter()
const mayorPrecio = productos.filter((el) => {
  return el.nombre === "ingreso";
});

/* console.log(mayorPrecio); */
/* let ingreso= prompt("ingresa un producto") */
//some
const existe = productos.some((producto) => {
  return producto.nombre === "ingreso";
});

/* console.log(existe); */

//map
const Nombres = productos.map((producto) => {
  return producto.nombre;
});

const actualizarPrecios = productos.map((producto) => {
  return {
    id: producto.id,
    nombre: producto.nombre,
    precio: producto.precio * 2.5,
  };
});

console.log(actualizarPrecios);

//reduce(fn, param)
const total = productos.reduce((acc, el) => {
  return acc + el.precio;
},0);

console.log(total); //

//MATH
 console.log(Math);
 console.log(Math.max(12,33.45,34,21,34,2, Infinity));
 console.log(Math.min(12,33.45,34,21,34,2, -12));
 console.log(Math.ceil(3.1));
 console.log(Math.floor(3.123));
 console.log(Math.round(3.49));
 console.log(Math.sqrt(3.49));
 console.log(Math.floor(Math.random()* 100 + 30));



