/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        var nombre = 2;
        do {
        alert("Le carré de "+nombre+" est "+nombre*nombre);
        nombre=nombre+2;
        }
        while (nombre<22);
    });
})();
