//funcion regular con nombre
/* function sumar(n1, n2) {
  let resultado = n1 + n2;
  return resultado;
} */

function mostrar(mensaje) {
  console.log(mensaje);
}

//funcion anónima
/* const sumar = function (n1, n2) {
  return n1 + n2;
}; */

//funcion flecha ES6
/* const sumar = (n1, n2)=>{
  return n1 + n2;
} */

// OJBJETOS
/* let nombre = "Homero";
let apellido = "Simpson";
let calle = "Av Siempreviva 742";
let edad = 38;
let nombre2 = "Marge";
let apellido2 = "Bouvier";
let calle2 = "Av Siempreviva 742";
let edad2 = 38;
let nombre100 = "Marge";
let apellido100 = "Bouvier";
let calle100 = "Av Siempreviva 742";
let edad100 = 38; */

//objeto literal
const personaje1 = {
  nombre: "Homero",
  apellido: "Simpson",
  calle: "Av Siempreviva 742",
  edad: 38,
};

const personaje2 = {
  nombre: "Marge",
  apellido: "Simpson",
  calle: "Av Siempreviva 742",
  edad: 39,
  hijos: {
    primero: "Bart",
    segundo: "Lisa",
    tercero: "Maggie",
    cuarto: "Hugo",
  },
};

/* mostrar(personaje1);
mostrar(personaje1["nombre"]);
mostrar(personaje2);
mostrar(personaje2["nombre"]);
mostrar(personaje2["edad"]);
mostrar(personaje2["hijos"]);

mostrar(personaje1.edad); */

/* const hijosDeMarge = personaje2.hijos;
console.log(hijosDeMarge);
console.log(hijosDeMarge.primero);
console.log(hijosDeMarge.quinto); */

const auto1 = {
  marca: "VW",
  anio: 2014,
  motor: 1.5,
  modelo: "gol",
};
const auto2 = {
  marca: "Toyota",
  anio: 2014,
  motor: 1.5,
  modelo: "Etios",
};
/* console.log(auto1);
console.log(auto2);
auto2.anio=2018;//reasignar valor
auto2.color="Gris topo";//Agregar propiedad y valor
console.log(auto2); */

//funcion constructora
function Auto(marca, anio, motor, modelo) {
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

const auto3 = new Auto("Audi", 2022, 3.9, "TT");
const auto4 = new Auto("Ford", 1974, 3.9, "Falcon");

auto3.marchar();
auto4.marchar();
auto3.presentar();
auto4.presentar();
auto4.vender();

/* toLowerCase() */
//Metodos de los objetos
/* let usuario = prompt("Ingresa tu usuario");
let usuarioGuardado = usuario.toLowerCase(); */

/* console.log(usuario);
console.log(usuarioGuardado); */
/* let frase = "js se aprende practicando";
console.log(frase);
let fraseMayus = frase.toUpperCase();
console.log(fraseMayus);
console.log(frase.toUpperCase()); */

/* let ingresoMarca = prompt("Ingresa la marca del auto");
let ingresoAnio = prompt("Ingresa el año del auto");
let ingresoModelo = prompt("Ingresa el modelo del auto");
let ingresoMotor = prompt("Ingresa la cilindrada del auto"); */

/* const auto5 = new Auto(ingresoMarca, ingresoAnio, ingresoMotor, ingresoModelo); */

/* console.log(auto5) */ console.log("marca" in auto4);
/* console.log(auto5) */ console.log("color" in auto4);
//bucle for in

for (const atributos in auto4) {
  console.log(atributos + ":" + auto4[atributos]);
}

// Crear una funcion cargar autos /ademas que me permita agregar 3 autos de una sola vez
