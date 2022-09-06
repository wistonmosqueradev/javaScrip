
// funcion callback asicronica

const saludar=(nombrePersona)=>{
    console.log(`hola ${nombrePersona}`)

}
const pedirNombre=(callback)=>{
    let nombre=prompt("ingrese su nombre")
    callback(nombre)
}

pedirNombre(saludar)



