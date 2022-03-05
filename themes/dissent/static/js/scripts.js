const countDownDate = new Date("Aug 20, 2022 15:37:25").getTime();

let now = new Date().getTime();
let timeDifference = countDownDate - now;

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("days_counter").innerHTML = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // let menuBackground = document.getElementById("header_background");
    // let mainImageContainer = document.getElementById("main_image_container");
    // window.addEventListener("scroll", function(){
    //     if (document.documentElement.scrollTop > mainImageContainer.offsetHeight) {
    //         menuBackground.style.display = "block";
    //     } else {
    //         menuBackground.style.display = "none";
    //     }
    // });

    document.getElementById("hamburger_menu_button").addEventListener("click", toggleMenuVisibility);

});

function toggleMenuVisibility () {
    toggleVisibility(document.getElementById("hamburger_menu_window"));
}

function toggleVisibility (element) {
    if (element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "";
    }
}