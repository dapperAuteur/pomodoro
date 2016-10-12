function msToTime(duration) {
    //declare function name it msToTime and give it an argument called duration
    var milliseconds = parseInt((duration % 1000) / 100);
    //declare a variable and name it milliseconds, set it to remainder of duration divided by 1000, then divide that by 100, then apply the parseInt function that accepts a string and returns an integer
    var seconds = parseInt((duration / 1000) % 60);
    //declare a variable and name it seconds, set it to duration divided by 1000, the result is then divided by 60 and apply the parseInt to the remainder
    var minutes = parseInt((duration / (1000 * 60)) % 60);
    //declare a variable and name it minutes, set it to duration divided by (1000 * 60), the result is then divided by 60 and apply the parseInt to the remainder
    var hours = parseInt((duration / (1000 * 60 * 60)) % 24);
    //declare a variable and name it hours, set it to duration divided by (1000 * 60 * 60), the result is then divided by 24 and apply the parseInt to the remainder

    hours = (hours < 10) ? "0" + hours : hours;
    //if hours is less than 10 concantenate 0 + hours and set it to hours else hours = hours
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    //if minutes is less than 10 concantenate 0 + minutes and set it to minutes else minutes = minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    //if seconds is less than 10 concantenate 0 + seconds and set it to seconds else seconds = seconds

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    //return hours contantenated to ':' contantenated to minutes contantenated to ':' contantenated to seconds contantenated to '.' contantenated to milliseconds
}

var secondsLeft;
var hhMmSs;// = msToTime(secondsLeft);
// hhMmSs = msToTime(secondsLeft);
// document.getElementById('focus').innerHTML = hhMmSs;
//declare a variable and call it secondsLeft & set it to newFocusTime in HTML
var timerRunning = 0;

function decreaseSeconds() {
 secondsLeft -= 1;
 hhMmSs = msToTime(secondsLeft); 
 document.getElementById('focus').innerHTML = hhMmSs;
 console.log(secondsLeft);
 // return hhMmSs;
 // Update the timer on the screen to show the new secondsLeft
 return secondsLeft;
}

function convertSecondsLeft() {
    hhMmSs = msToTime(secondsLeft);
    console.log(secondsLeft);
    console.log(hhMmSs);

}

function startTimer() {
    focus = document.getElementById('newFocusTime').innerHTML // Or some other value
    secondsLeft = focus * 60 * 1000;
    //hhMmSs = msToTime(secondsLeft);
    timerRunning = 1;
    console.log(timerRunning);
    if (timerRunning == 1) {
        var countDown = setInterval(function() {
        decreaseSeconds();
        convertSecondsLeft();
        console.log(secondsLeft);
        console.log(hhMmSs);
        // console.log(hhMmSs);
        if (secondsLeft <= 0) {
            //if all values are 0, run the following code
          clearInterval(countDown);
          //clear
          focusTimeLeft = 0;
          //set focusTimeLeft to 0
            }
        }, 10);
    } else {
        stopCountTheSeconds();
        timerRunning = 0;
    }

    
}