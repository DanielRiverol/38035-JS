// si ( condicion) entonces { algo }

// = asiganacion de valores == comparacion

//parseo de varible parseInt() o parseFloat()
//let numero = parseFloat(prompt("Ingresa un número")); //

/* if (numero == 12) {
  //Codigo a ejecutar
  console.log("El numero que ingresaste es " + numero);
} else {
  console.log("El numero que ingresaste no es 12" + " es: " + numero);
} */
/* if (numero == 12) {
  //Codigo a ejecutar
  console.log("El numero que ingresaste es " + numero);
} else if (numero > 23) {
  console.log("El numero que ingresaste no es 12" + " es: " + numero);
} else {
  console.log("El numero es  " + numero);
} */

//variable boolean
//let verdadero=true; let falso= false;

/* let esIgual = (numero == 12); //true o false
let esMayor = (numero > 23);//true o false

if (esIgual) {
  //Codigo a ejecutar
  console.log("El numero que ingresaste es " + numero);
} else if (esMayor) {
  console.log("El numero que ingresaste no es 12" + " es: " + numero);
} else {
  console.log("El numero es  " + numero);
} */

/* 1 == "1"//true
1 === "1" //false */
/* 
let usuario = prompt("Ingresa tu usuario");
let password = prompt("Ingresa tu password");
let pass = "1234";
let user = "Daniel";

if (usuario == user || password == pass) {
  console.log("Hola " + usuario);
} else {
  console.log("Usuario o contraseña incorrectas");
} */

//AND && las dos condiciones tienen que ser verdaderas true
// OR || cualquiera de las comdiciones tiene que ser verdadera
let nombre = prompt("Ingresa tu nombre");
let variabelBoleana = nombre == "pedro";

if (variabelBoleana || nombre == "PEDRO" || nombre == "Luis") {
  console.log("Hola " + nombre + " que bueno tenerte de nuevo");
} else {
  console.log("Hola " + nombre);
}
