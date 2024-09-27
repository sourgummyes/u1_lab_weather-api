let button = document.querySelector(`#submitButton`)
let cityName = document.querySelector(`#cityName`)
let timeDisp = document.querySelector("#localTime")
let regions = document.querySelector("#regions")
let weatherIcon = document.querySelector("#weatherIcon")
let weatherName = document.querySelector("#weatherName")
let temp = document.querySelector("#temperature")

button.addEventListener('click', async () => {
    let inputText = document.querySelector("#textInput")
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=8a2eaaa354ea4de2957135446242609&q=${inputText.value}&aqi=yes`)
    console.log(response)
    cityName.innerHTML = `${response.data.location.name}`
    timeDisp.innerHTML = `as of ${response.data.current.last_updated} (Local Time)`
    regions.innerHTML = `${response.data.location.region}, ${response.data.location.country}`
    document.querySelector(`#currentWeatherTitle`).style.opacity = 1;
    weatherIcon.src = response.data.current.condition.icon
    weatherName.innerHTML = response.data.current.condition.text
    temp.innerHTML = `Current Temp: ${response.data.current.temp_f}F. Feels like: ${response.data.current.feelslike_f}F`
})


//