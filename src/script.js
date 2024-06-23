function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-city");
  let citySearch = document.querySelector("#city");
  citySearch.innerHTML = searchInput.value;
}
let searchFormCity = document.querySelector("#search-form");
searchFormCity.addEventListener("submit", searchSubmit);
