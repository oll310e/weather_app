import "./style.css";

async function getCityWeather(city) {
  city = city.toLowerCase();

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=5f86822352a641e5bba95540232803&q=${city}`
  );
  const json = await response.json();
  console.log(json.current.condition.text);
}

getCityWeather("gothenburg");
