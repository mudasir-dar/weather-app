let form=document.querySelector(".form")
let displayBox=document.querySelector("#displayBox")
displayBox.style.display="none"

form.addEventListener("submit", async(event)=>{
    displayBox.style.display="block"

    let cityName=event.target.cityName.value
    event.preventDefault()

    let fetchApi= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0f2fb94282ad6a3dbf2387c407b74806&units=metric`)
    let Response= await fetchApi.json()
    let {name,sys,weather,main}=Response

    if(Response.cod==404 || Response.cod==400){
        displayBox.innerHTML=`Invalid City Name`
    }
    else{

        displayBox.innerHTML=`
                            <h4>${name} <mark>${sys.country}</mark></h4>
                            <h1>${main.temp}</h1>
                            <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" alt="">
                            <p>${weather[0].description}</p>
        
        `
    }

})

displayBox()