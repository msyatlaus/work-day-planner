$(document).ready(function () {
  function showDate() {
    $("#currentDay").html(moment().format("LLLL"));
  }

  function calTimeClass(hour) {
    if (hour === moment().hours()) {
      return "present";
    } else if (hour > moment().hours());{
      return "future";
    } 
  }

  setInterval(showDate, 1000);
  showDate();
  $(".row").each(function (index) {
    var hourIndex = index + 9;
    var savedInput = localStorage.getItem("Block" + hourIndex);
    var timeClass = calTimeClass(hourIndex);
    $(this).children("input").val(savedInput);
    $(this).children("input").addClass(timeClass);
  });
  $(".saveBtn").click(function () {
    console.log(this);
    var userInput = $(this).siblings(".user-input").val();
    var hourBlock = $(this).siblings(".user-input").attr("id");
    localStorage.setItem(hourBlock, userInput);
    console.log(hourBlock, userInput);
  });
});

//disable input field in the past ...use bootstrap to find disable (input)
