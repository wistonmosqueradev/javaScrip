const texto =`1245555 dhjdjhfhdh`
let patron =new  RegExp (/\w/)
console.log(patron.test(texto))



const txt =`pyton es el mejor lenguaje de programacion `
const txtRplaced=txt.replace(/pyton|pyton/,"JavaScript")
console.log(txtRplaced)


const tx =`pyton es el mejor lenguaje de programacion `
const txRplaced=tx.replace(/\d/g,"$")
console.log(txRplaced)


const User="Stiven"
const patronUser=/^[a-zA-Z0]{3,16}


console.log(patronUser.test(User))