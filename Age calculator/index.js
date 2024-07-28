const butt=document.getElementById("btn")
const birthday=document.getElementById("birthday")
let result=document.getElementById("result")

let Agecal=(()=>{
let bithval=birthday.value

if(bithval==="")
{
  alert("Please enter your birthday")
}
else{
  let age=getAge(bithval)
  result.innerText=`Your age is ${age} ${age>1 ? "year":"years"} old`
  
}
})

let getAge=((bithval)=>{
  let today = new Date();
  let birtDate=new Date(bithval)
  let age=today.getFullYear() - birtDate.getFullYear()
  let month=today.getMonth()-birtDate.getMonth()
  if(month<0||(month===0 &&today.getDate()<birtDate.getDay()))
  {
    age--;
  }
  return age
})

butt.addEventListener("click",Agecal)