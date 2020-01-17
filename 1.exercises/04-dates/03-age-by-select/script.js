/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener("click", () => {
        function CalculAge() {  
            var today = new Date();
            var Annee = +document.getElementById("dob-year").value;
            var Mois = +document.getElementById("dob-month").value;
            var Jour = +document.getElementById("dob-day").value;
        
            var dateNaissance = new Date(Annee + "-" + Mois + "-" + Jour);
        
            var age = today.getFullYear() - dateNaissance.getFullYear();
            var m = today.getMonth() - dateNaissance.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < dateNaissance.getDate())) {
                age = age - 1;
            }
            return age;
        }
    alert("Vous avez "+CalculAge()+" ans");
    })
})();
