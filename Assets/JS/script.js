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
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
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
    localStorage.setItem("timeblock", JSON.stringify(timeblock));
}


// Sets any data in local storage to the view
function displayReminders() {
    timeblock.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}

// Sets any existing localStorage data to the view if it exists
function init() {
    var storedDay = JSON.parse(localStorage.getItem("timeblock"));

    if (storedDay) {
        timeblock = storedDay;
    }

    saveReminders();
    displayReminders();
}

// Loads header date by calling the function here
getHeaderDate();

// Creates the visuals for the body of the planner
timeblock.forEach(function (thisHour) {

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

// Loads any existing localstorage data after components created
init();

// Saves data to be used in localStorage
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    timeblock[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveReminders();
    displayReminders();
})