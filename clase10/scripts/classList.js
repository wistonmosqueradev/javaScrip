document.getElementById("titulo").classList.remove("titulo")
// se le remueve el color de que tengan esa clase

let titulos=document.querySelectorAll("h1"
)

titulos.forEach(Element=>{
    Element.classList.add("titulo2") // agrega cambio 
})



console.log(titulos[0].classList.contains("titulo2")) //validar si tiene un aclase "falso " o "verdadero"

titulos[1].classList.toggle("titulo")// si tiene la clase que la quite si no que la agrege

