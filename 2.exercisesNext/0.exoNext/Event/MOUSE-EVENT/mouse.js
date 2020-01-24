var drop = document.getElementsByClassName('hoverMe');


drop.forEach(element => {

element.addEventListener("mouseover", mouseOver);
element.addEventListener("mouseout", mouseOut);

function mouseOver() {
  drop[i].style.visibility="hidden";
}
function mouseOut() {
    drop[i].style.visibility="visible";
}
});

 
