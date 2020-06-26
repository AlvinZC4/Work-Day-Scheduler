$(document).ready(function() {

// Selector to call on <p> element with id=currentDay
var DisplayDay = $("#currentDay");

// Set global variables for each hour shown on the scheduler
var block8am = $("#schedule8am");
var block9am = $("#schedule9am");
var block10am = $("#schedule10am");
var block11am = $("#schedule11am");
var block12pm = $("#schedule12pm");
var block1pm = $("#schedule1pm");
var block2pm = $("#schedule2pm");
var block3pm = $("#schedule3pm");
var block4pm = $("#schedule4pm");
var block5pm = $("#schedule5pm");

var timeBlock = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

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

// console.log(currentYear);
// console.log(currentMonth);
// console.log(currentDay);
// console.log(currentHour);



// function to update appearence of one row of the calender based on current time
function updateEachBlock(hourBlock, theHour) {


    if (timeBlock[theHour] > currentHour) {
        $(hourBlock).removeClass("past")
        $(hourBlock).removeClass("present")
        $(hourBlock).addClass("future")
    }
    else if (timeBlock[theHour] < currentHour) {
        $(hourBlock).addClass("past")
        $(hourBlock).removeClass("present")
        $(hourBlock).removeClass("future")
    }
    else {
        $(hourBlock).removeClass("past")
        $(hourBlock).addClass("present")
        $(hourBlock).removeClass("future")
    }
}

// function to update appearance of all rows of the calendar based on time
function updateCalendar() {
    updateEachBlock(block8am, 8)
    updateEachBlock(block9am, 9)
    updateEachBlock(block10am, 10)
    updateEachBlock(block11am, 11)
    updateEachBlock(block12pm, 12)
    updateEachBlock(block1pm, 13)
    updateEachBlock(block2pm, 14)
    updateEachBlock(block3pm, 15)
    updateEachBlock(block4pm, 16)
    updateEachBlock(block5pm, 17)
}

// Append current date and time to <p> element id=currentDay
DisplayDay.append(currentTime);

setInterval(function() {

    currentTime = new Date()
    currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    DisplayDay.html(currentTime)

    currentYear = new Date()
    currentYear = moment().format('YYYY')
    
    currentMonth = new Date()
    currentMonth = moment().format('MMM')
    
    currentDay = new Date()
    currentDay = moment().format('D')
    
    currentHour = new Date()
    currentHour = moment().format('H')

    updateCalendar()
    
}, 1000)


})