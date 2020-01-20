/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
    // construction du tableau
    const LesNombres = ["","","","", "", "","", "", "", ""];
    
    // calcul nombre aléatoire
    function entierAleatoire(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var i;
    var Somme= 0;
    for (i = 0; i < LesNombres.length; i++) {
        LesNombres.splice(i, 1, entierAleatoire(1,100));
        document.getElementById("n-"+(i+1)).innerHTML = LesNombres[i];
        Somme=Somme+LesNombres[i];

    }
    document.getElementById("min").innerHTML = Math.min(...LesNombres);
    document.getElementById("max").innerHTML = Math.max(...LesNombres);
    document.getElementById("sum").innerHTML = Somme;
    document.getElementById("average").innerHTML= Somme/LesNombres.length;       
    })
})();
