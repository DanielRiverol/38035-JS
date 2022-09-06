

//console.dir(document.body);

const h2 = document.getElementById("h2");

const parrafo = document.getElementsByTagName("p");
const parrafoClases = document.getElementsByClassName("parrafo");
const contenedor= document.getElementById('contenedor');
const input= document.getElementById('ingreso');
const ul= document.getElementById('lista')

/* console.log(h2);
console.log(h2.innerHTML);
console.log(parrafo);
console.log(parrafo[0].innerHTML);
console.log(parrafo[1].innerHTML);
console.log(parrafo[2].innerHTML);
console.log(parrafoClases[0].innerHTML); */

for (const parrafo of parrafoClases) {
  console.log(parrafo.innerHTML);
}


//innerText
parrafo[0].innerText="Este es un contenido dinamico del parrafo 1"
parrafo[1].innerText="Este es un contenido dinamico del parrafo 2"
parrafo[2].innerText="Este es un contenido dinamico del parrafo 3"
h2.innerText= "Hola Tarola"

h2.innerHTML="<em>Soy un innerHTML</em> <p>Lorem</p>";

const texto= document.createElement('p');

texto.innerText= "Soy un parrafo creado en JS";
//
//document.body.append(texto);
contenedor.append(texto);
input.value= 'Ingreso'

/* const nombres = ["Hugo", "Paco", "Luis", 'Donald',"Daisy"];

for (const nombre of nombres) {
  let li = document.createElement('li');
  li.innerText= nombre;
  ul.append(li)
}
 */
/* const producto= {id:1, nombre:"Tela", precio:200}

let concatenado= "Id: " + producto.id + " Nombre: "+ producto.nombre + " precio: "+ producto.precio;

let templatesLiterals= `Id ${producto.id} 
Nombre: ${producto.nombre} 
Precio: $ ${producto.precio}`

contenedor.innerText= templatesLiterals */


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

for (const servicio of servicios) {

  let li = document.createElement('li')

  li.innerHTML=`<div class="card">
  <h3>${servicio.nombre}</h3>
  <p>${servicio.precio}</p>
  <img src="../img/${servicio.img}" alt="">
  </div>
 `

  ul.append(li)
  
}