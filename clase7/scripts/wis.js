

const entraAlBar=(edad,pago)=>{
    if (edad=18 && pago==true){
        console.log("puede entrar al bar")
    }else{
        console.log("no puede entrar al bar")
    }
}
const valiDarpago=()=>{
    if(caracter===true){
        return true
    }else{
        return false
    }
}

let edadPersona=Number(prompt("ingrese su edad"));
let pagoEntrada= valiDarpago(prompt("usted pago?"));
entraAlBar(edadPersona,pagoEntrada);



//operador y 
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)


