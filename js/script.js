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
    const icon = data.weather[0].icon + ".png"
    where.innerHTML += `
        <img src="https://openweathermap.org/img/w/${icon}"/>
        <span>${Math.floor(temp)}°C</span>   
        `;
}

function checkInTime(div) {
    const becsengetes = [[8, 0],
    [8, 50],
    [9, 40],
    [10, 30],
    [11, 20],
    [12, 10],
    [12, 55],
    [13, 40]
    ]
    const kicsengetes = [[8, 40],
    [9, 30],
    [10, 20],
    [11, 10],
    [12, 00],
    [12, 50],
    [13, 35],
    [14, 20]
    ]

    var currentTime = new Date()
    var startTime = new Date()
    var endTime = new Date()

    const zeroPad = (num, places) => String(num).padStart(places, '0')

    for (var i = 0; i < kicsengetes.length; i++) {
        startTime.setHours(becsengetes[i][0])
        startTime.setMinutes(becsengetes[i][1])
        endTime.setHours(kicsengetes[i][0])
        endTime.setMinutes(kicsengetes[i][1])
        if ((currentTime.getTime() >= startTime.getTime()) && (currentTime.getTime() < endTime.getTime())) {
            div.innerHTML = `${i + 1}. óra: ${zeroPad(becsengetes[i][0], 2)}:${zeroPad(becsengetes[i][1], 2)} - ${zeroPad(kicsengetes[i][0], 2)}:${zeroPad(kicsengetes[i][1], 2)}`
            return
        }
    }
    div.innerHTML = "&nbsp;"
    return
}


