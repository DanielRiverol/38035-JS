//bucles en JS
//i++     i=i+1
/* let ingreso = parseInt(prompt("Ingresa un numero"));
let limite = parseInt(prompt("Ingresa un limite"));

for (let i = 0; i <= limite; i++) {
  let resultado = ingreso * i;
  console.log(ingreso + " * " + i + "=" + resultado);
} */

let palabraClave = "patatas";
//break
/* for (let index = 1; index < 3; index++) {
  let palabraUsuario = prompt("Ingresa tu palabra clave");
  if (palabraClave === palabraUsuario) {
    console.log("Login exitoso");
    break;
  } else{
    console.log("te quedan " + (3 - index) + "intentos");
  }
  
} */
//continue

/* for (let index = 0; index <= 10; index++) {
  if (index == 5 || index == 9) {
    console.log("salto");
    continue;
  }
  console.log(index);
} */
//WHILE o Mientras
/* let repetir = true;

while (repetir) {
  console.log("Soy un bucle while");
  repetir = false;
} */
/* let contador = 0;

while (contador < 10) {
  console.log("soy un bucle while");
  contador++;
} */

/* let edad = parseInt(prompt("Ingresa tu edad"));

while (edad < 18) {
  console.log("No podes pasar tenes menos de 18");
  //condicion de salida
  edad = parseInt(prompt("Ingresa tu edad"));
}
 */

/* let palabra = "tomate";
let palabraIngresada = prompt("Ingresa la palabra clave");

while (palabra != palabraIngresada) {
  console.log("Palabra incorrecta");
  palabraIngresada = prompt("Ingresa la palabra clave");
} */

//DO WHILE
/* let condicion = false;
do {
  console.log("Yo me ejecuto igual");
} while (condicion); */

let continuar = false;
let passGuardado = "tomates";

do {
  let password = prompt("Ingresa tu password");
  if (password == passGuardado) {
    console.log("Bienvenido/a");
    continuar = false;
  }
} while (continuar);
