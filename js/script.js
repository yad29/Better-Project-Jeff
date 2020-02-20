//Start up function to be called when the page loads

//startup will establish event handlers

function startup() {
    var ev = document.getElementById("column");
    //start of touch
    ev.addEventListener("touchstart", handleStart, false);
    //end of touch
    ev.addEventListener("touchend", handleEnd, false);
    //cancelled touch
    ev.addEventListener("touchcancel", handleCancel,false);

}
//activate

document.addEventListener("ContentLoaded", startup);
//array to hold touches in progress
var onGoingTouch = [];

//config handleStat

function handleStart(event) {
    event.preventDefault(); // prevents browser from responding
    console.log("im seeing a touchStart");

}