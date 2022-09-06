// const url="https://restcountries.com/v3.1/all"

// fetch(url)
// .then((Response)=>Response.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));

const name="colombia"
const url=`https://restcountries.com/v3.1/name/${name}`


const paisApi=async(enlace)=>{
    try {
        const Response=await fetch(enlace)
        // console.log(Response)
        const data=await Response.json()
        console.table(`la frontera de ${name}son:${data[0].borders}`)
    } catch (error) {
 console.log(error)       
    }
}
paisApi(url)