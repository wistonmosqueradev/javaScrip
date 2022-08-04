function persona (name,age,color){
    this.name=name
    this.age=age
    this.color=color
    this.getInfo=function(){
        return ` ${this.name},${this.age}, ${this.color}`;
    }
}

let father =new persona(`jhon`,18,`red`);
let mother =new persona(`juana`,19,`green`);

persona.prototype.getInfo=function(){
    return `name:${this.name}`

}
console.log(mother.getInfo)
console.log(father.getInfo)
console.log(mother)