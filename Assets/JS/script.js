// GLOBAL VARIABLES
// ====================================
const hour = moment().format("H")
const button = $(".saveBtn")
var moment = moment();

// CODE TO SHOW DATE AND YEAR OF PRESENT DAY IN JUMBOTRON
// ==============================================================
const presentDay = moment.format('dddd, MMMM Do, YYYY');
$("#presentDay").text(presentDay);

// ON-CLICK EVENT FOR SAVING TASKS FOR THAT TIME
// =======================================================
button.on("click", function () {
    const userInput = $(this).siblings(".tasks").val();
    const mainRow = $(this).parent().attr("id");
    localStorage.setItem(mainRow, userInput)
});

// GIVES EACH BLOCK THE TEXT THAT WAS LAST SAVED INTO THE LOCALSTORAGE
// ===========================================================================
$("#9 .tasks").val(localStorage.getItem("9"))
$("#10 .tasks").val(localStorage.getItem("10"))
$("#11 .tasks").val(localStorage.getItem("11"))
$("#12 .tasks").val(localStorage.getItem("12"))
$("#13 .tasks").val(localStorage.getItem("13"))
$("#14 .tasks").val(localStorage.getItem("14"))
$("#15 .tasks").val(localStorage.getItem("15"))
$("#16 .tasks").val(localStorage.getItem("16"))
$("#17 .tasks").val(localStorage.getItem("17"))

// PAST, PRESENT, FUTURE FUNCTION FOR THE TIMEBLOCKS
// ==========================================================
function currentTime() {
    $(".time-block").each(function () {
        var divId = $(this).attr("id")
        var divTime = parseInt(divId);
        if(divTime < hour) {
            $(this).children(".tasks").attr("class", "col-md-10 tasks past");
        } else if (divTime == hour) {
            $(this).children(".tasks").attr("class", "col-md-10 tasks present");
        } else {
            $(this).children(".tasks").attr("class", "col-md-10 tasks future");
        };
    });

};
    
currentTime();