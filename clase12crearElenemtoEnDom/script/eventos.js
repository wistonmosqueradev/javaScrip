// document.body.addEventListener("onload",alert("hola"))


// eventos 
// document.querySelector("#boton").addEventListener("click",()=>{
//     alert("😎")
// })

// evento click con parametros
// document.querySelector("#boton").addEventListener("click",(e)=>{
//     alert(e.target.textContent)
// })

let eda=document.querySelector("#eda")
let boton=document.querySelector("button")

boton.addEventListener("click",()=>{
    alert(`su eda es:${eda.value}`)

})
