const weatherHtml = document.getElementById("weather")
const where = document.getElementById("where");
const sky = document.getElementById("sky");
const temperature = document.getElementById("temperature");
const feelTemperature = document.getElementById("feel-temperature");
const API_KEY = "597bcc3981992d19af2776fded1fcd86";

function weather(data) {
    where.innerText = `location: ${data.name}`;
    sky.innerText = `sky: ${data.weather[0].main}`;
    temperature.innerText = `온도: ${data.main.temp}`; 
    feelTemperature.innerText = `체감온도: ${data.main.feels_like}`;
    weatherHtml.classList.remove("hidden");
}

function onSucess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url).then((response) => response.json())
    .then((data) => weather(data))
}

function onFailed() {
    alert("We can't get to know where you are!!")
}

navigator.geolocation.getCurrentPosition(onSucess, onFailed)

