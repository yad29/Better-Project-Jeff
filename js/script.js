// start up function to be called when the page loads
// startup will establish event handlers
function startup() { //windowload
    var btn = document.getElementById("mybtn");
    var statusbox = document.getElementById("statusbox")
    var startpos = 0;
    var distance = 0;
    //start of touch
    btn.addEventListener("touchstart", function(start) {
        var touchArea = start.changedTouches[0]; // takes first point of touch
        startpos = parseInt(touchArea.clientX); // takes value (positon of touch relative to the left most side of the browser) and parses to an int value.
        statusbox.innerHTML = "Status HTML: touchstart <br> Client X: " + startpos + "px";
        alert(this.id + "congrats u tocuhed it");
        start.preventDefault(); // prevent default associated act from occuring
    }, false);

    // end of touch
    btn.addEventListener("touchend", function(end) {
        var touchArea = end.changedTouches[0];
        statusbox.innerHTML = "Status HTML: ending touch<br> Client X: " + touchArea.clientX + "px"; 
        end.preventDefault();
    }, false);

    // cancelled touch
    btn.addEventListener("touchcancel", function(cancel) {
        var touchArea;

    }, false);

    // movement
    btn.addEventListener("touchmove", function(move) {
        var touchArea = move.changedTouches[0];
        distance = parseInt(touchArea.clientX) - startpos;
        statusbox.innerHTML = "Status: touchmove<br> side distance traveled: " + dist + "px"
    }, false);

}

document.addEventListener("DOMContentLoaded", startup)
