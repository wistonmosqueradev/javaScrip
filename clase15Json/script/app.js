const usuario={
    nombre:"juan",
    apellido:"moreno",
    eda:23,
    cedula:1234,
    jovi:["leer","correr","programar"]
}
console.table(usuario)


const usuarioJSON=JSON.stringify(usuario)// convrtimos un ojeto a json y se convirtio a caracteres
console.log(usuarioJSON)