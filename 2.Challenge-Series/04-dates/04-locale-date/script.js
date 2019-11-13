/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

  // your code here
  const m = [
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const weekday = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  var today = new Date();
  var hour = today.getHours();
  var minutes = today.getMinutes();
  var year = today.getFullYear();
  var month = today.getMonth();
  var monthEng = m[month];
  var date = today.getDate();
  var dayofWeek = today.getDay();
  var dayofWeekEng = weekday[dayofWeek];

  var a =
    dayofWeekEng +
    " " +
    date +
    " " +
    monthEng +
    " " +
    year +
    ", " +
    hour +
    "h" +
    minutes;

  document.getElementById("target").innerHTML = a;
})();
