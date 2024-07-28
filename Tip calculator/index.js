let btn=document.getElementById("calculate")
let billamt=document.getElementById("bill")
let tipamt=document.getElementById("tip")
let spant=document.getElementById("total")

let calculatetotal=(()=>{
 let bill=billamt.value
 let tip=tipamt.value
 let total1=bill*(1+tip/100)
 spant.innerText=total1.toFixed(2)


})


btn.addEventListener("click",calculatetotal)