
const targetDate = new Date("2025-12-01T23:59:59");

function Countdown() {
    const currentDate = new Date();
    const product_time = targetDate - currentDate;

    if (product_time <= 0) {
        document.querySelector(".day h2").innerHTML= "0";
        document.querySelector(".hours h2").innerHTML = "0";
        document.querySelector(".min h2").innerHTML = "0";
        document.querySelector(".secound h2").innerHTML = "0";
        clearInterval(countdownInterval); 
        
        return;
    }

    const days = Math.floor(product_time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((product_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((product_time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((product_time % (1000 * 60)) / 1000);

    document.querySelector(".day h2").innerHTML = days;
    document.querySelector(".hours h2").innerHTML = hours;
    document.querySelector(".min h2").innerHTML = minutes;
    document.querySelector(".secound h2").innerHTML = seconds;
}


const countdownInterval = setInterval(Countdown, 1000);
Countdown();