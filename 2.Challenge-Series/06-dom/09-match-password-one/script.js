/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
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
  //let red = "FF0000";　?? For some reason, this hex # does not work although "red" keyword works.
  let target = document.querySelectorAll("div > input");
  console.log(target[1]);

  document.querySelector("#run").addEventListener("click", () => {
    console.log(passwordInput.value, passwordVal.value);
    if (passwordInput.value === passwordVal.value) {
      console.log("true");
    } else {
      target.forEach(element => (element.style.borderColor = "red"));
    }
  });

  //   document.querySelector("#run").addEventListener("click", () => {
  //     if (passwordInput.value !== passwordVal.value) {
  //       document.querySelectorAll("#field").style.bordercolor = targetColor;
  //     }
  //   });
})();
