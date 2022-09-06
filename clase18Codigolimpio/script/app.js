const aplicacion=document.querySelector('.container')// referenci al html

// vamos hacer la peticion a la api
const url='https://jsonplaceholder.typicode.com/users'
fetch(url)// me de vuelve lo que le envie en la url
.then(res =>res.json())
.then(Date=>console.log(data));
