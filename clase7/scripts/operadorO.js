const entraAlBar=(edad,pago)=>{
    if (edad=18 || pago===true){
        console.log("puede entrar al bar")

    }else{
        console.log("no puede entar al bar")
    }
}
entraAlBar(18,false)

 
// operador o

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)