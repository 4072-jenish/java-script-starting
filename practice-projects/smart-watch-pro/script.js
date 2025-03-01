function updateTime() {
    let timeDisplay = document.getElementById('time');
    let dateDisplay = document.getElementById('date');
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    timeDisplay.textContent = hours + ':' + minutes;
    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = currentTime.toLocaleDateString(undefined, dateOptions);
}
setInterval(updateTime, 1000);
updateTime();