const API_KEY = '33943f31b92e0f3ddba2137f9d5112c5'

const locationBtn = document.querySelector('button')
const rain = document.querySelector('#rain');
const noRain = document.querySelector('#noRain');

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData)
}

const fetchData = async (position) => {
    const { latitude, longitude } = position.coords;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}`)

    const { daily } = await response.json()
    console.log(daily)
    const { weather } = daily[0]

    const rains = weather[0].main

    const isRaining = weather[0].main.toLowerCase().includes("rain")

    console.log("llueve?:", isRaining)
    if (isRaining) {
        rain.style.display = 'block';
    } else {
        noRain.style.display = 'block';
    }

}

locationBtn.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert(" not support geolocation api");
    }

})
function success(position) {
    console.log(position)
}
function error(error) {

}