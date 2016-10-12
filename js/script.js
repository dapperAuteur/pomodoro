// JavaScript Document
//create variable called focusDuration and set its default value to 25 minutes
function focusDuration() {
    //Declare function called focusDuration
    var focus = 25;
    //declare variable called focus and set it to 25
    var focusDurationMS = focus * 60 * 1000;
    //declare variable called focusDurationMS and set it to 25 minutes converted to milliseconds
    var focusDuration = msToTime(focusDurationMS);
    //set focusDuration = to focusDuration after going through msToTime function
    console.log("focus " + focus + " focusDuration " + focusDuration + " focusDurationMS " + focusDurationMS);
    //print the string "focus" concantenated to focus value  "focusDuration" concantanated to the focusDuration value concantanated to "focusDurationMS" string concantanated to focusDurationMS value to the console
    document.getElementById('newFocusTime').innerHTML = focus;
    //Retrieve 'newFocusTime' id from HTML and set it to focusDuration
    document.getElementById('focus').innerHTML = focusDuration;
    //Retrieve 'focus' id from HTML and set it to focusDuration
    var timeObj = {focus: focus, focusDuration: focusDuration, focusDurationMS: focusDurationMS};
    //create object called timeObj
    //add focus value with key focus into timeObj
    //add focusDuration value with key focusDuration into timeObj
    //add focusDurationMS value with key focusDurationMS into timeObj
    var timeObjStr = JSON.stringify(timeObj);
    //declare variable timeObjStr and set it to timeObj converted to JSON string
        if (typeof(Storage) !== "undefined") {
        // check for localStore ability in browser
            localStorage.setItem("timeObjStr",timeObjStr);
            //store timeObjStr value with key timeObjStr in localStorage
        } else {//if Storage == "undefined"
            document.getElementById("newFocusTime").innerHTML = "Sorry, your browser does not support Web Storage...";
            //Retrieve "newFocusTime" from HTML and set it to the string "Sorry, your browser does not support Web Storage..."
        };
}

//create a function to set focusTime from newFocusTime
function setFocus(focusTime) {
    var focus = focusTime;
    //Retrieve 'newFocusTime' id from HTML and set it to focus
    var focusDurationMS = focus * 60 * 1000;
    //declare variable called focusDurationMS and set it to focus converted to milliseconds
    var focusDuration = msToTime(focusDurationMS);
    //set focusDuration = to focusDuration after going through msToTime function

    console.log("focus " + focus + " focusDuration " + focusDuration + " focusDurationMS " + focusDurationMS);
    //print the string "focus" concantenated to focus value  "focusDuration" concantanated to the focusDuration value concantanated to "focusDurationMS" string concantanated to focusDurationMS value to the console
    document.getElementById('newFocusTime').innerHTML = focus;
    //Retrieve 'focus' id from HTML and set it to focus
    document.getElementById('focus').innerHTML = focusDuration;
    //Retrieve 'focus' id from HTML and set it to focusDuration
}
//create a function to set playTime from newPlayTime
function setPlay(playTime) {
    var play = playTime;
    //Retrieve 'newPlayTime' id from HTML and set it to play
    var playDurationMS = play * 60 * 1000;
    //declare variable called playDurationMS and set it to play converted to milliseconds
    var playDuration = msToTime(playDurationMS);
    //set playDuration = to playDuration after going through msToTime function

    console.log("play " + play + " playDuration " + playDuration + " playDurationMS " + playDurationMS);
    //print the string "play" concantenated to play value  playsDuration" concantanated to the playDuration value concantanated to "playDurationMS" string concantanated to playDurationMS value to the console
    document.getElementById('newPlayTime').innerHTML = play;
    //Retrieve 'play' id from HTML and set it to play
    document.getElementById('play').innerHTML = playDuration;
    //Retrieve 'play' id from HTML and set it to playDuration
}
//create function called playDuration() that declares a variable called playDuration and set its default value to 5 minutes , then returns that value
function playDuration() {
    //Declare function called playDuration
    var play = 5;
    //declare variable called play and set it to 5
    var playDurationMS = play * 60 * 1000;
    //declare variable called playDurationMS and set it to 5 minutes converted to milliseconds
    playDuration = msToTime(playDurationMS);
    //set playDuration = to playDuration after going through msToTime function
    console.log("play " + play + " playDuration " + playDuration + " playDurationMS " + playDurationMS);
    //print the string "play" concantenated to play value "playDuration" concantanated to the playDuration value to "playDurationMS" to playDurationMS value to the console
    document.getElementById('newPlayTime').innerHTML = play;
    //Retrieve 'newPlayTime' id from HTML and set it to playDuration
    document.getElementById('play').innerHTML = playDuration;
    //Retrieve 'play' id from HTML and set it to playDuration
}
//create a function to convert milliseconds to hh:mm:ss:ms
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
    stopResetButton();
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
        stopResetButton();
    }

    
}
function stopResetButton() {
    var stopResetButton = '<button type="button" class="btn btn-danger" id="resetTime">Reset Time</button>';
    if (timerRunning == 0) {
        document.getElementById('stopTime').innerHTML = stopResetButton;
        
        } else {
        stopResetButton = '<button type="button" class="btn btn-danger" id="stopTime">Stop Time</button>';
        document.getElementById('stopTime').innerHTML = stopResetButton;
    }
}

//create a function to stop counting seconds
function stopCountTheSeconds() {
    //declare a function and call it stopCountTheSeconds
    timerRunning = 0;
    console.log(timerRunning);

}

function increaseFocusTime() {
    //declare a function and call it increaseFocusTime
    var focusTime = document.getElementById('newFocusTime').innerHTML;
    //declare variable, name it focusTime and set it to value of newFocusTime HTML element with id newFocusTime
    console.log(focusTime);
    //console log the value of focusTime
    focusTime++;
    //increase focusTime by 1
    console.log(focusTime);
    //console log the value of focusTime
    setFocus(focusTime);
    //set focus time
}
function decreaseFocusTime() {
    //declare a function and call it decreaseFocusTime
    var focusTime = document.getElementById('newFocusTime').innerHTML;
    //declare variable, name it focusTime and set it to value of newFocusTime HTML element with id newFocusTime
    console.log(focusTime);
    //console log the value of focusTime
    focusTime--;
    //decrease focusTime by 1
    if(focusTime <= 1) {
        focusTime = 1;
    };
    //if focusTime is less than or equal to one, set to one
    console.log(focusTime);
    //console log the value of focusTime
    setFocus(focusTime);
    //set focus time
}
function increasePlayTime() {
    //declare a function and call it increasePlayTime
    var playTime = document.getElementById('newPlayTime').innerHTML;
    //declare variable, name it playTime and set it to value of newPlayTime HTML element with id newPlayTime
    console.log(playTime);
    //console log the value of playTime
    playTime++;
    //increase playTime by 1
    console.log(playTime);
    //console log the value of playTime
    setPlay(playTime);
    //set play time
}
function decreasePlayTime() {
    //declare a function and call it decreasePlayTime
    var playTime = document.getElementById('newPlayTime').innerHTML;
    //declare variable, name it playTime and set it to value of newPlayTime HTML element with id newPlayTime
    console.log(playTime);
    //console log the value of playTime
    playTime--;
    //decrease playTime by 1
    if(playTime <= 1) {
        playTime = 1;
    };
    //if playTime is less than or equal to one, set to one
    console.log(playTime);
    //console log the value of playTime
    setPlay(playTime);
    //set play time
}
focusDuration();
playDuration();
stopResetButton();

document.getElementById('increaseFocusTime').addEventListener('click', increaseFocusTime);
//listens for increaseFocusTime button to be clicked and then calls increaseFocusTime() function
document.getElementById('decreaseFocusTime').addEventListener('click', decreaseFocusTime);
//listens for decreaseFocusTime button to be clicked and then calls decreaseFocusTime() function
document.getElementById('increasePlayTime').addEventListener('click', increasePlayTime);
//listens for increasePlayTime button to be clicked and then calls increasePlayTime() function
document.getElementById('decreasePlayTime').addEventListener('click', decreasePlayTime);
//listens for decreasePlayTime button to be clicked and then calls decreasePlayTime() function
document.getElementById('startTime').addEventListener('click',startTimer);
//listens for 'startTime' button to be clicked and then calls startTimer() function
document.getElementById('stopTime').addEventListener('click',stopCountTheSeconds);
//listens for stopTime button to be clicked and then calls stopCountTheSeconds() function