// sessionStorage.setItem("id",123)// espara enviar informacion y se guarda en el navegador 
// console.log(sessionStorage.getItem("id"))


const usuario={
    nombre:"wiston mosquera",
    edad:23,
    correo:"wiston@gmail.com"

}

const jsonUsuario=JSON.stringify(usuario,undefined,4)

localStorage.setItem(usuario.correo,jsonUsuario)

console.log(localStorage.getItem(usuario.correo))