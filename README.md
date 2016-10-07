"# pomodoro" 
##Psuedo code for making pomodoro clock
###1: create function called getTime() that gets the current time and save it to a variable named currentTime
DONE

###2: create object called currentTime, put currentTime value into it with key currentTime
DONE



###3: create function called focusDuration() that declares a variable called focusDuration and set its default value to 25 minutes, then returns that value
DONE

###4: create object called timeObj, put focusDuration value into it with key focusDuration

###5: create function called playDuration() that declares a variable called playDuration and set its default value to 5 minutes , then returns that value
DONE

###6: create function called setFocusTime() that will add focusDuration value (25 minutes is default value) to currentTime and save it to a variable named focusUntilTime

###7: create function called countSeconds() that waits 1 second then calls another function that it takes as a parameter

###8: create function called startFocusTime() that subtracts currentTime from focusUntilTime every second and saves it to variable focusTimeLeft

###9: create function called stopFocusTime() that will stop countSeconds()

###10: created function called resetFocusTime() that will call stopFocusTime() and then call setFocusTime()

###11: create function called showFocusTimeLeft() to display focusTimeLeft

###12: create button to call setFocusTime() and then startFocusTime() function when clicked

###13: countdown the time user wants to focus on work/task

###14: create button to call stopFocusTime()

###15: create button to call resetFocusTime()

###16: create function called increaseFocusTime() to increase focusDuration value in 1 minute increments

###17: create function called decreaseFocusTime() to decrease focusDuration value in 1 minute decrements

###18: create function called callSetPlayTime() to call setPlayTime() function when focusTimeLeft value == 00:00

###19: create function called focusTimeIsZero() to alert user that focusTimeLeft value == 00:00

###20: create function called setPlayTime() that will add playDuration (5 minutes is default value) to currentTime and save it to a variable named playUntilTime

###21: create function called increasePlayTime() to increase playDuration value in 1 minute increments

###22: create function called decreasePlayTime() to decrease playDuration value in 1 minute decrements

###23: create function called startPlayTime() that subtracts currentTime from focusTime every second and saves it to variable playTimeLeft

###24: create function called showPlayTimeLeft() to display playTimeLeft value as the timer counts down

###25: create function called stopPlayTime() that will stop startPlayTime()

###26: create function called resetPlayTime() that will call stopPlayTime() and then call setPlayTime()

###27: create button to call stopPlayTime()

###28: create button to call resetPlayTime()

###29: create a function called playTimeIsZero() that will alert user that playTimeLeft value == 00:00

