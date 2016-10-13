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
    //create object called timeObj
    //add currentTime value with key currentTime into timeObj
    //add currentTimeString value with key currentTimeString into timeObj
    //add currentTimeSeconds value with key currentTimeSeconds into timeObj
    var timeObjStr = JSON.stringify(timeObj);
    //declare variable timeObjStr and set it to timeObj converted to JSON string
        if (typeof(Storage) !== "undefined") {
        // check for localStore ability in browser
            localStorage.setItem("timeObjStr",timeObjStr);
            //store timeObjStr value with key timeObjStr in localStorage
            document.getElementById("newFocusTime").innerHTML = localStorage.getItem("timeObjStr");
            // Retrieve timeObjStr from localStorage and set it to HTML id newFocusTime
            document.getElementById("newRelaxTime").innerHTML = localStorage.getItem("timeObjStr");
            //Retrieve newRelaxTime from HTML and set it to localStorage object "timeObjStr"
        } else {//if Storage == "undefined"
            document.getElementById("newFocusTime").innerHTML = "Sorry, your browser does not support Web Storage...";
            //Retrieve "newFocusTime" from HTML and set it to the string "Sorry, your browser does not support Web Storage..."
        };
    
    console.log(currentTime);
    console.log(currentTimeString);
    console.log(currentTimeSeconds);
    //print 'currentTime', 'currentTimeString', 'currentTimeSeconds' to console.log
    document.getElementById('focus').innerHTML = currentTimeString;
    //Retrieve 'focus' id from HTML and set it to currentTimeString
    //show current time
    return currentTime;
    //return currentTime to function caller
}