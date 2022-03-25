// fetch("https://api.unsplash.com/photos/random/?client_id=")
// .then(res => res.json())
// .then(data => {
//     document.body.style.backgroundImage = `url(${data.urls.regular})`;
//     document.getElementById("author").textContent = `By: ${data.user.name}`;
// });

let timeDisplay = document.getElementById("time");
let greeting = document.getElementById("greeting");

function currentTime(){
    const date = new Date();
    timeDisplay.textContent =  date.toLocaleTimeString("en-us", {timeStyle: "long"})
    if(date.toLocaleTimeString("en-us", {timestyle: "long"}).includes("PM")){
        greeting.textContent = "Good evening!";
    } else {
        greeting.textContent = "Good morning!";
    };
};

currentTime();
// setInterval(currentTime, 1000);

