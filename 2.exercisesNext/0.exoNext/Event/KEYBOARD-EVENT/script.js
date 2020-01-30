// Exercice 2
let handleKeyD = (event) => {
    switch (event.key) {
    case "ArrowUp":
        document.getElementById("up").classList.add("highlight");
        break;
    case "ArrowDown":
        document.getElementById("down").classList.add("highlight");
        break;
    case "ArrowLeft":
        document.getElementById("left").classList.add("highlight");
        break;
    case "ArrowRight":
        document.getElementById("right").classList.add("highlight");
        break;
    }
};
let handleKeyU = (event) => {
    switch (event.key) {
    case "ArrowUp":
        document.getElementById("up").classList.remove("highlight");
        break;
    case "ArrowDown":
        document.getElementById("down").classList.remove("highlight");
        break;
    case "ArrowLeft":
        document.getElementById("left").classList.remove("highlight");
        break;
    case "ArrowRight":
        document.getElementById("right").classList.remove("highlight");
        break;
    }
};
window.addEventListener ('keydown', handleKeyD); 
window.addEventListener ('keyup', handleKeyU);








// Exercice 1
// let handleKey = (event) => {
//     switch (event.key) {
//     case "0":
//         document.getElementById("character").style.backgroundColor='rgb(255,0,0)';
//         break;
//     case "1":
//         document.getElementById("character").style.backgroundColor='rgb(0,255,0)';
//         break;
//     case "2":
//         document.getElementById("character").style.backgroundColor='rgb(0,0,255)';
//         break;
//     case "3":
//         document.getElementById("character").style.backgroundColor='rgb(128,128,0)';
//         break;
//     case "4":
//         document.getElementById("character").style.backgroundColor='rgb(128,0,128)';
//         break;
//     case "5":
//         document.getElementById("character").style.backgroundColor='rgb(0,128,128)';
//         break;
//     case "6":
//         document.getElementById("character").style.backgroundColor='rgb(100,100,100)';
//         break;
//     case "7":
//         document.getElementById("character").style.backgroundColor='rgb(200,200,200)';
//         break;
//     case "8":
//         document.getElementById("character").style.backgroundColor='rgb(50,50,10)';
//         break;
//     case "9":
//         document.getElementById("character").style.backgroundColor='rgb(100,10,10)';
//         break;
//     }
// };

// window.addEventListener ('keydown', handleKey); 