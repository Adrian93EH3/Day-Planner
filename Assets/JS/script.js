// GLOBAL VARIABLES
var hour = moment().format("H")
var button = $(".saveBtn") 

var moment = moment();
var presentDay = moment.format('dddd, MMMM Do, YYYY');
$("#presentDay").text(presentDay);

// ON-CLICK EVENT FOR SAVING TASKS FOR THAT TIME
button.on("click", function () {
    var userInput = $(this).siblings(".tasks").val();
        var mainRow = $(this).parent().attr("id");
        localStorage.setItem(mainRow, userInput)
});

$("#9 .tasks").val(localStorage.getItem("9"))
$("#10 .tasks").val(localStorage.getItem("10"))
$("#11 .tasks").val(localStorage.getItem("11"))
$("#12 .tasks").val(localStorage.getItem("12"))
$("#13 .tasks").val(localStorage.getItem("13"))
$("#14 .tasks").val(localStorage.getItem("14"))
$("#15 .tasks").val(localStorage.getItem("15"))
$("#16 .tasks").val(localStorage.getItem("16"))
$("#17 .tasks").val(localStorage.getItem("17"))