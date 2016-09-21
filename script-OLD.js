function get_time() {
	//create function and call it get_time()
	var pomodoros = new Array;
	//declare new Array pomodoros
	var pomodoros_num = localStorage.getItem('pomodoro');
	if (pomodoros_num !== null) {
		//checks if pomodoro is null or NOT
		pomodoros = pomodoro;
		//if pomodoro is NOT null sets it to pomodoros
	} else (pomodoros = [1500000, 50000]);
		//if pomodoro is null sets pomodoros to the array [1500000, 50000]
	
	var focus = pomodoros[0];
	//declare variable focus and sets it to the first item in array pomodoros
	var relax = pomodoros[1];
	//declare variable relax and sets it to the second item in array pomodoros
	//var iWork = setInterval(stopWork, focus);
	//declare variable and sets it to the function setInterval that calls on the function stopWork with a time that is equal to focus
	show();
	return pomodoros;
}

function set_focus_time() {
	//create function and call it set_time()
	var focusTime = document.getElementById('focusTime').value;
	//searches current document for object with name 'focusTime'
	//if 'focusTime' is found
	//declare var and name it focusTime and assign the value of the object in the document name 'focusTime' to it
	var pomodoros = get_time();
	//declare variable 'pomodoros' and set it to the function get_time()
	pomodoros[0] = focusTime;
	//set focusTime as the first item in the array pomodoros
	pomodoros[1] = relaxTime;
	localStorage.setItem('pomodoro', pomodoros);
	//save the array pomodoros as the array in local storage pomodoro
	show();
	//call the show() function

	return false;
	//return false to stop the function from running
}

// function set_relax_time() {
// 	//create function and call it set_time()
// 	var focusTime = document.getElementById('relaxTime').value;
// 	//searches current document for object with name 'focusTime'
// 	//if 'focusTime' is found
// 	//declare var and name it focusTime and assign the value of the object in the document name 'focusTime' to it
// 	var pomodoros = get_time();
// 	//declare variable 'pomodoros' and set it to the function get_time()
// 	pomodoros[0] = focusTime;
// 	//set focusTime as the first item in the array pomodoros
// 	pomodoros[1] = relaxTime;
// 	localStorage.setItem('pomodoro', pomodoros);
// 	//save the array pomodoros as the array in local storage pomodoro
// 	show();
// 	//call the show() function

// 	return false;
// 	//return false to stop the function from running
// }


function show() {
	//create function call it show()
	var pomodoros = get_time();
	//declare variable 'pomodoros' and set it to the function get_time()

	var focus = '<h2>' + 'Focus Time' + pomodoro[0] + '</h2>' + '<br />' + '<h2>' + 'Relax Time' + pomodoro[1] + '</h2>';
	//declare var html and assign the concantenated string to it that contains the focus time and relax time from localStorage
	// var relax = '<h2>' + 'Relax Time' + pomodoro[1] + '</h2>';

	// var focus = '<h2>' + pomodoro[0] + '</h2>';
	// var relax = '<h2>' + pomodoro[1] + '</h2>';
	document.getElementById('focusTime').innerHTML = focus;
	// document.getElementById('relaxTime').innerHTML = relax;
}

// function setFocus() {
// 	var focus = document.getElementById('focus').value;
// }
function reset() {
	//create function to reset both timers to values saved in localStorage;
}
function stopWork() {
	
	alert("Stop Work")
}

function startWork() {
	alert("Start Work")
}

document.getElementById('setFocusTime').addEventListener('click', set_focus_time);
get_time();
//sets focus and relax time in localStorage if it isn't already set
show();