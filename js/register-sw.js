// Chequeo si el browser soporta Service Worker
if ('serviceWorker' in navigator){
    navigator.serviceWorker.register("../sw.js").then((message)=>{
        console.log("el navegador soporta workbox");

    });
} else {
    console.log('el navegador no soporat workbox');
}