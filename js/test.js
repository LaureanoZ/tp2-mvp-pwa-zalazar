let conexion = document.querySelector("#conexion");
window.addEventListener('offline', event => {
    conexion.innerHTML = "offline 🔴"
})

window.addEventListener('online', event => {
    conexion.innerHTML = "online 🟢"
})

let opcionUno = document.querySelector("#opcionUno");
let opcionDos = document.querySelector("#opcionDos");
let enviar    = document.querySelector("#enviar");
let img       = document.querySelector("#img");
let personaje = document.querySelector("#personaje");
let rick = document.querySelector("#rick");

enviar.addEventListener("click", e => {
    e.preventDefault()
    let valor1 = opcionUno.value;
    let valor2 = opcionDos.value;

    if(valor1 == "SI" && valor2 == "SI"){
        img.src = "img/beth.jpg"
        personaje.innerHTML = "Beth Smith";
        rick.innerHTML = "Piensas como:"
    }
    if(valor1 == "NO" && valor2 == "SI"){
        img.src = "img/morty.jpg"
        personaje.innerHTML = "Morty Smith";
        rick.innerHTML = "Piensas como:"
    }
    if(valor1 == "SI" && valor2 == "NO"){
        img.src = "img/jerry.jpg"
        personaje.innerHTML = "Jerry Smith";
        rick.innerHTML = "Piensas como:"
    }
    if(valor1 == "NO" && valor2 == "NO"){
        img.src = "img/summer.jpg"
        personaje.innerHTML = "Summer Smith";
        rick.innerHTML = "Piensas como:"
    }
})

rick.addEventListener("click", e => {
    e.preventDefault();
    rick.innerHTML = "No respondiste, significa que piensas como:"
    personaje.innerHTML = "Rick Sanchez";
    img.src = "img/rick.png"
})