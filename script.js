$(document).ready(function () {

  function showDate() {
      $("#currentDay").html(moment().format("LLLL"));
  } setInterval(showDate, 1000);
  showDate();
  });

  
  $(".saveBtn").click(function () {
    var userInput = $(this).siblings(".user-input").val()
    var hourBlock = $(this).siblings(".user-input")
    localStorage.setItem(userInput,hourBlock);
    console.log(userInput)
  });
  