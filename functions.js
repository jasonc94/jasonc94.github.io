// JavaScript Document
$(document).keydown(function (evt) {
    if (evt.keyCode == 39 || evt.keyCode == 40) { // Right arrow, Down arrow
        evt.preventDefault();
        // Actual code
    } else { 
        if (evt.keyCode == 37 || evt.keyCode == 38) { // Left arrow, Up arrow
            evt.preventDefault();
            // Actual code
        }
    }
});