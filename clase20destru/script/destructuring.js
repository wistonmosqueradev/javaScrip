// const fullStack=[
//     ["html","css","js"]
//     ["node","js","mysql","heidisql"]
// ]
// const[frontEnd,backend]=fullStack


// const retangulo={
//     ancho:20,
//     alto:10,
//     area:200
// }
// const foo = ['one', 'two', 'three'];

// const [red, yellow, green] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // "three"

// const jugadores=[
//     {nombre:"cr",club:"mu"},
//     {nombre:"lm",club:"psg"},
//     {nombre:"bcz",club:"real"}
// ]


// spread opereiro  une dos arreglo
const numerosUno=[1,2,3]
const numerosDos=[14,15,16]
const numerosUnidos=[...numerosUno,...numerosDos,]
console.log(numerosUnidos)


const carro={
    marca:"ford",
    color:"rojo"
}

const actualizacionMiCarro={
    tipo:"carro",
    ani:2022,
    color:"amarillo"
}

const miactualiZacion={
    ...carro,...actualizacionMiCarro
}

console.log(miactualiZacion)