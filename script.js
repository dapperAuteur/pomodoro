var sec = 10;
var min = 0;
var handler = function() {
  sec--;
  if (sec == 0) {
    min--;
    sec = 59;
    if (min == 0 && sec == 0) {
    	min = 0;
    	sec = 0;
    	alert("Time To Relax");
    	return false
    }
  }
  document.getElementById("time").innerHTML = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
};
handler();
setInterval(handler, 1000);