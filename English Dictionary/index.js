const inputEl=document.getElementById("input")
const infoTextEl=document.getElementById("info-text")
const meaningContainerEl=document.getElementById("wm")
const wordTitleEl=document.getElementById("word_title")
const wordMeaningEl=document.getElementById("word_meaning")
const audioEl=document.getElementById("audio")

let fetchAip= async (word)=>{
  try {
     infoTextEl.style.display="block"
    meaningContainerEl.style.display="none"
    
    infoTextEl.innerText=`Searching the meaning of "${word}"`
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const result=await fetch(url).then((res)=>res.json())
    if(result.title)
    {
      meaningContainerEl.style.display="block"
      infoTextEl.style.display="none"
      wordTitleEl.innerText=word
      wordMeaningEl.innerText="N/A"
      audioEl.style.display="none"

    }
    else{
      infoTextEl.style.display="none"
      meaningContainerEl.style.display="block"
      audioEl.style.display="inline-flex"
      wordTitleEl.innerText=result[0].word
      wordMeaningEl.innerText=result[0].meanings[0].definitions[0].definition
      audioEl.src=result[0].phonetics[0].audio
    }
   
  } catch (error) {
      infoTextEl.innerText=`An error happend, try again later"`
  }

  
}
inputEl.addEventListener("keyup",(e)=>{


  if(e.target.value && e.key==="Enter")
  {
    fetchAip(e.target.value)
  }
  
})