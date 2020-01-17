/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {

    // your code here
    for (let number = 1; number <= 100; number++) {
        if (number % 3 == 0 && number % 5 == 0) {
            console.log( number + " = " + "fizzbuzz");
        }else if (number % 3 == 0) {
            console.log( number + " = " + "fizz");
        }else if (number % 5 == 0) {
            console.log( number + " = " + "buzz");
        }else {
            console.log(number);
        }
     }
        

})();
