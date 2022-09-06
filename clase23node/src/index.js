
const mostrarTitulo=()=>{
    
    const titulo=document.createElement("h1");
    titulo.innerHTML = "hola mundo";
    titulo.classList.add('titulo')
    document.body.appendChild(titulo);
};

mostrarTitulo()
 