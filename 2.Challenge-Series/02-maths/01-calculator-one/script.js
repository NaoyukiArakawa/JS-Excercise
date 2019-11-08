/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    // to get the value of an input: document.getElementById("element-id").value

    let calculate;

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        var a = parseInt(document.getElementById ("op-one").value);   //first input
        var b = parseInt(document.getElementById ("op-two").value); //second input
        alert(calculate = a+b);
    });


    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        var a = parseInt(document.getElementById ("op-one").value);   //first input
        var b = parseInt(document.getElementById ("op-two").value); //second input
        alert(calculate = a-b);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        var a = parseInt(document.getElementById ("op-one").value);   //first input
        var b = parseInt(document.getElementById ("op-two").value); //second input
        alert(calculate = a*b);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        var a = parseInt(document.getElementById ("op-one").value);   //first input
        var b = parseInt(document.getElementById ("op-two").value); //second input
        alert(calculate = a/b);
    });
})();