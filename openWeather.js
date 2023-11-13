const key = ""
const url = "http://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox = document.querySelector('.searchBar input');
const searchButton = document.querySelector('.searchBar button');
const icon = document.querySelector('.icon');

async function weatherCheck(city) {
    const response = await fetch(url + city + `&appid=${key}`)
    var data = await response.json()

    document.querySelector('.weather').style.display = "flex"

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
    document.querySelector('.cloud').innerHTML = data.clouds.all + "%";

    if (data.weather[0].main == "Clouds") {
        icon.src = "resource/clouds.png"
    } else if (data.weather[0].main == "Rain") {
        icon.src = "resource/rain.png"
    } else if (data.weather[0].main == "Drizzle") {
        icon.src = "resource/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
        icon.src = "resource/mist.png"
    }
}

searchButton.addEventListener("click", () => {
    weatherCheck(searchBox.value);
})
