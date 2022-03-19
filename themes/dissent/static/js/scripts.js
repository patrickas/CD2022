// The spacing of the submenus for screen (in pixels).
let menuTopSpacing = 24;
let menuLeftSpacing = 90;

const countDownDate = new Date("Aug 20, 2022").getTime();

let now = new Date().getTime();
let timeDifference = countDownDate - now;

document.addEventListener("DOMContentLoaded", function(){
    if (document.getElementById("days_counter")) {
        document.getElementById("days_counter").innerHTML = Math.floor(timeDifference / (1000 * 60 * 60 * 24)).toString();
    }

    // let menuBackground = document.getElementById("header_background");
    // let mainImageContainer = document.getElementById("main_image_container");
    // window.addEventListener("scroll", function(){
    //     if (document.documentElement.scrollTop > mainImageContainer.offsetHeight) {
    //         menuBackground.style.display = "block";
    //     } else {
    //         menuBackground.style.display = "none";
    //     }
    // });

    //document.getElementById("hamburger_menu_button").addEventListener("click", toggleMenuVisibility);

    document.body.addEventListener("click", resetSubmenus);
    // document.body.addEventListener("click", resetMobileSubmenus);

    let menuItems = document.getElementsByClassName("menu-item");
    let mobileMenuItems = document.getElementsByClassName("hamburger-menu-item");

    for (let i = 0; i < menuItems.length; i++) {
        let submenu = menuItems[i].getAttribute("data-submenu");

        // The menu has a submenu.
        if (submenu && submenu !== "none") {
            menuItems[i].addEventListener("mouseover", showSubmenu, false);
        }
    }

    for (let i = 0; i < mobileMenuItems.length; i++) {
        let submenu = mobileMenuItems[i].getAttribute("data-submenu");

        // The menu has a submenu.
        if (submenu && submenu !== "none") {
            mobileMenuItems[i].addEventListener("click", toggleMobileSubmenu, false);
        }
    }

        // menuItems[i].addEventListener("mouseout", resetSubmenus, false);
});

function showSubmenu ()
{
    resetSubmenus();

    let submenuId = this.getAttribute("data-submenu");

    if (submenuId !== "none") {
        let submenu = document.getElementById(submenuId);
        let parentPosition = this.getBoundingClientRect();

        submenu.style.top = (parentPosition.top + menuTopSpacing).toString() + "px";
        submenu.style.left = (parentPosition.left + menuLeftSpacing).toString() + "px";
        submenu.style.display = "block";
    }
}

function toggleMobileSubmenu()
{
    resetMobileSubmenus();

    let submenuId = this.getAttribute("data-submenu");

    if (submenuId !== "none") {
        let submenu = document.getElementById(submenuId);

        if (submenu.classList.contains("mobile-submenu-open")) {
            submenu.classList.replace("mobile-submenu-open", "mobile-submenu-closed");
        } else {
            submenu.classList.replace("mobile-submenu-closed", "mobile-submenu-open");
        }
    }
}

function resetSubmenus ()
{
    let submenuItems = document.getElementsByClassName("submenu");

    for (let i = 0; i < submenuItems.length; i++) {
        submenuItems[i].style.display = "none";
    }
}

function resetMobileSubmenus ()
{
    let mobileSubmenuItems  = document.getElementsByClassName("hamburger-submenu");

    for (let i = 0; i < mobileSubmenuItems.length; i++) {
        mobileSubmenuItems[i].classList.replace("mobile-submenu-open", "mobile-submenu-closed");
    }
}

function toggleMenuVisibility ()
{
    toggleVisibility(document.getElementById("hamburger_menu_window"));
}

function toggleVisibility (element)
{
    if (element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "";
    }
}
