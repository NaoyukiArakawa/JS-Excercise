/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  // your code here
  var arrayNumber = [];
  var length = 11; //length of array
  var max = 100;
  var min = 1;

  for (let i = min; i < length; i++) {
    arrayNumber.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  console.log(arrayNumber);

  //document.getElementById().innerHTML = arrayNumber[0];
})();
