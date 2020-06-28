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
var save8am = $("#save8am");
var save9am = $("#save9am");
var save10am = $("#save10am");
var save11am = $("#save11am");
var save12pm = $("#save12pm");
var save1pm = $("#save1pm");
var save2pm = $("#save2pm");
var save3pm = $("#save3pm");
var save4pm = $("#save4pm");
var save5pm = $("#save5pm");


// An array that contains every possible hour of the day
var timeBlock = ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

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

function renderStoredData(block, eventHour) {

    var event = JSON.parse(localStorage.getItem(timeBlock[eventHour]))
    
    if (!event) {
        return
    }
    block.attr("placeholder", event)
}

function renderAllStored() {
    renderStoredData(block8am, 8)
    renderStoredData(block9am, 9)
    renderStoredData(block10am, 10)
    renderStoredData(block11am, 11)
    renderStoredData(block12pm, 12)
    renderStoredData(block1pm, 13)
    renderStoredData(block2pm, 14)
    renderStoredData(block3pm, 15)
    renderStoredData(block4pm, 16)
    renderStoredData(block5pm, 17)
}

function saveData (blockHour, saveHour, eventHour) {
    saveHour.on("click", function() {
    var data = blockHour.val().trim()
    console.log(data)
    localStorage.setItem(timeBlock[eventHour],JSON.stringify(data))
    console.log(timeBlock[eventHour])
    })
}


saveData(block8am, save8am, 8);
saveData(block9am, save9am, 9);
saveData(block10am, save10am, 10);
saveData(block11am, save11am, 11);
saveData(block12pm, save12pm, 12);
saveData(block1pm, save1pm, 13);
saveData(block2pm, save2pm, 14);
saveData(block3pm, save3pm, 15);
saveData(block4pm, save4pm, 16);
saveData(block5pm, save5pm, 17);

$("#clearCal").on("click", function() {
    localStorage.clear()
    block8am.attr("placeholder", "")
    block9am.attr("placeholder", "")
    block10am.attr("placeholder", "")
    block11am.attr("placeholder", "")
    block12pm.attr("placeholder", "")
    block1pm.attr("placeholder", "")
    block2pm.attr("placeholder", "")
    block3pm.attr("placeholder", "")
    block4pm.attr("placeholder", "")
    block5pm.attr("placeholder", "")
    
})


// function to update appearence of one row of the calender based on current time
function updateEachBlock(hourBlock, theHour) {

    if (theHour > currentHour) {
        hourBlock.removeClass("past")
        hourBlock.removeClass("present")
        hourBlock.addClass("future")
    }
    else if (theHour < currentHour) {
        hourBlock.addClass("past")
        hourBlock.removeClass("present")
        hourBlock.removeClass("future")
    }
    else {
        hourBlock.removeClass("past")
        hourBlock.addClass("present")
        hourBlock.removeClass("future")
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
    // console.log(currentHour)

    updateCalendar()
    
}, 1000)

renderAllStored();


})