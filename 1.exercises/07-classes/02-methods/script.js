/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        class Person {

            constructor(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            }
            RetourHello () {
                return "Hello "+this.firstname +" "+ this.lastname;
            }
        }

        let a1 = new Person('Jean', 'Némar');
        console.log(a1.RetourHello());
    })
})();
