// JavaScript Document
function show() {
    //declare function show
    var focusTime = 1500000;
    //declare variable focusTime and set to 1500000 (25 minutes)
    var focusTimeConvert = focusTime / 1000 / 60;
    var relaxTime = 300000;
    //declare variable relaxTime and set to 50000 (5 minutes)
    var relaxTimeConvert = relaxTime / 1000 / 60;
    
    var seconds = 00;
    //doesn't show seconds properly on screen
    document.getElementById('focus').innerHTML = focusTimeConvert;
    //find element 'focus' and replace content with focusTimeConvert value, need to find a way to add seconds
    document.getElementById('relax').innerHTML = relaxTimeConvert;
    //find element 'relax' and replace content with relaxTime value
}

function increaseFocusTime() {
    var focusTime = document.getElementById('focus').innerHTML;
    //declare variable focusTime and set it to the value of element with id 'focus'
    console.log(typeof focusTime);
    console.log(focusTime);
    focusTime++;
    console.log(typeof focusTime);
    console.log(focusTime);
    document.getElementById('focus').innerHTML = focusTime;
    //.setAttribute("content","testdesc");
    //show();
    return false;
}
document.getElementById('increaseFocusTime').addEventListener('click', increaseFocusTime);
show();
//call show() function
