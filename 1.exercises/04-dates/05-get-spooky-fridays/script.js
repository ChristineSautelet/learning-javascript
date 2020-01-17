/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener("click", () => {
    function Vendredi(LeMois){
        var Annee = +document.getElementById("year").value;
        var Mois = new Array("janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre");
        var LeMois;
        var NouvelleDate = new Date(Annee,LeMois,13);
        LeJour = NouvelleDate.getDay();
        if (LeJour==5){
            var message = " ";
            message += Mois[NouvelleDate.getMonth()] + " ";
            message += NouvelleDate.getFullYear();
            return message;
        }
        else{
            return 0;
        }
    }
    var i=0;
    var message="";
    do{
    var y=(Vendredi(i));
    if (y!==0){
        console.log(Vendredi(i));
        message = message+"\n"+Vendredi(i);
    }
    i=i+1
    }
    while(i<12);
    alert("Les mois avec un vendredi 13 sont:"+"\n"+message);
    })


})();