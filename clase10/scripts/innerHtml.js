const ciudad=["medllin", "cali","bogota","pereira","manizale", "medllin", "cali","bogota"]

let ul=document.querySelector("ul")
// ul.innerHTML= `<li>medllin</li>`



let ciudadContador=""

for (let i= 0; i < ciudad.length; i++) {
  
    ciudadContador=ciudadContador+ `<li>${ciudad[i].toUpperCase()}</li>`;
}
ul.innerHTML=ciudadContador