// JavaScript Document
//create a function to get the current time
function currentTime() {
    //declare function show
    //var currentTime = new Date(new Date().getTime()).toLocaleTimeString();
    //get current time and convert to string
    var currentTime = new Date(new Date().getTime());
    //get current time
    currentTimeString = currentTime.toLocaleTimeString();
    //convert currentTime to string
    var currentTimeSeconds = Date.parse(currentTime);
    //get current time and convert to seconds since January 1, 1970, 00:00:00 UTC

    var timeObj = {currentTime: currentTime,currentTimeString: currentTimeString, currentTimeSeconds: currentTimeSeconds};
    var timeObjStr = JSON.stringify(timeObj);
        if (typeof(Storage) !== "undefined") {
        // Store
            localStorage.setItem("timeObjStr",timeObjStr);
            // Retrieve
            document.getElementById("newFocusTime").innerHTML = localStorage.getItem("timeObjStr");
            document.getElementById("newRelaxTime").innerHTML = localStorage.getItem("timeObjStr");
        } else {
            document.getElementById("newFocusTime").innerHTML = "Sorry, your browser does not support Web Storage...";
        };
    
    console.log(currentTime);
    console.log(currentTimeString);
    console.log(currentTimeSeconds);
    //print 'currentTime' to console.log
    document.getElementById('focus').innerHTML = currentTimeString;
    //show current time
    return currentTime;
}

//create variable called focusDuration and set its default value to 25 minutes
function focusDuration() {
    var focusDuration = 25;
    console.log("focusDuration " + focusDuration);
    document.getElementById('newFocusTime').innerHTML = focusDuration;
    return focusDuration;
}
//create function called playDuration() that declares a variable called playDuration and set its default value to 5 minutes , then returns that value
function playDuration() {
    var playDuration = 5;
    console.log("playDuration " + playDuration);
    return playDuration;
}

//create function called setFocusTime() that will add focusDuration value (25 minutes is default value) to currentTime and save it to a variable named focusUntilTime
function setFocusTime() {
    var currentTime = document.getElementById('focus').innerHTML;
    var focusDuration = document.getElementById('newFocusTime').innerHTML;
    var focusUntilTime = currentTime + focusDuration;
    console.log("focusUntilTime " + focusUntilTime);
    return focusUntilTime;
}

//create a function to count the seconds
function countTheSeconds() {
    //declare function countTheSeconds
    //var secondsCounted = getTime + 
}

function increaseFocusTime() {
    var focusTime = document.getElementById('focus').innerHTML;
    //declare variable focusTime and set it to the value of element with id 'focus'
    console.log(typeof focusTime);
    console.log(focusTime);
    focusTime++;
    //increase focusTime by 1
    console.log(typeof focusTime);
    console.log(focusTime);
    document.getElementById('focus').innerHTML = focusTime;
    //set element with id 'focus' to the new focusTime
    //return false;
    //was added to stop the function from running, but doesn't appear to be necessary
}
currentTime();
focusDuration();
playDuration();
setFocusTime();
//call show() function


// function pCountDown() {
    
//   var timer = document.getElementById("logout-timer")
//     , now = new Date()
//     , deadline = new Date(now.getFullYear, now.getMonth, now.getDate, now.getHours, now.getMinutes + 15);
 
//   timer.innerHTML = countdown(deadline).toString();
//   setInterval(function(){
//     timer.innerHTML = countdown(deadline ).toString();
//   }, 1000);
// }
// ----
// document.getElementById('increaseFocusTime').addEventListener('click', increaseFocusTime);
// //listens for increaseFocusTime button to be clicked and then calls increaseFocusTime() function
// show();
// //call show() function
