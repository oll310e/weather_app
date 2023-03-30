async function getCityWeather(city) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=5f86822352a641e5bba95540232803&q=${city}`
  );
  const json = await response.json();
  return json.current.condition.text;
}

export default getCityWeather;
