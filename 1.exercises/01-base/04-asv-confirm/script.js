/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
      do{
      userAge = prompt("Quel est ton âge?");
      userSexe = prompt("Quel est ton sexe?");
      userVille = prompt("Quel est ta ville?");
      confirmation = confirm("Est-ce que ton âge est "+userAge+" et ton sexe "+userSexe+" et ta ville "+userVille+" ?");
      }while (confirmation == false);
})();
