function myTime() {
	var pomodoros = new Array;
	//declare new Array pomodoros
	if (pomodoro !== null) {
		//checks if pomodoro is null or NOT
		pomodoros = pomodoro;
		//if pomodoro is NOT null sets it to pomodoros
	} else (pomodoros = [1500000, 50000]);
		//if pomodoro is null sets pomodoros to the array [1500000, 50000]
	pomodoros = localStorage.setItem('pomodoro');
	//and then sets localStorage to pomodoro = [1500000, 50000]
	var focus = pomodoros[0];
	//declare variable focus and sets it to the first item in array pomodoros
	var relax = pomodoros[1];
	//declare variable relax and sets it to the second item in array pomodoros
	var iWork = setInterval(stopWork, focus);
	//declare variable and sets it to the function setInterval that calls on the function stopWork with a time that is equal to focus
	show();
	return false;
}

function show() {
	var pomodoros = myTime();
	var focus = '<h2>' + pomodoro[0] + '</h2>';
	var relax = '<h2>' + pomodoro[1] + '</h2>';
	document.getElementById('focusTime').innerHTML = focus;
	document.getElementById('relaxTime').innerHTML = relax;
}
function myBreak() {
	var pomodoros = new Array;
	var pomodoros = localStorage.getItem('pomodoro');
	relax = pomodoros[1];
	var iBreak = setInterval(startWork, relax);
}

// function setFocus() {
// 	var focus = document.getElementById('focus').value;
// }

function stopWork() {
	
	alert("Stop Work")
}

function startWork() {
	alert("Start Work")
}
//how do I decrease and increase relax and focus
function decreaseMyTime() {
	myTime();
	var decreaseMyT = iWork - 1000;
}

myTime();
//sets focus and relax time in localStorage if it isn't already set
show();