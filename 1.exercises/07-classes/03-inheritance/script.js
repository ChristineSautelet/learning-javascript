/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here

    class Chat extends Animal{
        static get greeting (){
            return "Miaou";
        }
        constructor(name){
            super();
            this.name= name;
        }
     }

    class Chien extends Animal{
        static get greeting (){
            return "Wouaf";
        }
        constructor(name){
            super();
            this.name= name;
        }
    }
    document.getElementById("run").addEventListener("click", () => {

    var chat = new Chat("Youri");
    var chien = new Chien("Rex");

    console.log(chat.sayHello());
    console.log(chien.sayHello());
    })

})();
