/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    function DateDuJour()
    {
         var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
         var mois = new Array("janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre");
         var date = new Date();

         var message = jours[date.getDay()] + " ";
         message += date.getDate() + " ";
         message += mois[date.getMonth()] + " ";
         message += date.getFullYear();
         return message;
    }
    function heure()
    {
     var date = new Date();
     var heure = date.getHours();
     var minutes = date.getMinutes();
     if(minutes < 10)
          minutes = "0" + minutes;
     return heure + "h" + minutes;
    }
    function mafonction() {
    var DateHeureMinutes=DateDuJour()+", "+heure();
    document.getElementById("target").innerHTML = DateHeureMinutes;
    }
    setInterval(mafonction, 50); 
})();
