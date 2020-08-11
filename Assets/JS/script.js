// Variable to store values for my 9-5 planner
var timeblock = [

    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "1",
        time: "1",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "2",
        time: "2",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "3",
        time: "3",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "4",
        time: "4",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "5",
        time: "5",
        meridiem: "pm",
        reminder: ""
    },

]

// Gets data for the header date
function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}

// Saves data to local storage
function saveReminders() {
    localStorage.setItem("myDay", JSON.stringify(myDay));
}


// Sets any data in local storage to the view
function displayReminders() {
    myDay.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}

// Sets any existing localStorage data to the view if it exists
function init() {
    var storedDay = JSON.parse(localStorage.getItem("myDay"));

    if (storedDay) {
        myDay = storedDay;
    }

    saveReminders();
    displayReminders();
}

// Loads header date by calling the function here
getHeaderDate();

// Creates the visuals for the body of the planner
myDay.forEach(function (thisHour) {

    // Creates rows for timeblocks via DOM manipulation
    var hourRow = $("<form>").attr({
        "class": "row"
    });

    $(".container").append(hourRow);

    // Create time fields
    var hourField = $("<div>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
        });

    // Creates data for the planner
    var hourPlan = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });
    var planData = $("<textarea>");
    hourPlan.append(planData);
    planData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("kk")) {
        planData.attr({
            "class": "past",
        })
    } else if (thisHour.time === moment().format("kk")) {
        planData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("kk")) {
        planData.attr({
            "class": "future"
        })
    }

    // Creates save button on the side of the planner
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    hourRow.append(hourField, hourPlan, savePlan);
})
