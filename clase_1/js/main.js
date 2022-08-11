//variables en JS
//declaracionde variables
// no usamos var var numero;
let nombre; // vamos a usar let
let numero;
let nombreCompletoUsuario;

//inicializar variables

let resultado = 0;
const PI = 3.141516;
const DNI = "123456787654";

//asignar valores

numero = "10.3";
nombre = "Dani";
nombreCompletoUsuario = "Danny Riverol";
nombre = nombreCompletoUsuario;
console.log(numero);
//reasignar
//numero = 20;
nombre = "Fer";

resultado = 200;

// consola de navegador
console.log(numero);
console.log(nombre);

let result = PI - 35;
console.log(result);

let mensaje1 = "El valor de ";
let mensaje2 = " la operacion es:  ";

resultado = PI + numero;
//concatenar variables
/* console.log(mensaje1 + " la suma entre " + PI + numero + mensaje2 + result); */

nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");

nombreCompletoUsuario = nombre + " " + apellido;

console.log(nombreCompletoUsuario);
alert(nombreCompletoUsuario);

//No se usa
var tilo = "Te de tilo";
var tilo = "Te de hierbas";
