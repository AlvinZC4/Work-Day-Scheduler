$(document).ready(function() {

// Selector to call on <p> element with id=currentDay
var DisplayDay = $("#currentDay");

// Set global variables for each hour shown on the scheduler
var block8am = $("#8am");
var block9am = $("#9am");
var block10am = $("#10am");
var block11am = $("#11am");
var block12pm = $("#12pm");
var block1pm = $("#1pm");
var block2pm = $("#2pm");
var block3pm = $("#3pm");
var block4pm = $("#4pm");
var block5pm = $("#5pm");

var timeBlock = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5]

// Get current date and time form moment.js
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

// Get current year from moment.js
var currentYear = moment().format('YYYY');
// Get current month from moment.js
var currentMonth = moment().format('MMM');
// Get current day from moment.js
var currentDay =  moment().format('D');
// Get current hour from moment.js
var currentHour = moment().format('H');

console.log(currentYear);
console.log(currentMonth);
console.log(currentDay);
console.log(currentHour);



// function to update appearence of calendar based on current time
function updateDailyCalender(theHour, index) {
 if (timeBlock.index > currentHour) {
     $(theHour).removeClass("past")
     $(theHour).removeClass("present")
     $(theHour).addClass("future")

 }
}

// Append current date and time to <p> element id=currentDay
DisplayDay.append(currentTime);

setInterval(function() {

    currentTime = new Date()
    currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    DisplayDay.html(currentTime)
}, 1000)


})