let startEl=document.getElementById("start")
let stopEl=document.getElementById("stop")
let restEl=document.getElementById("rest")
let resultEl=document.getElementById("result")

let timer=[sec,min,hrs]=[0,0,0]
 
let=stopwatch=(()=>{
  sec++
  if(sec==60)
  {
    sec=0
    min++
  }if(min==60)
  {
    min=0
    hrs++

  }
 
let times=(`${hrs.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`)
resultEl.textContent=times
})


let start=(()=>{
   interval=setInterval(stopwatch,1000)
 
 
})

let stops=(()=>{
clearInterval(interval)
})

let rest=(()=>{
  clearInterval(interval)
  timer=[sec,min,hrs]=[0,0,0]
  sec--
  stopwatch()
  
})

startEl.addEventListener("click",start)
stopEl.addEventListener("click",stops)
restEl.addEventListener("click",rest)