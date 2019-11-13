/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  // your code here
  document.getElementById("run").addEventListener("click", () => {
    var birthYear = document.getElementById("dob-year").value;
    var birthMonth = document.getElementById("dob-month").value;
    var birthDay = document.getElementById("dob-day").value;
    var now = new Date();

    var currentYear = now.getFullYear();
    var currentMonth = now.getMonth() + 1;
    var currentDay = now.getDate();

    var age = currentYear - birthYear;
    var m = currentMonth - birthMonth;

    console.log(m);

    if (m < 0 || (m === 0 && currentDay < birthDay)) {
      alert(age - 1);
    } else {
      alert(age);
    }
  });
})();
