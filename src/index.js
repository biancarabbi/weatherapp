// homework week 4
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function searchCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-search");
  cityElement.innerHTML = cityInput.value;

  search(cityInput.value);
}

let searchForm = document.querySelector("#find-city");
searchForm.addEventListener("submit", searchCity);
// end homework week 4

// homework week 5
function search(city) {
  let apiKey = "b44bf0cf8936f7dcf09221d3a954213b";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let temp = Math.round(response.data.main.temp);
  let heading = document.querySelector("#temp");
  heading.innerHTML = temp;
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
}

navigator.geolocation.getCurrentPosition(showPosition);
// end homework 5
