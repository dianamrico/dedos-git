const btnD2 = document.getElementById("dedo2b")
const text2 = document.getElementById("texto")

btnD2.addEventListener("click", ()=>{
    //console.log("dedo 2")
    let son2 = document.createElement("li")
    son2.innerHTML=("Este lo cocinó !!!")
    text2.appendChild(son2)

})