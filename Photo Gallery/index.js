const btnEl=document.getElementById("btn")
const errorEl=document.getElementById("error")
const photosEl=document.getElementById("photos")


async function fetchImage(){
  const inputValue=document.getElementById("input").value
  if(inputValue>10 || inputValue<1)
    {
     errorEl.style.display="block"
     errorEl.textContent="Please enter a number between 0 and 10"
     return
    }
     url=""
    try {
      await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random() *100)}&client_id=wvP9Z9fjJS-10rnbZpq_PXP1ic9Juy9_Cjqn5FbLghg`).then((res)=>res.json().then((data)=>{
        
        
        if(data)
        {
          btnEl.style.display="none"
          data.forEach((pic) => {
            url += `<img src=${pic.urls.small} alt="image"/>`
            photosEl.style.display="block"
            photosEl.innerHTML=url
             btnEl.style.display="block"
          });
        }
        errorEl.style.display="none"
        
        })
        )
    } catch (error) {
        errorEl.style.display="block"
      errorEl.innerText="An error happend, Try again later"
       btnEl.style.display="block"
    }
   
}
btnEl.addEventListener("click",fetchImage)