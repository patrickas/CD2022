const countDownDate = new Date("Aug 20, 2022 15:37:25").getTime();

let now = new Date().getTime();
let timeDifference = countDownDate - now;

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("days_counter").innerHTML = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
});
