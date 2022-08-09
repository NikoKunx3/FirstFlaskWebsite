var timeDisplay = document.getElementById("time");

function refreshTime()
{
    var time = new Date();
    var timeString = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

    timeDisplay.innerHTML = timeString;
}

setInterval(refreshTime, 1000);