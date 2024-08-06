const api='https://icanhazdadjoke.com/'
const JokeButtonEl=document.getElementById("Joke_button")
// var limit = 1
const jokeEl=document.getElementById("joke")



let getjoke= async()=>{
 

 try {
  jokeEl.innerText="upadting..."
  JokeButtonEl.disabled=true
  JokeButtonEl.innerText="Loading..."
  const response= await fetch(api,{
    headers:{
      "Accept": "application/json",
    }

  })


  const data= await response.json()
  JokeButtonEl.disabled=false
  JokeButtonEl.innerText="Tell me a joke"
 jokeEl.innerText=data.joke
  
 } catch (error) {
  jokeEl.innerText="An error happened, try again later"
  JokeButtonEl.disabled=false
   JokeButtonEl.innerText="Tell me a joke"
 }
   
  
}
getjoke()
JokeButtonEl.addEventListener("click",getjoke)