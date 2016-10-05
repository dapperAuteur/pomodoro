"# pomodoro" 
##Psuedo code for making pomodoro clock
###1: create function called getTime() that gets the current time and save it to a variable named currentTime
DONE

###1a: create function called focusDuration() that declares a variable called focusDuration and set its default value to 25 minutes, then returns that value
DONE

###1b: create function called playDuration() that declares a variable called playDuration and set its default value to 5 minutes , then returns that value
DONE

###2: create function called setFocusTime() that will add focusDuration value (25 minutes is default value) to currentTime and save it to a variable named focusUntilTime

###2a: create function called countSeconds() that waits 1 second then calls another function that it takes as a parameter

###3: create function called startFocusTime() that subtracts currentTime from focusUntilTime every second and saves it to variable focusTimeLeft

###3a: create function called stopFocusTime() that will stop countSeconds()

###3b: created function called resetFocusTime() that will call stopFocusTime() and then call setFocusTime()

###4: create function called showFocusTimeLeft() to display focusTimeLeft

###5: create button to call setFocusTime() and then startFocusTime() function when clicked

###5a: countdown the time user wants to focus on work/task

###5b: create button to call stopFocusTime()

###5c: create button to call resetFocusTime()

###6: create function called increaseFocusTime() to increase focusDuration value in 1 minute increments

###7: create function called decreaseFocusTime() to decrease focusDuration value in 1 minute decrements

###7a: create function called callSetPlayTime() to call setPlayTime() function when focusTimeLeft value == 00:00

###7b: create function called focusTimeIsZero() to alert user that focusTimeLeft value == 00:00

###8: create function called setPlayTime() that will add playDuration (5 minutes is default value) to currentTime and save it to a variable named playUntilTime

###8a: create function called increasePlayTime() to increase playDuration value in 1 minute increments

###8b: create function called decreasePlayTime() to decrease playDuration value in 1 minute decrements

###9: create function called startPlayTime() that subtracts currentTime from focusTime every second and saves it to variable playTimeLeft

###10: create function called showPlayTimeLeft() to display playTimeLeft value as the timer counts down

###11: create function called stopPlayTime() that will stop startPlayTime()

###12: create function called resetPlayTime() that will call stopPlayTime() and then call setPlayTime()

###13: create button to call stopPlayTime()

###14: create button to call resetPlayTime()

###15: create a function called playTimeIsZero() that will alert user that playTimeLeft value == 00:00

