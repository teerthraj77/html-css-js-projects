const buttonsEl=document.querySelectorAll("button")
const inputEl=document.getElementById("result")

for(let i=0;i<buttonsEl.length;i++){
  buttonsEl[i].addEventListener("click",()=>{
  let buttonsValue=buttonsEl[i].textContent
   if(buttonsValue==="C")
   {
    clearResult()
   }else if(buttonsValue==="=")
   {
    calculateResult()
   }else{
    appendValue(buttonsValue)
   }
    
  })
}

let clearResult=(()=>{
inputEl.value=""
})

let calculateResult=(()=>{
inputEl.value=eval(inputEl.value)
})

let appendValue=((buttonsValue)=>{
inputEl.value +=buttonsValue
})