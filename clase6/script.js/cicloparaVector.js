let numeros=[5,2,3,4,1,3]

// for (let numeros = 0; numeros <=6; numeros++) {


//     console.log(numeros)
    
// }
// console.log(numeros)

// let num=[5,2,3,4,1,3]

// console.log(num.length)
// console.log(num)



// // ciclo for of
// console.warn("for of imprime los datos que estan dentros del vector")
// for (const numero of numeros) {
//     console.log(numero)
    
// }
// for in imprime el indice  
for (const key in numeros) {
    console.log(numeros[key])
    if (key==2){
        console.log(`el numero es:${numeros[key]}`)
    }
    
}
// para recorrer los elementos que estan dentro del vec
numeros.forEach(Element =>{
    console.log(Element)
});