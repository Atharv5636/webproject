const apiKey = "59b302b88bc28d24b0c574cb94baba8a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
  const data = await response.json();

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    const weatherType = data.weather[0].main;

    // Set weather icon
    if (weatherType == "Clouds") {
      weatherIcon.src = "/images/clouds.png";
    } else if (weatherType == "Clear") {
      weatherIcon.src = "/images/clear.png";
    } else if (weatherType == "Rain") {
      weatherIcon.src = "/images/rain.png";
    } else if (weatherType == "Drizzle") {
      weatherIcon.src = "/images/drizzle.png";
    } else if (weatherType == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    // 🌈 Change background based on weather
   // 🌈 Change background based on weather
if (weatherType.includes("Cloud")) {
  document.body.style.backgroundImage = "url('/images/cloudyy.jpg')";
} else if (weatherType.includes("Rain")) {
  document.body.style.backgroundImage = "url('/images/rainny.jpg')";
} else if (weatherType.includes("Clear")) {
  document.body.style.backgroundImage = "url('/images/sunny.jpg')";
} else if (weatherType.includes("Drizzle")) {
  document.body.style.backgroundImage = "url('/images/dizzle.jpg')";
} else if (weatherType.includes("Mist")) {
  document.body.style.backgroundImage = "url('/image/mist.jpg')";
} else {
  document.body.style.backgroundImage = "linear-gradient(to right, #bdc3c7, #2c3e50)";
}

document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";


    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
