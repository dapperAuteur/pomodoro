// JavaScript Document
function getTime() {
    //declare function show
    var currentTime = new Date(new Date().getTime()).toLocaleTimeString();
    //show current time
    
    console.log(currentTime);
    //print 'currentTime' to console.log
    document.getElementById('focus').innerHTML = currentTime;
    //find element 'relax' and replace content with relaxTime value
    //show();
    //call show(); function
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
getTime();
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
