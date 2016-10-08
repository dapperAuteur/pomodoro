// JavaScript Document
//create a function to get the current time
// function currentTime() {
//     //declare function show
//     //var currentTime = new Date(new Date().getTime()).toLocaleTimeString();
//     //get current time and convert to string
//     var currentTime = new Date(new Date().getTime());
//     //get current time
//     currentTimeString = currentTime.toLocaleTimeString();
//     //convert currentTime to string
//     var currentTimeSeconds = Date.parse(currentTime);
//     //get current time and convert to seconds since January 1, 1970, 00:00:00 UTC

//     var timeObj = {currentTime: currentTime,currentTimeString: currentTimeString, currentTimeSeconds: currentTimeSeconds};
//     //create object called timeObj
//     //add currentTime value with key currentTime into timeObj
//     //add currentTimeString value with key currentTimeString into timeObj
//     //add currentTimeSeconds value with key currentTimeSeconds into timeObj
//     var timeObjStr = JSON.stringify(timeObj);
//     //declare variable timeObjStr and set it to timeObj converted to JSON string
//         if (typeof(Storage) !== "undefined") {
//         // check for localStore ability in browser
//             localStorage.setItem("timeObjStr",timeObjStr);
//             //store timeObjStr value with key timeObjStr in localStorage
//             document.getElementById("newFocusTime").innerHTML = localStorage.getItem("timeObjStr");
//             // Retrieve timeObjStr from localStorage and set it to HTML id newFocusTime
//             document.getElementById("newRelaxTime").innerHTML = localStorage.getItem("timeObjStr");
//             //Retrieve newRelaxTime from HTML and set it to localStorage object "timeObjStr"
//         } else {//if Storage == "undefined"
//             document.getElementById("newFocusTime").innerHTML = "Sorry, your browser does not support Web Storage...";
//             //Retrieve "newFocusTime" from HTML and set it to the string "Sorry, your browser does not support Web Storage..."
//         };
    
//     console.log(currentTime);
//     console.log(currentTimeString);
//     console.log(currentTimeSeconds);
//     //print 'currentTime', 'currentTimeString', 'currentTimeSeconds' to console.log
//     document.getElementById('focus').innerHTML = currentTimeString;
//     //Retrieve 'focus' id from HTML and set it to currentTimeString
//     //show current time
//     return currentTime;
//     //return currentTime to function caller
// }

//create variable called focusDuration and set its default value to 25 minutes
function focusDuration() {
    //Declare function called focusDuration
    var focusDuration = 25;
    //declare variable called focusDuration and set it to 25
    var focusDurationMS = focusDuration * 60 * 1000;
    //declare variable called focusDurationMS and set it to 25 minutes converted to milliseconds
    console.log("focusDuration " + focusDuration + " focusDurationMS " + focusDurationMS);
    //print the string "focusDuration" concantanated to the focusDuration value to the console
    document.getElementById('newFocusTime').innerHTML = focusDuration + ":00";
    //Retrieve 'newFocusTime' id from HTML and set it to focusDuration concantanated to ':00';
    document.getElementById('focus').innerHTML = focusDuration + ":00";
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
