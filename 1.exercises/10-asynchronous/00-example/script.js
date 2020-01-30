/* becode/javascript
 *
 * /10-asynchronous/00-example/script.js - 10.0: exemple d'asynchronicité
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

(() => {

    const setupIntervalMessage = (label, delay) => {
        let count = 0;
    
        //La méthode setInterval () appelle une fonction ou évalue une expression à des intervalles 
        //spécifiés (en millisecondes).
        //La méthode setInterval () continuera d'appeler la fonction jusqu'à ce que clearInterval () 
        //soit appelé ou que la fenêtre soit fermée.
        //La valeur d'ID retournée par setInterval () est utilisée comme paramètre pour la méthode 
        //clearInterval ().
        // setInterval("instructions", délai) où, par défaut, delay = 10 millisecondes
        
        return setInterval(() => console.log(`${label}:`, ++count), delay);
    };

    //2ref1 Définition du tableau "intervals"

    let intervals = [];

    //1. Quand on appuie sur le bouton
    document.getElementById("run").addEventListener("click", () => {

    //2. Si = (longueur du tableau "intervals") =>
        if (intervals.length) {
            intervals = intervals.filter(clearInterval);
            console.clear();
        }
        intervals.push(setupIntervalMessage("one", 1000));
        intervals.push(setupIntervalMessage("two", 1333));
        intervals.push(setupIntervalMessage("three", 2500));
        intervals.push(setupIntervalMessage("four", 5000));
        intervals.push(setupIntervalMessage("five", 10000));

    });
})();
