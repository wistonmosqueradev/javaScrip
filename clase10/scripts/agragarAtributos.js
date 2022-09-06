titulos=document.querySelectorAll('h1')

for (let i= 0; i < titulos.length; i++) {
titulos[i].className="titulo"   
}

titulos[1].id="titulo1"
titulos[2].id="titulo2"
console.log(titulos)
// seleccinar imagen desde el navegador
let imagen=document.getElementById("imagen")
imagen.setAttribute("src","https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg")

let enlace=document.querySelector("a")
enlace.setAttribute("href","https://www.google.com/")

