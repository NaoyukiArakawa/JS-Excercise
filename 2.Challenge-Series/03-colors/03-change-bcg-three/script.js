/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  document.getElementById("run").addEventListener("click", () => {
    var color = Math.floor(Math.random() * 16777215).toString(16);
    for (count = color.length; count < 6; count++) {
      color = "0" + color;
    }
    var randomColor = "#" + color;

    document.body.style.background = randomColor;
  });
})();
