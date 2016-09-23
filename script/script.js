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
    document.getElementById('focus').innerHTML = focusTimeConvert + ':' + seconds;
    //find element 'focus' and replace content with focusTime value
    document.getElementById('relax').innerHTML = relaxTimeConvert;
    //find element 'relax' and replace content with relaxTime value
}

show();
//call show() function