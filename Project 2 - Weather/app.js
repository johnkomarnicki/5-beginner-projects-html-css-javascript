const apiKey = "339d698f17ac0be62378718a872f23c1";
const city = document.querySelector(".city-input");
const searchCity = document.querySelector(".submit-city");
const currentWeather = document.querySelector(".current-weather");
const cityTitle = document.querySelector(".city-title");
const currentTemp = document.querySelector(".current-temp");
const highTemp = document.querySelector(".high-temp");
const lowTemp = document.querySelector(".low-temp");

const getWeather = async () => {
  const getCityInfo = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city.value}&appid=${apiKey}`
  );
  const latLon = { lat: getCityInfo.data[0].lat, lon: getCityInfo.data[0].lon };
  const getWeather = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${apiKey}&units=imperial`
  );
  currentTemp.innerHTML = Math.round(getWeather.data.main.temp);
  highTemp.innerHTML = Math.round(getWeather.data.main.temp_max);
  lowTemp.innerHTML = Math.round(getWeather.data.main.temp_min);
  cityTitle.innerHTML = city.value;
};

searchCity.addEventListener("click", () => {
  currentWeather.classList.remove("display-none");
  getWeather();
});

getWeather();
