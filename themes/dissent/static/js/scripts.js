// The spacing of the submenus (in pixels).
let menuTopSpacing = 24;
let menuLeftSpacing = 0;

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

    document.body.addEventListener("click", resetSubmenu);

    let menuItems = document.getElementsByClassName("menu-item");

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("mouseover", showSubmenu, false);
        // menuItems[i].addEventListener("mouseout", resetSubmenu, false);
    }

});

function showSubmenu () {
    resetSubmenu();

    let submenuId = this.getAttribute("data-submenu");

    if (submenuId !== "none") {
        let submenu = document.getElementById(submenuId);
        let parentPosition = this.getBoundingClientRect();

        submenu.style.top = (parentPosition.top + menuTopSpacing).toString() + "px";
        submenu.style.left = (parentPosition.left + menuLeftSpacing).toString() + "px";
        submenu.style.display = "block";
    }
}

function resetSubmenu () {
    let submenuItems = document.getElementsByClassName("submenu");
    for (let i = 0; i < submenuItems.length; i++) {
        submenuItems[i].style.display = "none";
    }
}

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