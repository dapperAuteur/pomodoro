// JavaScript Document
//create variable called focusDuration and set its default value to 25 minutes
// function getCurrentTime() {
//     //create function to get current time when start button is pressed
//     //this time is added to time to be counted down (focus or play duration)
//     var d = new Date();
//     //retrieves current date/time in this format 'Thu Oct 13 2016 08:41:46 GMT-0700 (US Mountain Standard Time)'
//     var newDate = d.getTime();
//     document.getElementById('currentTime').innerHTML = d;
//     //converts 'd' to milliseconds
//     //var setFocus = 0;
//     // console.log("d " + d);
//     // console.log("newDate " + newDate);
//     // document.getElementById('stopFocusMS').innerHTML = stopFocus;
//     //must convert ms to int from string using parseInt(ms)
//     // newDateString = newDate.toString();
//     // console.log("newDateString " + newDateString);
// }
function getCurrentTime() {
    var currentdate = new Date();
    //declare variable  
          var datetime = 
                 currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

        //document.write(datetime);
    console.log('currentdate ' + currentdate);
    console.log('datetime ' + datetime);
}
getCurrentTime();
function countDown(newDate) {
    //create function to add focus time to current time from getCurrentTime function
    var countDown = newDate + document.getElementById('newFocusTime').innerHTML;
    console.log(countDown);
}
countDown();
function focusDuration() {
    //Declare function called focusDuration
    var focusDuration = 25;
    document.getElementById('newFocusTime').innerHTML = focusDuration;
    //focusDurationMS = focusDuration * 60 * 1000;
    //console.log("focusDurationMS " + focusDurationMS);
    //document.getElementById('focusDurationMS').innerHTML = focusDurationMS;
    //must convert ms to int from string using parseInt(ms)
}

//create function called playDuration() that declares a variable called playDuration and set its default value to 5 minutes , then returns that value
function playDuration() {
    //Declare function called playDuration
    var playDuration = 5;
    document.getElementById('newPlayTime').innerHTML = playDuration;
    // playDurationMS = playDuration * 60 * 1000;
    // console.log("playDurationMS " + playDurationMS);
    //document.getElementById('playDurationMS').innerHTML = playDurationMS;
    //must convert ms to int from string using parseInt(ms)
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

function increaseFocusTime() {
    //declare a function and call it increaseFocusTime
    var focusTime = document.getElementById('newFocusTime').innerHTML;
    //declare variable, name it focusTime and set it to value of newFocusTime HTML element with id newFocusTime
    focusTime++;
    //increase focusTime by 1
    document.getElementById('newFocusTime').innerHTML = focusTime;
    //set 'newFocusTime' element in HTML to incremented 'focusTime'
}
function decreaseFocusTime() {
    //declare a function and call it decreaseFocusTime
    var focusTime = document.getElementById('newFocusTime').innerHTML;
    //declare variable, name it focusTime and set it to value of newFocusTime HTML element with id newFocusTime
    focusTime--;
    //decrease focusTime by 1
    if(focusTime <= 1) {
        focusTime = 1;
    };
    //if focusTime is less than or equal to one, set to one
    document.getElementById('newFocusTime').innerHTML = focusTime;
    //set 'newFocusTime' element in HTML to decremented 'focusTime'
}
function increasePlayTime() {
    //declare a function and call it increasePlayTime
    var playTime = document.getElementById('newPlayTime').innerHTML;
    //declare variable, name it playTime and set it to value of newPlayTime HTML element with id newPlayTime
    playTime++;
    //increase playTime by 1
    document.getElementById('newPlayTime').innerHTML = playTime;
    //set 'newPlayTime' element in HTML to incremented 'playTime'
}
function decreasePlayTime() {
    //declare a function and call it decreasePlayTime
    var playTime = document.getElementById('newPlayTime').innerHTML;
    //declare variable, name it playTime and set it to value of newPlayTime HTML element with id newPlayTime
    playTime--;
    //decrease playTime by 1
    if(playTime <= 1) {
        playTime = 1;
    };
    //if playTime is less than or equal to one, set to one
    document.getElementById('newPlayTime').innerHTML = playTime;
    //set 'newPlayTime' element in HTML to decremented 'playTime'
}
focusDuration();
playDuration();

document.getElementById('increaseFocusTime').addEventListener('click', increaseFocusTime);
// //listens for increaseFocusTime button to be clicked and then calls increaseFocusTime() function
document.getElementById('decreaseFocusTime').addEventListener('click', decreaseFocusTime);
// //listens for decreaseFocusTime button to be clicked and then calls decreaseFocusTime() function
document.getElementById('increasePlayTime').addEventListener('click', increasePlayTime);
// //listens for increasePlayTime button to be clicked and then calls increasePlayTime() function
document.getElementById('decreasePlayTime').addEventListener('click', decreasePlayTime);
// //listens for decreasePlayTime button to be clicked and then calls decreasePlayTime() function