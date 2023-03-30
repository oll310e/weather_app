import getCityWeather from "./getCityWeather";
import displayWeather from "./displayWeather";

async function submitCityInput(event) {
  event.preventDefault();
  const cityInput = document.querySelector("#cityInput").value.toLowerCase();
  let weather;
  try {
    weather = await getCityWeather(cityInput);
    displayWeather(cityInput, weather);
  } catch (err) {
    cityInput.length == 0
      ? alert(`Please input a city`)
      : alert(`${cityInput} is not a valid city`);
  }
}

export default submitCityInput;
