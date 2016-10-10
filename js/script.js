// JavaScript Document
//create variable called focusDuration and set its default value to 25 minutes
function focusDuration() {
    //Declare function called focusDuration
    var focusDuration = 25;
    //declare variable called focusDuration and set it to 25
    var focusDurationMS = focusDuration * 60 * 1000;
    //declare variable called focusDurationMS and set it to 25 minutes converted to milliseconds
    console.log("focusDuration " + focusDuration + " focusDurationMS " + focusDurationMS);
    //print the string "focusDuration" concantanated to the focusDuration value to the console
    focusDuration = msToTime(focusDurationMS);
    document.getElementById('newFocusTime').innerHTML = focusDuration;
    //Retrieve 'newFocusTime' id from HTML and set it to focusDuration concantanated to ':00';
    document.getElementById('focus').innerHTML = focusDuration;
    //Retrieve 'focus' id from HTML and set it to focusDuration concantanated to ':00'
    var timeObj = {focusDuration: focusDuration, focusDurationMS: focusDurationMS};
    //create object called timeObj
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
    // var timeObjStr = localStorage.getItem("timeObjStr");
    // var timeObj = JSON.parse(timeObjStr);
    // timeObj.focusDuration = focusDuration;
    // timeObjStr = JSON.stringify(timeObj);
    //     if (typeof(Storage) !== "undefined") {
    //     // Store
    //         localStorage.setItem("timeObjStr",timeObjStr);
    // console.log(timeObj);
    // console.log(timeObjStr);
}
//create function called playDuration() that declares a variable called playDuration and set its default value to 5 minutes , then returns that value
function playDuration() {
    //Declare function called playDuration
    var playDuration = 5;
    //declare variable called playDuration and set it to 5
    
    var playDurationMS = playDuration * 60 * 1000;
    //declare variable called playDurationMS and set it to 5 minutes converted to milliseconds
    console.log("playDuration " + playDuration + " playDurationMS " + playDurationMS);
    //print the string "playDuration" concantanated to the playDuration value to "playDurationMS" to playDurationMS value to the console
    
    document.getElementById('newPlayTime').innerHTML = playDuration + ":00";
    //Retrieve 'newPlayTime' id from HTML and set it to playDuration concantanated to ':00';
    document.getElementById('play').innerHTML = playDuration + ":00";
    //Retrieve 'play' id from HTML and set it to playDuration concantanated to ':00'
    
        if (typeof(Storage) !== "undefined") {
        // check for localStore ability in browser
            var timeObjStr = localStorage.getItem("timeObjStr");
            //Declare a variable and call it timeObjStr set it to timeObjStr after retrieving timeObjStr string from localStorage
        } else {//if Storage == "undefined"
            console.log("localStorage NOT available");
            //print the string "localStorage NOT available"
        };
    var timeObj = JSON.parse(timeObjStr);
    //declare variable, call it timeObj, set it to a parsed JSON string of timeObjStr
    timeObj.playDuration = playDuration;
    //add the key playDuration and the playDuration value to the object
    timeObj.playDurationMS = playDurationMS;
    //add the key playDurationMS and the playDurationMS value to the object
    timeObjStr = JSON.stringify(timeObj);
    //set timeObjStr to timeObj after it's converted to a JSON string
        if (typeof(Storage) !== "undefined") {
        // Store, check to see if storage is defined, then execute the following code
            localStorage.setItem("timeObjStr",timeObjStr);
            //set localStorage to timeObjStr key with  timeObjStr value
        } else {
            document.getElementById("newPlayTime").innerHTML = "Sorry, your browser does not support Web Storage...";
            //Retrieve "newPlayTime" from HTML and set it to the string "Sorry, your browser does not support Web Storage..."
        }
    console.log(timeObj);
    //print timeObj to console
    console.log(timeObjStr);
    //print timeObjStr to console
    return playDuration;
}
//create a function to convert milliseconds to hh:mm:ss:ms
function msToTime(duration) {
    //declare function name it msTotime and give it an argument called duration
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

//create function called setFocusTime() that will add focusDuration value (25 minutes is default value) to currentTime and save it to a variable named focusUntilTime
function setFocusTime() {
    var currentTime = document.getElementById('focus').innerHTML;
    var focusDuration = document.getElementById('newFocusTime').innerHTML;
    var focusUntilTime = currentTime + " " + focusDuration;
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
//currentTime();
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
