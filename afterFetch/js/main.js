const inputSearch = document.querySelector("#inputSearch"),
  btnSearch = document.querySelector("#btnSearch"),
  cardContainer = document.querySelector(".card-container");



async function fetchAPI(){
 try {
  const URL='./data/data.json';
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  //DOM
  //crearHTML(data)


//listener
btnSearch.addEventListener('click',()=>{
  const filtro = filtrarPorNombre(data)
crearHTML(filtro);

})
  
 } catch (error) {
  console.log(error);
 }
}
//llamado a la funcion
fetchAPI()

function crearHTML(arr) {
  let html = "";
  cardContainer.innerHTML = "";
  arr.forEach((personaje) => {
    const { name, dateOfBirth, house, image } = personaje;
    html = ` <div class="card">
                    <img src="${image}" alt="">
                    <div class="card-body">
                        <h3>${name}</h3>
                        <p>Fecha de nacimiento: ${dateOfBirth}</p>
                        <p>Casa: ${house}</p>
                    </div>
                </div>`;

    cardContainer.innerHTML += html;
  });
}


//funcion de filtrado

function filtrarPorNombre(array){
  let nombre = inputSearch.value;
  let nombreC = nombre.charAt(0).toUpperCase() + nombre.slice(1);
  if (!nombre) {
    return array;
  } else {
    return array.filter((e) => e.name.includes(nombreC));
  }
}



/* fetch(URL)
.then(response=>response.json())
.then(data=>{
  console.log(data);
}).catch(err=>{
  console.log(err);
}) */