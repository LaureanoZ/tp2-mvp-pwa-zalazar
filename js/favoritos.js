let conexion = document.querySelector("#conexion");
window.addEventListener('offline', event => {
    conexion.innerHTML = "offline 🔴"
})

window.addEventListener('online', event => {
    conexion.innerHTML = "online 🟢"
})

let getName   = JSON.parse(localStorage.getItem('names'));
let getImage  = JSON.parse(localStorage.getItem('images'));
let getOrigin = JSON.parse(localStorage.getItem('origins'));
let cont = 0;
if (getName !== null) {
    for (let name of getName) {

                let contenedor = document.querySelector("#contenedorFav")
                let divCol    = document.createElement('div');
                let divCard   = document.createElement('div');
                let imgFav    = document.createElement('img');
                let divSecond = document.createElement('div');
                let h3        = document.createElement('h3');
                let spanFav   = document.createElement('span');
                let aFav      = document.createElement('a');
                divCol.className    = "col-12 col-sm-6 col-lg-4 mb-4 mt-2";
                divCard.className   = "card";
                imgFav.className    = "card-img-top";
                imgFav.src          = getImage[cont];
                divSecond.className = "card-body";
                h3.className        = "card-title";
                h3.innerHTML        = name;
                spanFav.className   = "card-text";
                spanFav.innerHTML   = getOrigin[cont];
                aFav.className      = "btn btn-danger btn-sm float-end";
                aFav.href           = "#";
                aFav.innerHTML      = "BORRAR"
                
                divCol.append(divCard);
                divCard.append(imgFav, divSecond);
                divSecond.append(h3, spanFav, aFav);
                contenedor.append(divCol);   
                
                aFav.addEventListener('click', e => {
                    e.preventDefault();
                        divCol.className = "d-none"
                });
                cont++;            
    }
}