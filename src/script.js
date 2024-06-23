// sources weather details from axios api, via search Input
function refreshWeather(response) {
  let temperature = document.querySelector("#weather-temp");
  let temp = response.data.temperature.current;
  let citySearch = document.querySelector("#city");

  citySearch.innerHTML = response.data.city;
  temperature.innerHTML = Math.round(temp);

  //   console.log(response.data.temperature.current);
  //   console.log(response.data.temperature.feels_like);
  //   console.log(response.data.condition.description);
  //   console.log(response.data.temperature.humidity);
  //   console.log(response.data.wind.speed);
}

// sets api search funtion, sourcing city from searchInput
// establishes axios function to retrive weather details
function searchCity(city) {
  let apiKey = "9e058oe463d4208a93884ffdc59t0b6e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-city");
  // moved next 2 lines to refreshWeather function and modified to return API city name.
  //   let citySearch = document.querySelector("#city");
  //   citySearch.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormCity = document.querySelector("#search-form");
searchFormCity.addEventListener("submit", searchSubmit);

searchCity("Melbourne");
