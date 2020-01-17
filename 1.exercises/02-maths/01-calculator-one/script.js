/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        chiffre1 = +document.getElementById("op-one").value;
        chiffre2 = +document.getElementById("op-two").value;
        resultAddition = chiffre1+chiffre2;
        alert (resultAddition)
    });

    document.getElementById("substraction").addEventListener("click", () => {
        chiffre1 = +document.getElementById("op-one").value;
        chiffre2 = +document.getElementById("op-two").value;
        resultSubstraction = chiffre1-chiffre2;
        alert (resultSubstraction)
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        chiffre1 = +document.getElementById("op-one").value;
        chiffre2 = +document.getElementById("op-two").value;
        resultMultiplication = chiffre1*chiffre2;
        alert (resultMultiplication)
    });

    document.getElementById("division").addEventListener("click", () => {
        chiffre1 = +document.getElementById("op-one").value;
        chiffre2 = +document.getElementById("op-two").value;
        resultDivision = chiffre1/chiffre2;
        alert (resultDivision)
    });
})();
