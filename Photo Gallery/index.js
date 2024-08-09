const btnEl=document.getElementById("btn")


function fetchImage(){
  const inputValue=document.getElementById("input").value
  fetch(`https://api.unsplash.com/search/photos?per_page=${inputValue}&page=1&client_id=wvP9Z9fjJS-10rnbZpq_PXP1ic9Juy9_Cjqn5FbLghg`).then((res)=>res.json().then((data)=>{
    console.log(data);
    
  })
  )
}
btnEl.addEventListener("click",fetchImage)