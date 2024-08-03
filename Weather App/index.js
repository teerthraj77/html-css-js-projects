const apikey="615fcf3e46fdeba13686bde17f58d03c"
const weatherDataEl=document.getElementById("weather-data")
const cityInputEL=document.getElementById("city-input")
const formEl=document.querySelector("form")

formEl.addEventListener("submit",(event)=>{
  event.preventDefault()
  const cityValue=cityInputEL.value
 getWeatherData(cityValue)
  
})
let   getWeatherData= async (cityValue)=>{
try {
const response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)
if(!response.ok)
{
  throw new Error("Failed to fetch data")
}
const data=await response.json()

const temperature=Math.round(data.main.temp)


const description=data.weather[0].description

const icon=data.weather[0].icon

const details=[
  `Feels like:${Math.round(data.main.feels_like)}`,
  `Humidity:${data.main.humidity}%`,
  `Wind speed:${data.wind.speed} m/s`,
]
console.log(data);
weatherDataEl.querySelector(".icon").innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png">`
weatherDataEl.querySelector(".temperature").textContent=`${temperature}°C`
weatherDataEl.querySelector(".descripation").textContent=description
weatherDataEl.querySelector(".details").innerHTML=details.map((detail)=>
  `<div>${detail}</div>`).join("")
} catch (error) {
  weatherDataEl.querySelector(".icon").innerHTML=""
  weatherDataEl.querySelector(".temperature").textContent=""
  weatherDataEl.querySelector(".descripation").textContent=""
  weatherDataEl.querySelector(".details").innerHTML="Please Enter correct city name"
}

}