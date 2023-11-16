let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
/*let city = prompt("Enter a city");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5) + 32;
  let humidity = weather[city].humidity;
  alert(
    "It is currently" +
      celsiusTemperature +
      "°C" +
      fahrenheitTemperature +
      "°F in " +
      city +
      "with a humidity of " +
      humidity
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}

function updateTime() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();

  let updateTime = `Today is ${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;

  return updateTime;
}

let h1 = document.querySelector("h1");
h1.innerHtml = updateTime;

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("city-input");
  //console.log(input.value);
  alert("searching for" + cityInput.value);
}
let cityForm = document.querySelector("city-form");
cityForm.addEventListener("search", searchCity);
*/
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Sydney&key=1dbf926d3b4417bf379db7043bec1047";
let apiKey = "1dbf926d3b4417bf379db7043bec1047";
let city = "sydney";

function displayTemp(response) {
  //display temp with a log
  console.log(response.data.temperature.current);
  //change the temp on the page based on the city you select.
  let temperatureElement = document.querySelector("#city-name");
  temperatureElement.innerHTML = `${city}\n${responnse.data.temperature.current}`;
}
//anxios function
axios.get(apiUrl).then(dipslayTemp);
