/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  document.getElementById("run").addEventListener("click", () => {
    var min = 0;
    var max = 21;

    var a = Math.floor(Math.random() * (max + 1 - min)) + min;

    function square(n) {
      return n * n;
    }

    alert(square(a));
  });
})();
