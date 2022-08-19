/* let continuar = true;

do {
  let ingreso = prompt("Ingresa una opcion");
  if (ingreso == "salir") {
    continuar = false;
  }
} while (continuar); */
let acierto = false;
let contador = 0;
let respuesta = "OTAWA";
console.log(acierto === false);
console.log(contador < 3);
console.log(contador < 3 && acierto === false);

while (contador < 3 && acierto === false) {
  let respuestaUsuario = prompt("Capital de Canadá");
  if (respuestaUsuario === respuesta) {
    acierto = true;
    alert("Acertaste");
  }
  contador++;
}

if (!acierto) {
  alert("Terminaste tus 3 intentos");
}

//(true && true) = true
// (true && false) = false
//(false && true)= false

//false || false=false
