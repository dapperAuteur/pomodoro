function startTimer(duration, display) {
  //declare function called startTimer that takes 2 parameters; duration and display
    var start = Date.now(),
    //declare a varible called start set to Date.now(), the amount of miliseconds that have passed since Jan 1, 1970
        diff,
        //declare a variable diff
        minutes,
        //declare a variable minutes
        seconds;
        //declare a variable seconds
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);
        //diff is duration given minus (miliseconds since 1/1/1970 now - miliseconds since 1/1/1970 when timer started) divided by 1000 converting miliseconds to seconds and then rounds that number down to the nearest whole number (| 0)
        //gives the number of seconds until duration reaches zero

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        //sets minutes to diff divided by 60 and then rounds down to the nearest whole number, this gives the number of minutes until duration reaches zero 
        seconds = (diff % 60) | 0;
        //sets seconds to diff divided by 60 and then rounds down to the nearest whole number, this gives the number of seconds until duration reaches zero

        minutes = minutes < 10 ? "0" + minutes : minutes;
        //conditional (ternary) operator; if true minutes is less than 10 minutes is 0 concantanated to minutes, if false minutes is minutes
        seconds = seconds < 10 ? "0" + seconds : seconds;
        //conditional (ternary) operator; if true seconds is less than 10 seconds is 0 concantanated to seconds, if false seconds is seconds

        display.textContent = minutes + ":" + seconds;
        //concantanates minutes to ':' to seconds and sets it equal to the text content of the display object in the document method that alters the html, dispay.textContent replaces text at #time in html with new value for display

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            //alert("Stop Working");
            start = Date.now() + 1000;

        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    //call timer() function
    setInterval(timer, 1000);
    //call setInterval() function that calls timer() function after 1 second
}

window.onload = function () {
  //window.onload executes its value as soon as the window is loaded
    var fiveMinutes = 10,
    //declare a variable called fiveMinutes and sets it a numerical value
        display = document.querySelector('#time');
        //selects document item with given id '#time' and sets it to display & display replaces text with value of fiveMinutes
    startTimer(fiveMinutes, display);
    //calls startTimer function and passes parameters of fiveMinutes and display
};
