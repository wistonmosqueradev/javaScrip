//convertir un json a un objeto

const json=`{"nombre":"wiston" ,"eda":23,"cedula":1234,

"habilidades":["html","css","js"]}`

const objJSON=JSON.parse(json)

console.log(objJSON) //mostramos el json convertido a un objeto

objJSON.edad>15 ?console.log("edad mayor"):console.log("hola") 