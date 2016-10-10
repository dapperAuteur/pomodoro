"# pomodoro" 
##Psuedo code for making pomodoro clock
###1: create function called currentTime() that gets the current time and save it to a variable named currentTime
DONE

###1a: create object called timeObj, put currentTime value into it with key currentTime
DONE

###1b: add currentTimeString value into timeObj with key currentTimeString
DONE

###1c: add currentTimeSeconds value into timeObj with key currentTimeSeconds
DONE

###1d: create a function to set focusTime from newFocusTime
DONE

###1e: do NOT allow focusTime to go below zero
DONE

###1f: create a function to set playTime from newPlayTime
DONE

###1g: do NOT allow playTime to go below zero
DONE

###2: create function called focusDuration() that declares a variable called focusDuration and set its default value to 25 minutes, then returns that value
DONE

###2a: convert focusDuration value to milliseconds and put into timeObj with key focusDurationSeconds
DONE

###2b: create a function to convert milliseconds to hh:mm:ss in playDuration()
DONE

###2c: create object called timeObj, put focusDuration value into it with key focusDuration
DONE

###3: create function called playDuration() that declares a variable called playDuration and set its default value to 5 minutes , then returns that value
DONE

###4: create function called setFocusTime() that will add focusDuration value (25 minutes is default value) to currentTime and save it to a variable named focusUntilTime
OBSELETE

###5: create function called countSeconds() that waits 1 second then calls another function that it takes as a parameter

###6: create function called startFocusTime() that subtracts currentTime from focusUntilTime every second and saves it to variable focusTimeLeft

###7: create function called stopFocusTime() that will stop countSeconds()

###8: created function called resetFocusTime() that will call stopFocusTime() and then call setFocusTime()

###9: create function called showFocusTimeLeft() to display focusTimeLeft

###10: create button to call setFocusTime() and then startFocusTime() function when clicked

###11: countdown the time user wants to focus on work/task

###12: create button to call stopFocusTime()

###13: create button to call resetFocusTime()

###14: create function called increaseFocusTime() to increase focusDuration value in 1 minute increments
DONE

###15: create function called decreaseFocusTime() to decrease focusDuration value in 1 minute decrements

###16: create function called callSetPlayTime() to call setPlayTime() function when focusTimeLeft value == 00:00

###17: create function called focusTimeIsZero() to alert user that focusTimeLeft value == 00:00

###18: create function called setPlayTime() that will add playDuration (5 minutes is default value) to currentTime and save it to a variable named playUntilTime

###19: create function called increasePlayTime() to increase playDuration value in 1 minute increments
DONE

###20: create function called decreasePlayTime() to decrease playDuration value in 1 minute decrements

###21: create function called startPlayTime() that subtracts currentTime from focusTime every second and saves it to variable playTimeLeft

###22: create function called showPlayTimeLeft() to display playTimeLeft value as the timer counts down

###23: create function called stopPlayTime() that will stop startPlayTime()
###23a: create button to call stopPlayTime()

###24: create function called resetPlayTime() that will call stopPlayTime() and then call setPlayTime()

###24a: create button to call resetPlayTime()

###27: create a function called playTimeIsZero() that will alert user that playTimeLeft value == 00:00

