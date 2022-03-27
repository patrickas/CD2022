const countDownDate = new Date("Aug 20, 2022").getTime();

let now = new Date().getTime();
let timeDifference = countDownDate - now;
var sticky;
var header ;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function sticky_add_remove() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
document.addEventListener("DOMContentLoaded", function(){
    if (document.getElementById("days_counter")) {
        document.getElementById("days_counter").innerHTML = Math.floor(timeDifference / (1000 * 60 * 60 * 24)).toString();
    }

	// When the user scrolls the page, execute myFunction
	window.onscroll = function() {sticky_add_remove()};

	// Get the header
	header = document.getElementById("sticky-menu-desktop");

	// Get the offset position of the navbar
	sticky = header.offsetTop;

});

const isVisible = elem => !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length ) // source (2018-03-11): https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.j

const outsideClickListener = event => {
	var hmenu_checkbox = document.getElementById('hmenu_checkbox');
	var hamburger_showing = hmenu_checkbox.checked;

	//Hide the hamburger menu is showing
	element = document.getElementById('hmenu');
	if (!element.contains(event.target) && hamburger_showing ) { // or use: event.target.closest(selector) === null
		hmenu_checkbox.click();
	}

	//hide the popup if showing
	if (window.popup_showing && !window.popup_showing.contains(event.target) ) { // or use: event.target.closest(selector) === null
		window.popup_showing.parentElement.style.display='none';
		window.popup_showing = null;
	}
}
	
document.addEventListener('click', outsideClickListener);

function toggleVisibility (element)
{
    if (element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "";
    }
}

