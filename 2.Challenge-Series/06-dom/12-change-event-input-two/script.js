/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  // your code here
  var checker = document.querySelector("#pass-one");
  var target = document.querySelector(".indicator");

  checker.addEventListener("change", () => {
    console.log(checker.value.length);
    if (checker.value.length >= 8) {
      target.innerHTML = "Ok";
    }
  });
})();
