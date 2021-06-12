const APIKEY = "999f84c7f5fb31dabe7ca36b796248ea";
const url = (city, key) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`;




async function getWeatherByLocation(city) {
    const wtrEl = document.getElementById("wtr");
    const resp = await fetch(url(city));
    const respData = await resp.json();
    addWeatherToPage(respData, wtrEl);
}

function addWeatherToPage(data, where) {
    const temp = data.main.temp;
    const icon = data.weather[0].icon+".png"
    where.innerHTML = `
        <img src="https://openweathermap.org/img/w/${icon}"/><span>${Math.floor(temp)}°C</span>   
        `;
}


