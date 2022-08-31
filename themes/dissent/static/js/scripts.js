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
	//Set the main page counter
    if (document.getElementById("days_counter")) {
        document.getElementById("days_counter").innerHTML = Math.floor(timeDifference / (1000 * 60 * 60 * 24)).toString();
    }

	// When the user scrolls the page, execute myFunction
	window.onscroll = function() {sticky_add_remove()};

	// Get the header
	header = document.getElementById("sticky-menu-desktop");

	// Get the offset position of the navbar
	sticky = header.offsetTop;
	
	
	
	document.addEventListener('keydown', function(e) {
		//console.log( e.keyCode )
		switch (e.keyCode) {
			case 27:
				closeall();
				break;
			case 37:
				prev();
				break;
			case 39:
				next();
				break;
		}
	});	
	
});

const isVisible = elem => !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length ) // source (2018-03-11): https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.j

const outsideClickListener = event => {
	var hmenu_checkbox = document.getElementById('hmenu_checkbox');
	var hamburger_showing = hmenu_checkbox.checked;

	//Hide the hamburger menu is showing
	element = document.getElementById('hmenu');
	if (!element.contains(event.target) ) {
		hide_menu()
	}

	//hide the popup if showing
	if (window.popup_showing && !window.popup_showing.contains(event.target) ) { // or use: event.target.closest(selector) === null
		window.popup_showing.parentElement.style.display='none';
		window.popup_showing = null;
		if (window.popup_showing_id) {
			//document.getElementById(id).src='';
			document.getElementById(window.popup_showing_id).contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
			window.popup_showing_id=null;
		}
	}
}
function hide_menu() {
	//Hide the hamburger menu if showing
	var hmenu_checkbox = document.getElementById('hmenu_checkbox');
	if (hmenu_checkbox && hmenu_checkbox.checked) { hmenu_checkbox.click(); } ;
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

function popup ( target) {	document.querySelectorAll('.popup').forEach(function(e){e.style.display='none';});target.nextElementSibling.style.display='block'; setTimeout( function() {window.popup_showing=target.nextElementSibling.firstChild;} , 500); }
function hideparent( target , id) {
	target.parentElement.parentElement.parentElement.style.display='none'; window.popup_showing=null;
	if (id) {
		//document.getElementById(id).src='';
		document.getElementById(id).contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
	}
}

function ExpandCollapse (element) {
    if (element.classList.contains("collapsed")) {
    	element.classList.remove("collapsed");
    } else {
    	element.classList.add("collapsed");
    }
}


function popupvideo ( target , id ) {
	document.querySelectorAll('.mediapopup').forEach(function(e){e.style.display='none'; });
	//document.getElementById(id).src='https://www.youtube.com/embed/'+id;
	target.nextElementSibling.style.display='block'; 
	setTimeout( function() {
		window.popup_showing=target.nextElementSibling.firstChild;
		window.popup_showing_id=id;
		if (id) document.getElementById(id).contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
	} , 500); 
	setTimeout( function() {
		if (id) document.getElementById(id).contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
	} , 1000); 
}

function select_adjacent( f ) {
	var currently_selected;
	var to_select;
	var done;
	f ( document.querySelectorAll('.mediapopup') ).forEach(function(e){
		if (done) return;
		if (currently_selected) {
			to_select = done = e;
			return;
		}
		if (e.style.display == 'block' ) {
			currently_selected = e;
			e.style.display='none';
			return;
		}
	});
	if (currently_selected && to_select) {
		//console.log(currently_selected , to_select);
		to_select.style.display='block';
	}
}

function next () {
	return select_adjacent( function(a){ return a} );
}
function prev() {
	return select_adjacent( function(a){ 
			var elements = [...a];
			return elements.reverse();
		} );
}

function closeall() {
		document.querySelectorAll('.close') .forEach(function(e){
			e.click();
	});

}