/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
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

  checker.addEventListener("input", () => {
    var passLength = checker.value.length;
    console.log(passLength);

    target.innerHTML = passLength + "/10";
    checker.maxLength = 10; //prevent user typing text. max 10
  });
})();
