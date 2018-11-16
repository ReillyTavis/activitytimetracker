let startBtn = document.getElementById('start'),
	stopBtn = document.getElementById('stop'),
	pauseBtn = document.getElementById('pause'),
  logBtn = document.getElementById('loggy'),
  loggedSeconds = document.getElementById('secLogger'),
  loggedMinutes = document.getElementById('minLogger')
	hoursGoal = document.getElementById('hoursToSpend'),
	userDesiredHours = document.getElementById('userHours'),
	progBar = document.getElementById('bar'),
	hour = document.getElementById('h'),
	minute = document.getElementById('m'),
	second = document.getElementById('s');

var globalCurrentMinutes;
var globalCurrentSeconds;

startBtn.addEventListener('click',start);
stopBtn.addEventListener('click',stop);
pauseBtn.addEventListener('click',pause);
logBtn.addEventListener('click',log);

//**Script for the activity page/main page go below here

//**Script for the time-tracking page goes below here

//This prompts the user and asks for the amount of hours they want to spend on the activity

//This is to continuously run the log() function
var update_loop = setInterval(log, 50);
var update_loop = setInterval(goalReached, 50);
//Functions for the 'start' and 'stop' and 'pause' go below here
var stop = false;
var pause = false;

// variable for the 'stretch-goals' options in dropdown of minutes to spend/log on an activity. It's value is equivalent to the number of hours
var hoursToSpend1 = 1 * 60;


function start() {
	// extract the integer value from times
	let h = parseInt(hour.innerText),
			m = parseInt(minute.innerText),
	  	s = parseInt(second.innerText);
	// increment seconds
	s = s + 1;
	// if its 60 seconds then set it to 0 and increse minute
	if(s == 60) {
		s = 0;
		// if its 60 minutes then set it to 0 and increse hour
		if(m == 60) {
			m = 0;
			h = h + 1;
			hour.innerText = h + " Min";
		}
		m = m + 1;
		minute.innerText = m + " Sec";
	}
	// if stop is not pressed
	if(!stop) {
		// if pause is not pressed
		if(!pause) {
			// increase time
			second.innerText = s + " Ms";
			setTimeout(start,17);
		} else {
			// toggle pause
			pause = !pause;
		}
	} else {
		// toggle stop
		stop = !stop;
	}
	//Here I make the current "seconds" and "minutes" on the active stopwatch into global variables for use within other functions
  var currentTime = m;
  window.globalCurrentSeconds = currentTime;
  var currentMinutes = h;
  window.globalCurrentMinutes = currentMinutes;
}

var totalProgressPercent;
// a new variable with it's value set to the sum of the (logged) current minutes and current seconds on the stopwatch
function goalReached() {
	if(totalProgressPercent >= 100.00) {
		alert("You did it!");
		stop = true;
		break;
	}
}

function log() {
  	loggedSeconds.innerText = "Seconds: " + globalCurrentSeconds;
  	loggedMinutes.innerText = "Minutes: " + globalCurrentMinutes;
		var MinutesAndSeconds = globalCurrentMinutes + (globalCurrentSeconds / 60);
		window.globalMinutesAndSeconds = MinutesAndSeconds;

		let hoursGoalInMinutes = hoursToSpend - globalMinutesAndSeconds;
		let hoursGoalInHours = hoursGoalInMinutes / 60;
		let totalProgressInDecimal = (globalMinutesAndSeconds) / (hoursToSpend);
		totalProgressPercent = totalProgressInDecimal * 100;
		progBar.style.width = totalProgressPercent.toFixed(2) + "%";
		hoursGoal.innerText = totalProgressPercent.toFixed(2) + "%";

}

function stop() {
	stop = true;
	second.innerText = 0 + " Ms";
	minute.innerText = 0 + " Sec";
	hour.innerText = 0 + " Min";
}

function pause() {
	pause = true;
}
