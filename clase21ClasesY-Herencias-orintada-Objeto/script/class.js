// class Persona {
//   constructor(nombre, edad, genero, ciudad) {
//     (this.nombre = nombre),
//       (this.edad = edad),
//       (this.genero = genero),
//       (this.ciudad = ciudad);
//   }
//   caminar() {
//     return `${this.nombre} esta caminando`;
//   }
//   // metodo ge es para que me traiga algo
//   get obteneredad() {
//     return this.edad;
//   }
//   // es para modificar un valor o nombre metodo set
//   set establecerNombre(nombre) {
//     this.nombre = nombre;
//   }
// }
// const persona1 = new Persona("marta", 23, "femenino", "cartagena");

// console.log(persona1);

// const persona2 = new Persona("marlon", 33, "masculino", "pereira");

// console.log(persona1.caminar());
// console.log(persona2);

// console.log(persona1.obteneredad);
// persona1.establecerNombre = "alberto";

// console.log(persona1.establecerNombre);


// // herencia de el objeto persona 

// class Estudiante extends Persona{
//     saludar(){
//         return`mi nombre es :${this.nombre} y soy estudiante`
//     }
// }
// const persona3=new Estudiante("wiston",44,"masculino","cali")

// console.log(persona3.saludar())




// class Barbero extends Persona {
//     motilar(){
//         return `mi nombre es ${this.nombre} y tengo ${this.edad} años y soy de ${this.ciudad} `
//     }

// }
// const persona4=new Barbero ("santi",55,"masculino","pereira")
// console.log(persona4.motilar())








// class Carro {
// constructor(marca,color,placa){
//     this.marca=marca,
//     this.color=color,
//     this.placa=placa;
// }

// }
// const carro1=new Carro( "ford","rojo","1234")
// console.log(carro1)



// class TipoCarro extends Carro {
//     MisMarcas(){
//         return `el color es :${this.color} y la marca es:$ ${this.marca}`
//     }

// }

// const MisCarro= new TipoCarro("mercede","negro","34567")
// console.log(MisCarro.MisMarcas())






class Mipapa{
    constructor(nombre,apellido,nacionalidad,edad){
        this.nombre=nombre,
        this.apellido=apellido,
        this.nacionalidad=nacionalidad,
        this.edad=edad;
  

    }

    
}

const joviDePapa=["programar","leer"]


const MiHijo=new Mipapa("carlitos","perea","colombiano",13)
console.log(MiHijo)


class MisNietos extends Mipapa{
    MiNietoES(){
        return`el nombre de mi nieto es:${this.nombre},${this.apellido},${this.nacionalidad},${this.edad}`
    }
}
 

const HijosDeMisHijos=new MisNietos("caren","ramire","peruana",22)

console.log(HijosDeMisHijos.MiNietoES())