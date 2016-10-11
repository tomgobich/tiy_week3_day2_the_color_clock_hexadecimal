// Global Variables
var currentTime = getTime();

// DOM Selectors
var overlay = document.getElementById('overlay');
var time 	= document.getElementById('time');

// Update time every second
setInterval(setTime, 1000);



// ------------------------------------------------------------
// Sets time HTML element to current time
// ------------------------------------------------------------
function setTime()
{
	// Get current time
	currentTime = getTime();

	// Sets current time as background color's hex value
	setBackgroundColor();

	// Display time on HTML
	time.innerHTML = currentTime;
}



// ------------------------------------------------------------
// Gets current time, formats it, then returns it
// ------------------------------------------------------------
function getTime()
{
	var datetime = new Date();
	var hours 	= datetime.getHours();
	var minutes = datetime.getMinutes();
	var seconds = datetime.getSeconds();

	// Hours in military time?
	if(hours > 12)
	{
		// Yes, convert it to standard time
		hours -= 12;
	}

	// Format the time to a forced 2 character length
	hours 	= formatTime(hours);
	minutes = formatTime(minutes);
	seconds = formatTime(seconds);

	// Return formatted time
	return '#' + hours + minutes + seconds;
}



// ------------------------------------------------------------
// Formats Time - Forces 2 characters
// ------------------------------------------------------------
function formatTime(timeValue)
{
	timeValue = timeValue.toString(16);

	// Is timeValue less than ten? (1 character long)
	if(timeValue.length < 2)
	{
		// Add a zero in front to force 2 character length
		timeValue = '0' + timeValue;
	}

	// Return formatted timeValue
	return timeValue;
}



// ------------------------------------------------------------
// Sets current time as background color's hex value
// ------------------------------------------------------------
function setBackgroundColor()
{
	overlay.style.backgroundColor = currentTime;
	time.style.color = currentTime;
}

