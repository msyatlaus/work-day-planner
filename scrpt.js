$(document).ready(function () {

  function displayDate() {
      $("#currentDay").html(moment().format("LLLL"));
  } setInterval(displayDate, 1000);
  displayDate();
  });
  console.log(displayDate)