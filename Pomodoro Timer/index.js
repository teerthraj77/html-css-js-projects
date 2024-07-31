const startEl=document.getElementById("start")
const stopEl=document.getElementById("stop")
const RestEl=document.getElementById("rest")
const timmerEl=document.getElementById("timmer")

let timelef=1500

let updatetimer=(()=>{
  let min=Math.floor(timelef/60)
  let sec=timelef%60
 let format= `${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`
 timmerEl.innerHTML=format

})

let starttimer=(()=>{
 interval=setInterval(()=>{
  timelef--
  updatetimer()
  if(timelef==0){
    clearInterval(interval)
    alert("TIME UP")
    timelef=1500
    updatetimer()
  }
 

 },1000)
 
 
})
let stopttimer=(()=>{
  clearInterval(interval)
})

let resttimer=(()=>{
  clearInterval(interval)
   timelef=1500
   updatetimer()
})



startEl.addEventListener("click",starttimer)
stopEl.addEventListener("click",stopttimer)
RestEl.addEventListener("click",resttimer)