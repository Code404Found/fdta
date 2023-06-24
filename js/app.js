"use strict";
let chatHolder = document.getElementById("text");

function openChat() {
  document.getElementById("chat-form").style.display = "block";
}

function closeChat() {
  document.getElementById("chat-form").style.display = "none";
}
function handleSubmit(event) {
  event.preventDefault();
  let target = event.target;
  let messageElm = document.createElement("p");
  messageElm.textContent = target.msg.value;
  chatHolder.appendChild(messageElm);
}

//Calendar Functionality
var themonth = 1;
renderCal(themonth);

$(".minusmonth").click(function () {
  themonth += -1;
  renderCal(themonth);
});

$(".addmonth").click(function () {
  themonth += 1;
  renderCal(themonth);
});

function renderCal(themonth) {
  $(".calendar li").remove();
  $(".calendar ul").append(
    "<li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li><li>Su</li></>"
  );
  var d = new Date(),
    currentMonth = d.getMonth() + themonth, // get this month
    days = numDays(currentMonth, d.getYear()); //get number of days in the month
  (fDay = firstDay(currentMonth, d.getYear()) - 1), //find what day of the week the 1st lands on
    (months = [
      "January 2023",
      "February 2023",
      "March 2023",
      "April 2023",
      "May 2023",
      "June 2023",
      "July 2023",
      "August 2023",
      "September 2023",
      "October 2023",
      "November 2023",
      "December 2023",
    ]); // month names
  $("calendar p.monthname").text(months[currentMonth - 1]); // add month name to calendar
}
for (var i = 0; i < fDay - 1; i++) {
  //place the first day of the month in the correct position
  $("<li>&nbsp;</li>").appendTo(".calendar ul");
}

for (var i = 1; i <= days; i++) {
  //write out the days
  $("<li>" + i + "</li>").appendTo(".calendar ul");
}

function firstDay(month, year) {
  return new Date(year, month, 1).getDay();
}

function numDays(month, year) {
  return new Date(year, month, 0).getDate();
}







var clicker = 0;
var min = 0;
var max = 0;

$(".calendar li").click(function () {
  // toggle selected dates
  if (clicker == 0) {
    clicker = 1;
    $(".calendar li").removeClass("red");
    $(this).addClass("red");
    min = $(this).text();
  } else {
    clicker = 0;
    $(this).addClass("red");
    $(".calendar li.red").each(function () {
      max = $(this).text();
    });
    for (i = parseInt(min); i < parseInt(max); i++) {
      $(".calendar li:nth-of-type(" + (i + 7 + fDay - 1) + ")").addClass("red");
    }
  }
});
// test for pull