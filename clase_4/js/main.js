/* //switch
let ingreso = prompt(
  "Ingresa una opción \n 1-Café solo \n 2-Café con leche \n 3-Té \n 4-Té con leche \n 5-Agua caliente"
);

switch (ingreso) {
  case "1":
    alert("Seleccionaste Café");

  case "2":
    alert("Seleccionaste Café con leche");
    break;
  case "3":
    alert("Seleccionaste Té");
    break;

  default:
    alert("Opción no válida");
    break;
}
//if(ingreso=="1"){}
//else if(ingreso == "2"){}
//else if()else{alert(Opcion no valida)} */

//funciones
//declarar funcion
/* function saludar() {
  //codigo a ejecutar
  alert("Hola cómo estás?");
} */
//llamar a la funcion
//saludar();

/* function solicitarNombre() {
  let nombre = prompt("Ingresa tu nombre");
  alert(nombre);
}

solicitarNombre();
solicitarNombre(); */
//Funciones con parametros
/* function saludar(nombre, apellido) {
  alert("Hola " + nombre + " " + apellido + " cómo estás?");
}

let ingresarNombre = prompt("ingresa tu nombre");
let ingresarApellido = prompt("ingresa tu apellido");

saludar(ingresarNombre, ingresarApellido); */
/* 
function sumar(parametro1, parametro2) {
  //isNaN()
  if (isNaN(parametro1) || isNaN(parametro2)) {
    alert("Los valore ingresado deben ser numeros");
  } else {
    alert(parametro1 + parametro2);
  }
} */
/* let num1 = parseFloat(prompt("Ingresa el primer numero"));
let num2 = parseFloat(prompt("Ingresa el segundo numero")); */
//Scope
//variables globales
let resultado = 0;

function sumar(n1, n2) {
  //variables locales
  resultado = n1 + n2;
  return resultado;
}

/* console.log(sumar(3, 54));
let valorDeLaSuma = sumar(3, 54) * 2;
console.log(valorDeLaSuma); */

function mostrar(mensaje) {
  console.log(mensaje);
}
mostrar(sumar(34, 6));
