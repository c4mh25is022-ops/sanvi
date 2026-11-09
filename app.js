
function showTime() {
    let now = new Date();

    let time = now.toLocaleTimeString();
    let date = now.toDateString();

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}

setInterval(showTime, 1000);

showTime();
