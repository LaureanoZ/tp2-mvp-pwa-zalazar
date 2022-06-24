let conexion = document.querySelector("#conexion");
window.addEventListener('offline', event => {
    conexion.innerHTML = "offline 🔴"
})

window.addEventListener('online', event => {
    conexion.innerHTML = "online 🟢"
})


let input      = document.querySelector('#inputValor');
let button     = document.querySelector('#buscar');
let img        = document.querySelector('#img');
let titulo     = document.querySelector("#titulo");
let estado     = document.querySelector("#estado");
let gender     = document.querySelector("#gender");
let species    = document.querySelector("#species");
let origin     = document.querySelector("#origin");
let favoritos  = document.querySelector("#favoritos")
let contenedor = document.querySelector("#contenedorFav")
let elId;


const Grahql = personaje => `query { 
    characters(filter: { name: "${personaje}" }) 
    {results {name image status id species gender origin{name}} }}`;

button.addEventListener("click", e => {
    titulo.innerHTML = '¡Por favor espere!';  
    e.preventDefault();
    let resultado = input.value;

    let opciones = { method: "post", headers: {"Content-Type": "application/json"}, body: JSON.stringify({query: Grahql(resultado)})}

    if (resultado) {
        fetch('https://rickandmortyapi.com/graphql', opciones)
            .then(function (response){ 
            return response.json();
            }).then(function(json){
                console.log(json.data)
            elId = json.data.characters.results[0].id;
            titulo.innerHTML    = json.data.characters.results[0].name;
            estado.innerHTML    = "Status: " + json.data.characters.results[0].status;
            gender.innerHTML    = "Gender: " + json.data.characters.results[0].gender;
            species.innerHTML   = "Species: " + json.data.characters.results[0].species;
            origin.innerHTML    = "Origin: " + json.data.characters.results[0].origin.name;
            img.src             = json.data.characters.results[0].image;
            favoritos.className = "d-block mt-4 btn btn-success";
            }).catch(err => console.log(err))
            .finally(() => {
                input.value = ''
                
            });
    
    }
});

let aniadir  = [];
let names    = [];
let origenes = [];
let imagenes = [];

favoritos.addEventListener("click", e => {
    e.preventDefault();
    let id          = elId;
    let name        = titulo.innerHTML;
    let origen      = origin.innerHTML;
    let imagensilla = img.src;
    if (aniadir.indexOf(id) === -1) {
        aniadir.push(id);
        names.push(name);
        origenes.push(origen);
        imagenes.push(imagensilla);
        localStorage.setItem('names', JSON.stringify(names));
        localStorage.setItem('origins', JSON.stringify(origenes));
        localStorage.setItem('images', JSON.stringify(imagenes));
    }
});