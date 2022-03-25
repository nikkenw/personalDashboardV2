fetch("https://api.unsplash.com/photos/random/?client_id=CM2VusAtfu7pEwBuF3UqDtkdWg5C7qwbNAlO1vYth5o")
.then(res => res.json())
.then(data => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById("author").textContent = `By: ${data.user.name}`;
});

let timeDisplay = document.getElementById("time");
let greeting = document.getElementById("greeting");

function currentTime(){
    const date = new Date();
    timeDisplay.textContent =  date.toLocaleTimeString("en-us", {timeStyle: "medium"})
    if(date.toLocaleTimeString("en-us", {timestyle: "long"}).includes("PM")){
        greeting.textContent = "Good evening!";
    } else {
        greeting.textContent = "Good morning!";
    };
};

setInterval(currentTime, 1000);

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=e99ffde294f8eaedae7d7eae2c8a4e15`)
    .then(res => {
        if(!res.ok){
            throw Error("Weather data not available.");
        }
        return res.json();
    })
    .then(data => {
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.getElementById("weather").innerHTML = `
            <img src=${iconUrl} />
            <p class="weather-temp">${Math.round(data.main.temp)}º</p>
            <p class="weather-city">${data.name}</p>
        `
    })
    .catch(err => console.error(err));
})

