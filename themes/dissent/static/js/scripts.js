const countDownDate = new Date("Aug 20, 2022").getTime();

let now = new Date().getTime();
let timeDifference = countDownDate - now;

document.addEventListener("DOMContentLoaded", function(){
    if (document.getElementById("days_counter")) {
        document.getElementById("days_counter").innerHTML = Math.floor(timeDifference / (1000 * 60 * 60 * 24)).toString();
    }
});


function toggleVisibility (element)
{
    if (element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "";
    }
}

