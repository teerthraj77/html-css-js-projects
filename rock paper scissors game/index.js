const rockEl=document.getElementById("rock")
const paperEl=document.getElementById("paper")
const scissorsEl=document.getElementById("scissors")
const resultEl=document.getElementById("result")
const playerScoreEL=document.getElementById("userScore")
const computerScoreEl=document.getElementById("computerScore")
let userScore=0
let computerScore=0

const buttonsEl=document.querySelectorAll('button')

buttonsEl.forEach((bnt)=>{
 bnt.addEventListener("click",(()=>{
  // console.log(bnt.id,computerPlays());
 const results=playGround(bnt.id,computerPlays())
   resultEl.innerHTML=results
  // console.log(results);

 }))
})

let computerPlays=(()=>{
const choices=["rock","paper","scissors"]
const randomChoices=Math.floor(Math.random()*choices.length)
return choices[randomChoices]
})

let playGround=((playerSelect,computerSelect)=>{
  //console.log(playerSelect,computerSelect);
  if(playerSelect===computerSelect)
    {
      return "It's A tie!"
    }else if(playerSelect==="rock"&&computerSelect==="scissors" ||playerSelect==="paper"&&computerSelect==="rock" ||playerSelect==="scissors"&&computerSelect==="paper"  )
      {
        userScore++
        playerScoreEL.textContent=userScore
        return `You win! ${playerSelect}  beats ${computerSelect}`
    }
    else
    {
      computerScore++
      computerScoreEl.textContent=computerScore
      return `You lose! ${computerSelect}  beats ${playerSelect}`
    }
})