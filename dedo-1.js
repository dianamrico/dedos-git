const btn = document.getElementById("dedo-1")
const texto = document.getElementById("texto")

btn.addEventListener("click",()=>{
  let hijo = document.createElement("li")
  hijo.innerHTML=("Este dedito compro un huevito")
  texto.appendChild(hijo)
    
})