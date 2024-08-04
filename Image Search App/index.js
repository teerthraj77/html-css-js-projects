const accesskey="mW2vYoKp4mXnJ6VUE0o40iSCm75KYH-CZOvExhI7i_k"
const formEl=document.querySelector("form")
const searchInputEl=document.getElementById("search-input")
const searchresultsEll=document.querySelector(".search-results")
const showmoreEl=document.getElementById("show-more")

let inputData=""
let page=1
let searchImages= async () =>{
 inputData=searchInputEl.value
 const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`

const response=await fetch(url)
const data= await response.json()

if(page==1)
{
searchresultsEll.innerHTML=""
}

const results=data.results
results.map((result)=>{
  const imageWrapper=document.createElement("div")
  imageWrapper.classList.add("search-result")
  const image=document.createElement("img")
  image.src=result.urls.small
  image.alt=result.alt_description
  const imageLink=document.createElement("a")
  imageLink.href=result.links.html
  imageLink.target="_blank"
  imageLink.textContent=result.alt_description

  imageWrapper.appendChild(image)
  imageWrapper.appendChild(imageLink)
  searchresultsEll.appendChild(imageWrapper)
})
page++

if(page>1)
{
  showmoreEl.style.display="block"
}



}

formEl.addEventListener("submit",(event)=>{
  event.preventDefault()
  page=1
searchImages()
  

})

showmoreEl.addEventListener("click",()=>{
searchImages()
})