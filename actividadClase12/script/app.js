   const box=document.querySelector(".box")

   for (let i = 1; i < 100; i++) {
      const element =document.createElement("div") // crea un elemento
      element.innerHTML=i
      element.className="element"
      box.appendChild(element)  //appendChild "añadir niño"

      if (i %2==0){
         element.className="element"
      }else{
         element.classList.add("element1")
      }
      box.appendChild(element)
       
   }