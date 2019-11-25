/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  // your code here
  var passwordInput = document.querySelector("#pass-one");
  var passwordVal = document.querySelector("#pass-two");
  let target = document.querySelectorAll("div > input");
  let btn = document.querySelector("#run");

  btn.addEventListener("click", () => {
    if (passwordInput.value !== passwordVal.value) {
      target.forEach(element => element.classList.add("error"));
    }
  });
})();
