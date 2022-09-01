//FUNCIÓN CONSTRUCTORA
/* function Auto(marca, anio, motor, modelo) {
  this.marca = marca;
  this.anio = anio;
  this.motor = motor;
  this.modelo = modelo;
  this.marchar = () => {
    console.log("Estoy en marcha");
  };
  this.presentar = () => {
    console.log("Soy un auto modelo" + this.modelo + " año: " + this.anio);
  };
  this.vender = () => {
    console.log("Fui vendido");
  };
} */


//CLASE CONSTRUCTORA
/* class Auto {
  constructor(marca, anio, motor, modelo) {
    this.marca = marca;
    this.anio = anio;
    this.motor = motor;
    this.modelo = modelo;
    this.marchar = () => {
      console.log("Estoy en marcha");
    };
    this.presentar = () => {
      console.log("Soy un auto modelo" + this.modelo + " año: " + this.anio);
    };
    this.vender = () => {
      console.log("Fui vendido");
    };
  }
} */

//Arrays
const array=[];
/* console.log(array); */
let nombre= "Pepe";
const numeros = [1,2,3,4,65,6,7,4,1,2,0,-9,5,4];
/* console.log(numeros); */

const mixto=[1,"Batman", false, {nombre:"German"}, 3.4, nombre,"Batman"];
/* console.log(mixto);
console.log(mixto.length);
console.log(mixto[0]);
console.log(mixto[1]);
console.log(mixto[2]);
console.log(mixto[3]);
console.log(mixto[4]); */

//recorriendo el array
/*  for(let i = 0; i < mixto.length; i++){
  console.log(mixto[i]);
 }
 for(let i = 0; i < numeros.length; i++){
  console.log(numeros[i]);
 } */
/* 
array.push("Juan",1,false);
console.log(array); */
/* mixto.push(44);
console.log(mixto);
mixto.unshift('Hola');
console.log(mixto);
mixto.pop();
console.log(mixto);
mixto.shift();
console.log(mixto);

mixto.splice(2,1);
console.log(mixto); */

//console.log(numeros.join("\n"));
/* const concatenado = mixto.concat(numeros);
console.log(concatenado);

console.log(mixto.indexOf('juan'));
console.log(mixto.indexOf(1));
console.log(mixto.indexOf('batman'));

console.log(concatenado.includes(3));
console.log(concatenado.includes(1)); */


//arrays de objetos
const arroz={nombre:"Gallo", peso:500, precio: 180}

const productos=[];

function Producto(nombre, precio, peso){
this.nombre= nombre;
this.precio= parseFloat(precio);
this.peso= peso;

this.sumarIva=()=>{
  this.precio = this.precio * 1.21;
}
}

const productoNuevo= new Producto('Azucar', 195, 1000);
const productoNuevo1= new Producto('Peras', 200, 1000);
console.log(productoNuevo.precio);
productoNuevo.sumarIva();
console.log(productoNuevo.precio);


function cargarProductos(producto){
 productos.push(producto);
}

cargarProductos(arroz);
cargarProductos(productoNuevo);
cargarProductos(productoNuevo1);

console.log(productos);
/* for (let index = 0; index < productos.length; index++) {
  const element = productos[index];
  console.log(element);
  
} */

for (const objeto of productos) {
  console.log(objeto);
}