document.title = "Clase 14 | Comisión 38035";

const tituloPrincipal = document.getElementsByTagName("span")[0],
  h2 = document.getElementById("h2"),
  card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
  contenedor = document.querySelector(".contenedor");

tituloPrincipal.innerText = "Clase 14";
h2.innerText = "Asincronía";
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
//Asincronia
/* console.log("Inicio del proceso");

setTimeout(()=>{
  console.log("codigo intermedio");

},1000);

console.log("Fin del proceso"); */

btn.addEventListener("click", () => {
  card.classList.add("active");
  setTimeout(() => {
    card.classList.remove("active");
  }, 0);
});
/* 
for (const letra of "hola") {
  setTimeout(()=>{
    console.log(letra);
  },3000)
}
for (const letra of "tarola") {
  setTimeout(()=>{
    console.log(letra);
  },0)
} */

/* setInterval(()=>{
console.log("Hola");
},1000) */
/* let contador =0;
const intervalo = setInterval(()=>{
 console.log(contador);
 contador++

if(contador >= 10)
{
  clearInterval(intervalo);
}
},1000) */

//Promesas
/* const evento = (res) => {
  return new Promise((resolve, reject) => {
    //cuerpo de la promesa
    /* if (res === true) {
      resolve("Promesa resuelta");
    } else {
      reject
      */
   /* setTimeout(() => {
      res ? resolve("Promesa resuelta") : reject("Promesa rechazada");
    }, 2500);
  });
};*/

/* console.log(evento(true));
console.log(evento(false));
console.log("Hola"); */

/*evento(false)
.then((response) => {console.log(response);})
.catch((err) =>{
console.log(err);
});
 */

const pedirServicios= ()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(servicios)
    },2500)
  })
} 

const renderProductos = (arr) => {
  // función que genere la vista de los productos
  let html;
  for (const item of arr) {
    const { id, nombre, img, precio } = item;

    html = `
        <div class="card">
      <div class="card-image">
        <img src="../img/${img}">
        <span class="card-title">${nombre.toUpperCase()}</span>
      </div>
      <div class="card-content">
        
      <p>$${precio}</p>
      
      </div>
      <div class="card-action">
        <button class="btn" id="${id}">Comprar</button>
      </div>
      </div>
     `;
    
    contenedor.innerHTML += html;
  }
};

pedirServicios()
.then(respuesta=>{
  contenedor.textContent="";
  
  renderProductos(servicios)
})