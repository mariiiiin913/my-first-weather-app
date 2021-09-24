function displayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "f349e2ee23209dfceb73379ab0acc0cf";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
