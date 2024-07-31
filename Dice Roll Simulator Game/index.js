const btn=document.getElementById("dice_button")

const diceEl=document.getElementById("dice")

const rollHistoryEl=document.getElementById("Roll_history")

let historyList=[]

let rollDice=(()=>{
const rollResult=Math.floor(Math.random()*6)+1

const diceFace=getDiceFace(rollResult)
diceEl.innerHTML=diceFace

historyList.push(rollResult)
updateRollHistory()

})
let updateRollHistory=(()=>{
  rollHistoryEl.innerHTML=""
  let i=1
  
  historyList.forEach((ele,i)=>{
  
    const li=document.createElement("li")
    li.innerHTML=`Roll ${i+1}: <span>${getDiceFace(ele)}</span>`
    rollHistoryEl.appendChild(li)
  })
})

let getDiceFace=((rollResult)=>{
 switch(rollResult)
 {
  case 1: return "&#9856;";
  break;
  case 2: return "&#9857;";
  break;
  case 3: return "&#9858;";
  break;
  case 4: return "&#9859";
  break;
  case 5: return "&#9860;";
  break;
  case 6: return "&#9861;";
  break;
  default:return "";
  
 }
})

btn.addEventListener("click",(()=>{
 diceEl.classList.add("roll-animation")
setTimeout(()=>{
  diceEl.classList.remove("roll-animation")
  rollDice()

},1000)
}))