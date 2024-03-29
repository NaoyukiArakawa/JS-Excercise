/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  var gallery = [
    "../../_shared/img/bell.svg",
    "../../_shared/img/clock.svg",
    "../../_shared/img/compass.svg",
    "../../_shared/img/lemon.svg",
    "../../_shared/img/map.svg"
  ];

  // your code here

  let element = document.querySelectorAll(
    // "img[src='../../_shared/img/bell.svg']"
    //https://www.kirupa.com/html5/finding_elements_dom_using_querySelector.htm
    "figure > img"
  );
  console.log(element[0]);

  document.querySelector("#next").addEventListener("click", () => {
    for (let i = 0; i < 1; i++) {
      element[0].setAttribute("src", gallery[1]);
    }
  });
})();
