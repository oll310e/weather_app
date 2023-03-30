const weatherText = document.querySelector("#weatherText");
const cityText = document.querySelector("#cityText");

function displayWeather(city, weather) {
  let cityArray = city.split("");
  cityArray[0] = cityArray[0].toUpperCase();
  city = cityArray.join("");

  weatherText.innerText = weather;
  cityText.innerText = city;
}

export default displayWeather;
